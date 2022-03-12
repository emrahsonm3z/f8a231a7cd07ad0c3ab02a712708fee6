/** @type {import('next').NextConfig} */
require('dotenv').config()

const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN
  },
  webpack: (config) => {
    const { resolve } = config

    resolve.alias['~'] = path.resolve(__dirname)

    return config
  }
}

module.exports = nextConfig
