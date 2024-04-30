import "@shopify/shopify-app-remix/adapters/node";
import { DeliveryMethod, shopifyApp } from "@shopify/shopify-app-remix/server";
import { MongoDBSessionStorage } from "@shopify/shopify-app-session-storage-mongodb";
import merchantService from "../services/merchantService.server";

const shopify = shopifyApp({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET || "",
  scopes: process.env.SHOPIFY_API_SCOPES?.split(","),
  appUrl: process.env.SHOPIFY_APP_URL,
  sessionStorage: new MongoDBSessionStorage(
    process.env.MONGO_URL,
    process.env.MONGO_DB
  ),
  webhooks: {
    APP_UNINSTALLED: {
      deliveryMethod: DeliveryMethod.Http,
      callbackUrl: "/webhooks",
    },
  },
  hooks: {
    afterAuth: async ({ session }) => {
      shopify.registerWebhooks({ session });
      const { shop, accessToken } = session;
      const credentials = { shop, accessToken };

      const status = await merchantService.merchantStatus(shop);
      if (status.isRegistered) {
        // Login
        //await merchantService.merchantLogin(credentials);
      } else {
        // Register
        await merchantService.registerMerchant(credentials);
      }
    },
  },
  future: {
    v3_webhookAdminContext: false,
    v3_authenticatePublic: false,
    unstable_newEmbeddedAuthStrategy: false,
  },
});

export default shopify;

export const authenticate = shopify.authenticate;
export const login = shopify.login;
export const registerWebhooks = shopify.registerWebhooks;
