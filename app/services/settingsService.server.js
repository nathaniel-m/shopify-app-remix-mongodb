import prisma from "../lib/db.server";
import logger from "../lib/logger.server";

// Add default settings here
const DEFAULT_SETTINGS_ENUM = {

  
};

const update = async (shop, payload) => {
  try {
    await prisma.settings.upsert({
      where: { shop: shop },
      update: {
        updatedAt: new Date(),
      },
      create: {
        shop,
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

const createSettings = async (shop) => {
  const payload = {
    shop,
  };

  update(shop, payload);

  logger.info("Settings Created on DB", { shop });
};

const deleteSettings = async (shop) => {
    try {
      await prisma.settings.deleteMany({ where: { shop } });
    } catch (e) {
      logger.error(
        `---> An error occured in the delete merchants function: ${e.message}`,
        e
      );
    }
    logger.debug("Settings Deleted on DB", { shop });
  
    return true;
  };

const settingsService = { deleteSettings, createSettings };

export default settingsService;
