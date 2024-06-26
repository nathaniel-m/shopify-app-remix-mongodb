import merchantService from "../services/merchantService.server";
import settingsService from "../services/settingsService.server";
import shopService from "../services/shopService.server";

const initialSetup = async (shopData) => {
  const shop = shopData.myshopifyDomain;
  // Create Merchant
  const merchant = await merchantService.createMerchant(shop);

  // Create Settings Data
  await settingsService.createSettings(shop);

  // Create Shop
  await shopService.createShop(shopData);

  return merchant;
};

export default initialSetup;
