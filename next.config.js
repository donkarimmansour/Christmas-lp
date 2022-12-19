// import  i18n from "./next-i18next.config.js"
// import dotenv  from "dotenv"
// dotenv.config()

const {i18n} = require("./next-i18next.config.js") 
require("dotenv").config()


module.exports = {
  reactStrictMode: true,
   i18n : i18n,
   swcMinify: true,
  //trailingSlash: true,
  // basePath: '/',               
  // serverRuntimeConfig: {},

  compiler: {
    styledComponents: true,
  },
  env: {
    API_URL: process.env.API_URL,
  },
  
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,  
  },

  images: {
    domains: ['res.cloudinary.com'],
  },
  


  // webpack: (config, { dev, isServer }) => {
  //   // config.module.rules.push({
  //   //   test: /\.svg$/,
  //   //   use: ['@svgr/webpack'],
  //   // })

  //   if (!dev && !isServer) {
  //     // Replace three with three only in client production build
  //     Object.assign(config.resolve.alias, {
  //       'three': '~./node_modules/three',
  //     })
  //   }

  //   return config
  // },

  // future: {
  //   webpack5: true, // by default, if you customize webpack config, they switch back to version 4. 
  //     // Looks like backward compatibility approach.
  // },
  // webpack(config) {
  //   config.resolve.fallback = {
  //     ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
  //       // by next.js will be dropped. Doesn't make much sense, but how it is
  //     fs: false, // the solution
  //   };

  //   return config;
  // },
  
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve = {
  //       ...config.resolve,
  //       fallback: {
  //         ...config.resolve.fallback,
  //         fs: false,
  //       },
  //     };
  //   }
  //   config.module = {
  //     ...config.module,
  //     exprContextCritical: false,
  //   };
  //   return config;
  // },

} 
   