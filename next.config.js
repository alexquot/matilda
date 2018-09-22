const withSass = require('@zeit/next-sass');

const isProduction = process.env.NODE_ENV === 'production';
const baseHref = isProduction ? '/matilda' : '';

const config = {
  assetPrefix: baseHref,
  publicRuntimeConfig: {
    isProduction,
    baseHref
  }
};

module.exports = withSass(config);
