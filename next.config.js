const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
}
