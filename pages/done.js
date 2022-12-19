
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Loader from '../components/Loader';
import dynamic from 'next/dynamic';
const Done = dynamic(() => import("../components/CHRISTMAS/Done"), {  
  ssr: false,
   loading: () => <Loader />, 
}) 
 
 
const done = () => {  
  
  const SEO = {
    title: "Next website",  
    description: "Database of movies created with Next.js and Strapi",
  } 

  return (
    <> 
          <div>
            {/* @@@@@@@@@@@@@@@@@@@ Start @@@@@@@@@@@@@@@@@@@@ */}

          {/* @@@@@@@@@@@@@@@@@@@ header @@@@@@@@@@@@@@@@@@@@ */}
          <Header/>

          <main>
            {/* @@@@@@@@@@@@@@@@@@@ Done @@@@@@@@@@@@@@@@@@@@ */}
            <Done/>
          
             </main>
          {/* @@@@@@@@@@@@@@@@@@@ footer @@@@@@@@@@@@@@@@@@@@ */}
          <Footer/>

           {/* @@@@@@@@@@@@@@@@@@@ scroll up @@@@@@@@@@@@@@@@@@@@ */}
  
          <ScrollTopAndComment />

          {/* @@@@@@@@@@@@@@@@@@@ End @@@@@@@@@@@@@@@@@@@@ */}
        </div>

    </>
  ) 
}  


export default done 

 
 export async function getServerSideProps({req, locale}) {  
  // console.log(req.headers["accept-language"]  , locale); 
  const lcl = req?.cookies?.NEXT_LOCALE || locale  

   return { 
     props: {
       ...(await serverSideTranslations(lcl, ['common' , 'message'])),
     }, 
   };
 } 
  