
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo"
import Loader from '../components/Loader';
import dynamic from 'next/dynamic';
const Index = dynamic(() => import("../components/CHRISTMAS/index"), {  
  ssr: false,
   loading: () => <Loader />,
}) 
 


 
const Home = () => {  
  
  const SEO = {
    title: "Next website",  
    description: "Database of movies created with Next.js and Strapi",
  }

  return (
    <> 
      <NextSeo {...SEO} />
       <Index />

    </>
  ) 
}  


export default Home 

 
//  export async function getServerSideProps({req, locale}) {  
//   // console.log(req.headers["accept-language"]  , locale); 
//   const lcl = req?.cookies?.NEXT_LOCALE || locale 

//    return { 
//      props: {
//        ...(await serverSideTranslations(lcl, ['common' , 'phone'])),
//      }, 
//    };
//  } 
  