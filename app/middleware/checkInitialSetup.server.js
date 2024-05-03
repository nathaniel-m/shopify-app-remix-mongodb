import { authenticate } from "../lib/shopify.server";
import merchantService from "../services/merchantService.server";
import shopService from "../services/shopService.server";
import initialSetup from "../utils/initialSetup.server";
import shopQuery from "../mutations/shop.server";

const checkInitialSetup = async (request) => {
  let { searchParams } = new URL(request.url);
  const shop = searchParams.get("shop");

  const status = await merchantService.merchantStatus(shop);
  if (status.isRegistered) {
    // Login
    console.log("is Registered", status);
  } else {
    // Register
    const { admin } = await authenticate.admin(request);

    const response = await admin.graphql(shopQuery);
    const responseJson = await response.json();

    initialSetup(responseJson.data.shop);
  }
};

export default checkInitialSetup;
