// @ts-check
require("dotenv").config();
const path = require("path");
const webpack = require("webpack");
const withPlugins = require("next-compose-plugins");
const offline = require("next-offline");
const optimizedImages = require("next-optimized-images");
const withCustomBabelConfig = require("next-plugin-custom-babel-config");
// const withTranspileModules = require("next-transpile-modules")(["@azinove/common"]);
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

const nextConfig = {
  env: {
    API_KEY: process.env.API_KEY,
    APP_ID: process.env.APP_ID,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    DATABASE_URL: process.env.DATABASE_URL,
    MEASUREMENT_ID: process.env.MEASUREMENT_ID,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    DRIVE_CLOUD_IMAGE: process.env.DRIVE_CLOUD_IMAGE,
    HOSTNAME: process.env.HOSTNAME,
    FUNCTION_API: process.env.FUNCTION_API,
    FUNCTION_STRIPE: process.env.FUNCTION_STRIPE,
    FUNCTION_RESOURCE_MANAGER: process.env.FUNCTION_RESOURCE_MANAGER,
    SEGMENT_WRITE_KEY: process.env.SEGMENT_WRITE_KEY,
    STRIPE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
    STRIPE_PRICE_COMPLET_PAGE_KEY: process.env.STRIPE_PRICE_COMPLET_PAGE_KEY,
    STRIPE_PRICE_ONE_PAGE_KEY: process.env.STRIPE_PRICE_ONE_PAGE_KEY,
    USE_AUTH0_MOCKUP: process.env.USE_AUTH0_MOCKUP,
    USER_TEST_ONE_ID: process.env.USER_TEST_ONE_ID,
    USER_TEST_ONE_EMAIL: process.env.USER_TEST_ONE_EMAIL,
    USER_TEST_ONE_FAMILY_NAME: process.env.USER_TEST_ONE_FAMILY_NAME,
    USER_TEST_ONE_NAME: process.env.USER_TEST_ONE_NAME,
    USER_TEST_ONE_GIVEN_NAME: process.env.USER_TEST_ONE_GIVEN_NAME,
    USER_TEST_ONE_NICKNAME: process.env.USER_TEST_ONE_NICKNAME,
    USER_TEST_ONE_PICTURE: process.env.USER_TEST_ONE_PICTURE,
    USER_TEST_ONE_DRIVEID: process.env.USER_TEST_ONE_DRIVEID,
    USER_TEST_TWO_ID: process.env.USER_TEST_TWO_ID,
    USER_TEST_TWO_EMAIL: process.env.USER_TEST_TWO_EMAIL,
    USER_TEST_TWO_FAMILY_NAME: process.env.USER_TEST_TWO_FAMILY_NAME,
    USER_TEST_TWO_NAME: process.env.USER_TEST_TWO_NAME,
    USER_TEST_TWO_GIVEN_NAME: process.env.USER_TEST_TWO_GIVEN_NAME,
    USER_TEST_TWO_NICKNAME: process.env.USER_TEST_TWO_NICKNAME,
    USER_TEST_TWO_PICTURE: process.env.USER_TEST_TWO_PICTURE,
    USER_TEST_TWO_DRIVEID: process.env.USER_TEST_TWO_DRIVEID,
    ALGOLIA_SEACH_ONLY_API_KEY: process.env.ALGOLIA_SEACH_ONLY_API_KEY,
    ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
    RECAPTCHA_KEY: process.env.RECAPTCHA_KEY
  },
  webpack(cfg) {
    const originalEntry = cfg.entry;
    cfg.entry = async () => {
      const entries = await originalEntry();
      if (entries["main.js"] && !entries["main.js"].includes("./polyfills")) {
        entries["main.js"].unshift("./polyfills");
      }
      return entries;
    };
    cfg.plugins = cfg.plugins || [];
    return cfg;
  }
};

module.exports = withPlugins(
  [
    withBundleAnalyzer,
    [
      offline,
      {
        maximumFileSizeToCacheInBytes: 4 * 1024 * 1024, // 4Mb
        transformManifest: (manifest) => ["/"].concat(manifest), // add the homepage to the cache
        generateInDevMode: false,
        workboxOpts: {
          runtimeCaching: [
            {
              urlPattern: /\.(?:png|gif|jpg|jpeg|svg|webp)$/,
              handler: "CacheFirst",
              options: {
                cacheName: "images",
                expiration: {
                  maxEntries: 60,
                  maxAgeSeconds: 30 * 24 * 60 * 60,
                  purgeOnQuotaError: true
                }
              }
            },
            {
              urlPattern: /^https:\/\/(use|p)\.typekit\.net\/.+$/,
              handler: "StaleWhileRevalidate",
              options: {
                cacheName: "typekit-cache",
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            },
            {
              urlPattern: /^https?.*/,
              handler: "NetworkFirst",
              options: {
                cacheName: "offlineCache",
                expiration: {
                  maxEntries: 200
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            }
          ]
        }
      }
    ],
    [
      optimizedImages,
      {
        handleImages: ["gif", "jpeg", "png", "svg", "webp"]
      }
    ],
    [withCustomBabelConfig, { babelConfigFile: path.resolve("../../babel.config.js") }]
  ],
  nextConfig
);
