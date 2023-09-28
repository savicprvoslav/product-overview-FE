/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  env: {
    API: process.env.API,
  }
}

module.exports = nextConfig
