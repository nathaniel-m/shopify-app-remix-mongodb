import { authenticate } from "../lib/shopify.server";
import sessionService from "../services/sessionService.server";
import merchantService from "../services/merchantService.server";
import settingsService from "../services/settingsService.server";

export const action = async ({ request }) => {
  const { topic, shop, session, admin } = await authenticate.webhook(request);

  if (!admin) {
    // The admin context isn't returned if the webhook fired after a shop was uninstalled.
    throw new Response();
  }

  switch (topic) {
    case "APP_UNINSTALLED":
      if (session) {
        try {
          await sessionService.deleteSession(shop);
          await merchantService.deleteMerchant(shop);
          await settingsService.deleteSettings(shop);

          console.log("APP_UNINSTALLED: ", shop)
        } catch (error) {
          console.log("error:", error);
        } 
      }

      break;
    case "CUSTOMERS_DATA_REQUEST":
    case "CUSTOMERS_REDACT":
    case "SHOP_REDACT":
    default:
      throw new Response("Unhandled webhook topic", { status: 404 });
  }

  throw new Response();
};
