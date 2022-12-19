import { appWithTranslation } from 'next-i18next'
import Head from 'next/head'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {

  return <>
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* @@@@@@@@@@@@@@@@@@@ favicon @@@@@@@@@@@@@@@@@@@@ */}
      <link rel="shortcut icon" href="/imgs/favicon.png" type="image/x-icon" />
      {/* @@@@@@@@@@@@@@@@@@@ boxicons @@@@@@@@@@@@@@@@@@@@ */}
      <link href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css" rel="stylesheet" />

      <title>Christmas</title>
    </Head>
    
    <Component {...pageProps} />
  </>

}

export default appWithTranslation(MyApp)
