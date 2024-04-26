import prisma from "../lib/db.server";
import logger from "../lib/logger.server"

  const deleteSession = async (shop) => {
    
    logger.info(`>>>>> sessionService.deleteSession`);
    await prisma.shopify_sessions.deleteMany({ where: { shop } });
    logger.debug("sessionService.deleteSession", { shop } );
    logger.info(`<<<<< sessionService.deleteSession`);
    return true;
  };


  const sessionService = { deleteSession };

export default sessionService;

