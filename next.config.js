const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: ['213.139.209.59'],
  },
}
