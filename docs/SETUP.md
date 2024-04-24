# Setup

This is a guide on using this repo. 

- Run `npm run install` to install dependencies if you haven't already.

- Run `npm run ngrok` to generate your subdomain. Copy the `https://<your-url>` domain you will need this as you setup the app. 

- Create a new app (Public or Custom) from your [Shopify Partner Dashboard](https://partners.shopify.com).
  - In the Shopify Partner Dashboard > Apps > _Your App Name_ > Configuration
      - In the URLs section
        - App URL: URL generated from Ngrok `https://<your-url>`
        - Allowed Redirection URL(s):
          - `https://<your-url>/auth/callback`

- I use Pino and Betterstack for logging.
  - Logs are stored in a file `app.log` in the `app` directory and sen to Better Stack
  - If you do not want to use Better Stack remove the transport in `lib/logger.server.js`
  - Create a new betterstack account at [Better Stack](https://betterstack.com/logs)
  - In the Sources Section
    - Connect Source
      - Name the Source
      - Choose Javascript Node for the Platform
      - Create Source
  - Make note of the Source token for the .env file later


- Build your `.env` file based on `.env.example`

  - `SHOPIFY_API_KEY`: App API key. *In the Shopify Partner Dashboard*
  - `SHOPIFY_API_SECRET`: App secret. *In the Shopify Partner Dashboard*
  - `SHOPIFY_API_SCOPES`: Scopes required by your Shopify app. A list of access scopes can be found [here](https://shopify.dev/api/usage/access-scopes)
  - `SHOPIFY_APP_URL`: URL generated from Ngrok `https://<your-url>`
  - `SHOPIFY_API_VERSION`: Pre-filled to the latest version. 
  - `MONGO_URL`: Mongo connection URL. *`mongodb+srv://<username>:<password>@<database>.<url.mongodb.net>`*
  - `LOGTAIL_PINO_KEY` : Source Token. *In the betterstack sources config* 

- NPM Scripts

  - `dev`: Run in dev mode.
  - `build`: Use Vite to build React into `dist/client`. If you don't run build, you cannot serve anything in dev / production modes.
  - `start`: Run in production mode. Please run `npm run build` before to compile client side.

- [ ] Running App

  - In terminal window `npm run dev` or `npm run start` depending on how you want to test your app.
