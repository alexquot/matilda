const withSass = require('@zeit/next-sass');

const config = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/matilda' : ''
};

module.exports = withSass(config);
