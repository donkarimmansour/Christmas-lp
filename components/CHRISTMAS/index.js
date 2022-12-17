import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollTopAndComment from '../ScrollTopAndComment';
import Message from './Message';
import New from './New';
import Gift from './Gift';
import Celebrate from './Celebrate';
import Giving from './Giving';
import Home from './Home';
import Footer from './Footer';
import Header from './Header';

const Index = () => {  
   
    useEffect(() => {
  
      AOS.init({
        delay: 0,
        duration: 400
      });
  
    }, [])

  
    return (
      <>   
  
        <div>
            {/* @@@@@@@@@@@@@@@@@@@ Start @@@@@@@@@@@@@@@@@@@@ */}

          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* @@@@@@@@@@@@@@@@@@@ favicon @@@@@@@@@@@@@@@@@@@@ */}
          <link rel="shortcut icon" href="/imgs/favicon.png" type="image/x-icon" />
          {/* @@@@@@@@@@@@@@@@@@@ boxicons @@@@@@@@@@@@@@@@@@@@ */}
          <link href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css" rel="stylesheet" />

          <title>Christmas</title>
          {/* @@@@@@@@@@@@@@@@@@@ header @@@@@@@@@@@@@@@@@@@@ */}
          <Header/>

          <main>
            {/* @@@@@@@@@@@@@@@@@@@ home @@@@@@@@@@@@@@@@@@@@ */}
            <Home/>
             {/* @@@@@@@@@@@@@@@@@@@ giving @@@@@@@@@@@@@@@@@@@@ */}
             <Giving/>

            {/* @@@@@@@@@@@@@@@@@@@ celebrate @@@@@@@@@@@@@@@@@@@@ */}
            <Celebrate/>

            {/* @@@@@@@@@@@@@@@@@@@ gift @@@@@@@@@@@@@@@@@@@@ */}
            <Gift/>

            {/* @@@@@@@@@@@@@@@@@@@ new @@@@@@@@@@@@@@@@@@@@ */}
            <New/>

             {/* @@@@@@@@@@@@@@@@@@@ message @@@@@@@@@@@@@@@@@@@@ */}
             <Message/>

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
  
  
  export default Index 