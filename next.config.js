require('dotenv').config()

const path = require('path')
const withFonts = require('next-fonts')

module.exports = withFonts({
  env: {
    SENDER_EMAIL: process.env.SENDER_EMAIL,
    SENDER_EMAIL_PASSWORD: process.env.SENDER_EMAIL_PASSWORD
  },
  webpack: (config, options) => {
      config.optimization.minimize = true;
      config.optimization.providedExports = true;
      config.optimization.usedExports = true;
      config.optimization.sideEffects = true;
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async headers() {
    return [
      {
        source: "/(.*?)",
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Permitted-Cross-Domain-Policies',
            value: 'master-only',
          },
          {
            key: 'Referrer-Policy',
            value: 'same-origin',
          },
          {
            key: 'X-App-Name',
            value: 'landing'
          }
        ],
      },
    ]
  },
})
