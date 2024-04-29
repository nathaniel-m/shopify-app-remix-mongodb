import Cryptr from "cryptr";

const encryption = new Cryptr(process.env.ENCRYPTION_STRING);

export default encryption;
