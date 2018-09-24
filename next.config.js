const fs = require('fs');
const path = require('path');
const withSass = require('@zeit/next-sass');

const isProduction = process.env.NODE_ENV === 'production';

// Trailing slash is important (see <base> tag spec)!
const baseHref = isProduction ? '/matilda/' : '/';

const matildaComment = /\s*\/\/\s*Matilda\s*$/i;
const matildaVariables = fs
  .readFileSync(path.resolve(__dirname, 'scss/_variables.scss'))
  .toString()
  .split('\n')
  .filter(s => matildaComment.test(s))
  .map(s => s.replace(matildaComment, '').trim());

const config = {
  sassLoaderOptions: {
    includePaths: [path.resolve(__dirname, 'scss')]
  },
  assetPrefix: baseHref,
  publicRuntimeConfig: {
    isProduction,
    baseHref,
    matildaVariables
  }
};

module.exports = withSass(config);
