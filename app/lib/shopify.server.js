import "@shopify/shopify-app-remix/adapters/node";
import {
  shopifyApp,
} from "@shopify/shopify-app-remix/server";
import { MongoDBSessionStorage } from "@shopify/shopify-app-session-storage-mongodb";

const shopify = shopifyApp({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET || "",
  scopes: process.env.SHOPIFY_API_SCOPES?.split(","),
  appUrl: process.env.SHOPIFY_APP_URL,
  sessionStorage: new MongoDBSessionStorage(process.env.MONGO_URL, "images"),
  hooks: {
    afterAuth: async ({session}) => {

    },
  },
});

export default shopify;

export const login = shopify.login;
export const authenticate = shopify.authenticate;
