import Image from "next/image"
import { useTranslation } from "react-i18next"

const Footer = () => {
  const { t } = useTranslation('footer')
 
  return (  
    <footer className="footer section">
      <div className="container">
        <div className="footer__container">
          <div className="footer__content">
            <a href="#" className="footer__logo">
              <Image width={200} height={200} src="/imgs/logo.png" alt="" /> {t(`text1`)}
            </a>
            <p className="footer__description">
            {t(`text2`)} <br />
            {t(`text3`)}
            </p>
          </div> 

{/*           
          <div className="footer__content">
            <h3 className="footer__title">Our Services</h3>
            <ul className="footer__list">
              <li>
                <a href="#" className="footer__link">Pricing</a>
              </li>
              <li>
                <a href="#" className="footer__link">Discounts</a>
              </li>
              <li>
                <a href="#" className="footer__link">Shipping mode</a>
              </li>
            </ul>
          </div>
          <div className="footer__content"> 
            <h3 className="footer__title">Support</h3>
            <ul className="footer__list">
              <li>
                <a href="#" className="footer__link">FAQs</a>
              </li>
              <li>
                <a href="#" className="footer__link">Support center</a>
              </li>
              <li>
                <a href="#" className="footer__link">Contact Us</a>
              </li>
            </ul>
          </div>*/}
          {/* <div className="footer__content">
            <h3 className="footer__title">Available On</h3>
            <div className="footer__button-container">
              <button className="footer__button">
                <i className="bx bxl-play-store footer__button-icon" />
                <div>
                  <span className="footer__button-subtitle">GET IT ON</span>
                  <span className="footer__button-title">Google Play</span>
                </div>
              </button>
              <button className="footer__button">
                <i className="bx bxl-apple footer__button-icon" />
                <div>
                  <span className="footer__button-subtitle">Download on the</span>
                  <span className="footer__button-title">App Store</span>
                </div>
              </button>
            </div>
          </div>
          */}
          <Image width={200} height={200} src="/imgs/footer1.png" alt="" className="footer__img-left" />
          <Image width={200} height={200} src="/imgs/footer2.png" alt="" className="footer__img-right" />
        </div>
        <p className="footer__copy">
          © 2022 coded by
          <a href="#" target="_blank"> christmas dev.</a>
        </p>
      </div>
    </footer>

  )
}

export default Footer