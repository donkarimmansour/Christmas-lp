const path = require('path') 

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar', 'fr' , 'es'],
    //localeDetection: false, 

    // domains: [
    //   {
    //     domain: 'example.com',
    //     defaultLocale: 'en-US',
    //   },
    //   {
    //     domain: 'example.com',
    //     defaultLocale: 'fa-US',
    //   },
    // ],
    //  use: [initReactI18next],   // this line did not affect the error in any way
    // react: { useSuspense: false } ,
    // localeStructure: '{{lng}}/{{ns}}',

   
  },
  // debug: process.env.NODE_ENV === 'development',
  localePath: path.resolve('./public/locales'),
  //  ns: ['common'],

}

