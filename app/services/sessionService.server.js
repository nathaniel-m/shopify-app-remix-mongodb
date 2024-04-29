import prisma from "../lib/db.server";
import logger from "../lib/logger.server";

const deleteSession = async (shop) => {
  try {
    await prisma.shopify_sessions.deleteMany({ where: { shop } });
  } catch (e) {
    logger.error(
      `---> An error occured in the delete session function: ${e.message}`,
      e
    );
  }
  logger.debug("Session Deleted on DB", { shop });

  return true;
};

const sessionService = { deleteSession };

export default sessionService;
