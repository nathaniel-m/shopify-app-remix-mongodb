import prisma from "../lib/db.server";
import logger from "../lib/logger.server";

const updateShop = async (payload) => {
  try {
    await prisma.shops.upsert({
      where: { myshopifyDomain: payload.myshopifyDomain },
      update: {
        ...payload,
        updatedAt: new Date(),
      },
      create: {
        ...payload,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  } catch (e) {
    logger.error(
      `---> An error occured in merchant update function: ${e.message}`,
      e
    );
  }
};

const createShop = async (shopData) => {

  const payload = {
    myshopifyDomain: shopData.myshopifyDomain,
    id_: shopData.id,
    email: shopData.email,
    name: shopData.name,
    primaryDomain: shopData.primaryDomain.url,
    isActive: true,
  };

  updateShop(payload);

  logger.info("Shop Created on DB", shopData.myshopifyDomain);
};

const deleteShop = async (shop) => {
  try {
    await prisma.shops.deleteMany({ where: { myshopifyDomain: shop } });
  } catch (e) {
    logger.error(
      `---> An error occured in the delete merchants function: ${e.message}`,
      e
    );
  }
  logger.debug("Shop Deleted on DB", { shop });

  return true;
};

const shopService = { createShop, updateShop, deleteShop };

export default shopService;
