Changelog

## Key

* `[CHANGE]`: A breaking change. 
* `[FEATURE]`: A non-breaking improvement to the app. 
* `[UI]`: Non-breaking changes to the default user interface (HTML/CSS).
* `[BUGFIX]`: Fixes a bug with a non-breaking change.
* `[OPTIM]`: Optimization or performance increase.
* `[DOC]`: Documentation changes.
* `[SECURITY]`: A change which fixes a security vulnerability.


## Changes

### 0.1.10 (May 4, 2024)

* [CHANGE] Merchant is set to active by default, other status are removed for now. If a shop is in the db it is active. 
* [CHANGE] Initial Setup Returns the Merchant.
* [FEATURE] App Index now loads the current plan. 

### 0.1.9 (May 3, 2024)

* [CHANGE] Moved Initial setup from shopify afterauth to setup on initial start.
* [CHANGE] Changed update function to updateMerchant in merchantService
* [CHANGE] Removed registerMerchant Function, use createMerchant now.
* [CHANGE] No longer store access token in the merchant DB.
* [CHANGE] Changed update function to updateSettings in settings Service
* [FEATURE] Added shop setup during initial start. 

### 0.1.8 (April 30, 2024)

* [CHANGE] Renamed merchantRegister to registerMerchant
* [FEATURE] Added settings setup during install. 

### 0.1.7 (April 29, 2024)

* [CHANGE] Removed Prisma from shopify.server. Now uses Plain Mongo. Prisma is still used throughout the project. 
* [FEATURE] Added merchant setup during install. 
* [FEATURE] Added support for encryption.

### 0.1.6 (April 25, 2024)

* [CHANGE] Removed MongoDB package for db storage
* [FEATURE] Added Prisma for db storage
* [FEATURE] Added support for webhooks

### 0.1.5 (April 24, 2024)

* [FEATURE] Added MongoDB  

### 0.1.4 (April 24, 2024)

* [FEATURE] Added Pino Logging with Transport to Better Stack 

### 0.1.3 (April 23, 2024)

* [UI] Designed the index page 

### 0.1.2 (April 22, 2024)

* [FEATURE] Added support for Tailwindcss

### 0.1.1 (April 21, 2024)

* [FEATURE] Added support for Netlify Deploy

### 0.1.0 (April 21, 2024)

* [CHANGE] Added Routes, Server and other support for Shopify Integration

### 0.0.2 (April 19, 2024)

* [DOC] Updated README, added CHANGELOG, Created docs folder and added SETUP

### 0.0.1 (April 19, 2024)

* [FEATURE] First release!