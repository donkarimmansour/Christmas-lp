import { NextSeo } from "next-seo"
import { useRouter } from "next/router"
import propTypes from 'prop-types'
import { useEffect } from "react"
import { useTranslation } from "react-i18next"

const FourZeroFour = () => {

 // const { t } = useTranslation('common')

  const SEO = {
    title: "Next website",  
    description: "Database of movies created with Next.js and Strapi",
  }

  const { locale, pathname, query, asPath , push} = useRouter();

  useEffect(() => {
     push("/")
    // push({ pathname, query }, asPath, { locale: locale })
  } , [])
 

  return (
    <>
      
     <NextSeo {...SEO } />
      not found
    </>
  ) 
}


FourZeroFour.propTypes = {
  //t: propTypes.func.isRequired,
}
 

// FourZeroFour.getInitialProps = async () => {
//   return { 
//     namespacesRequired: ['common']
//   }
// }

export default FourZeroFour
 


