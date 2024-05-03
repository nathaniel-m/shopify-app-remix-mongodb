import prisma from "../lib/db.server";
import logger from "../lib/logger.server";
import encryption from "../lib/encryption.server";
import settingsService from "./settingsService.server";

const MERCHANT_ENUM = {
  STATUS: {
    ACTIVE: "active",
    DELETED: "deleted",
    NO_USER: "no_user",
    INACTIVE: "inactive",
  },
};

const updateMerchant = async (shop, payload) => {
  try {
    await prisma.merchants.upsert({
      where: { shop: shop },
      update: {
        plan: payload.plan,
        status: payload.status,
        subscriptionId: payload.subId,
        scriptTagId: payload.tagId,
        updatedAt: new Date(),
      },
      create: {
        plan: payload.plan,
        status: payload.status,
        subscriptionId: payload.subId,
        shop: payload.shop,
        scriptTagId: payload.tagId,
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

const getMerchant = async (shop) => {
  let merchant;
  try {
    merchant = await prisma.merchants.findUnique({ where: { shop } });
  } catch (e) {
    logger.error(
      `---> An error occured in the get merchant function: ${e.message}`,
      e
    );
  }
  return merchant;
};

const createMerchant = async (shop) => {
  const payload = {
    shop,
    status: MERCHANT_ENUM.STATUS.INACTIVE,
    subId: "",
    plan: "FREE",
    tagId: "",
  };

  updateMerchant(shop, payload);

  logger.info("User Created on DB", { shop });
};

const merchantStatus = async (shop) => {
  const merchant = await getMerchant(shop);

  const status = merchant ? merchant.status : MERCHANT_ENUM.STATUS.NO_USER;
  const isActive = status === MERCHANT_ENUM.STATUS.ACTIVE;
  const isInactive = status === MERCHANT_ENUM.STATUS.INACTIVE;
  const isRegistered = isActive || isInactive;
  const isDeleted = status === MERCHANT_ENUM.STATUS.DELETED;

  const response = {
    status,
    isRegistered,
    isActive,
    isInactive,
    isDeleted,
  };

  return response;
};

const deleteMerchant = async (shop) => {
  try {
    await prisma.merchants.deleteMany({ where: { shop } });
  } catch (e) {
    logger.error(
      `---> An error occured in the delete merchants function: ${e.message}`,
      e
    );
  }
  logger.debug("Merchant Deleted on DB", { shop });

  return true;
};

const merchantService = {
  deleteMerchant,
  merchantStatus,
  createMerchant,
  updateMerchant,
};

export default merchantService;
