// import {NextSeo} from 'next-seo'
// import propTypes from 'prop-types'
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import getConfig from 'next/config';
// import { useTranslation } from 'react-i18next';

// const SSR = () => {

//     const { t } = useTranslation('common')


//   const SEO = {
//     title: "Next website",
//     description: "Database of movies created with Next.js and Strapi",
//     image: "logo.png",
//     locale: "en" ,
//     type: 'website',
//     url: 'https://website.com',
//     site_name: 'test',
//     keyword: 'test website',
//     author : "karim mansour"
// }

//   return (
//     <>
//       <NextSeo {...SEO } />
//       {t('t')}

//     </>
//   )
// }

// export default SSR

// SSR.propTypes = {
//   //t: propTypes.func.isRequired,
// }
 
// const {publicRuntimeConfig} = getConfig()


// export async function getServerSideProps({ req, locale}) {  
//  // console.log(req.headers["accept-language"]  , locale);

//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['common'])),
//     },
//   };
// }
