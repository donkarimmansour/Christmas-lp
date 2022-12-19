import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollTopAndComment from '../ScrollTopAndComment';
import Message from './Message';
import Participants from './Participants';
import Gift from './Gift';
import Grand from './Grand';
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


          {/* @@@@@@@@@@@@@@@@@@@ header @@@@@@@@@@@@@@@@@@@@ */}
          <Header/>

          <main>
            {/* @@@@@@@@@@@@@@@@@@@ home @@@@@@@@@@@@@@@@@@@@ */}
            <Home/>
             {/* @@@@@@@@@@@@@@@@@@@ giving @@@@@@@@@@@@@@@@@@@@ */}
             {/* <Giving/> */}

            {/* @@@@@@@@@@@@@@@@@@@ Grand @@@@@@@@@@@@@@@@@@@@ */}
            <Grand/>

            {/* @@@@@@@@@@@@@@@@@@@ gift @@@@@@@@@@@@@@@@@@@@ */}
            <Gift/>

            {/* @@@@@@@@@@@@@@@@@@@ Participants @@@@@@@@@@@@@@@@@@@@ */}
            <Participants/>

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