import Image from "next/image"
import { useTranslation } from "react-i18next"

const Gift = () => { 
  const { t } = useTranslation('gift') 

  return (
    <section className="gift section" id="gift" data-aos="fade-down">
      <div className="container">
        <h2 className="section-title">{t(`text1`)}</h2>
        <div className="gift__container">
          <div className="gift__card">
            {/* <i className="bx bx-heart gift__icon" /> */}
            <Image width={200} height={200} src="/imgs/gift1.png" alt="" className="gift__img" />
            <h3 className="gift__price">1 * 1000</h3>
            <span className="gift__description">{t(`text2`)}</span>
          </div>
          <div className="gift__card">
            {/* <i className="bx bx-heart gift__icon" /> */}
            <Image width={200} height={200} src="/imgs/gift2.png" alt="" className="gift__img" />
            <h3 className="gift__price">1 * 1000</h3>
            <span className="gift__description">{t(`text3`)}</span>
          </div>
          <div className="gift__card">
            {/* <i className="bx bx-heart gift__icon" /> */}
            <Image width={200} height={200} src="/imgs/gift3.png" alt="" className="gift__img" />
            <h3 className="gift__price">1 * 1000</h3>
            <span className="gift__description">{t(`text4`)}</span>
          </div>
          <div className="gift__card">
            {/* <i className="bx bx-heart gift__icon" /> */}
            <Image width={200} height={200} src="/imgs/gift4.png" alt="" className="gift__img" />
            <h3 className="gift__price">1 * 1000</h3>
            <span className="gift__description">{t(`text5`)}</span>
          </div>
          <div className="gift__card">
            {/* <i className="bx bx-heart gift__icon" /> */}
            <Image width={200} height={200} src="/imgs/gift5.png" alt="" className="gift__img" />
            <h3 className="gift__price">1 * 1000</h3>
            <span className="gift__description">{t(`text6`)}</span>
          </div>

          <div className="gift__card">
            {/* <i className="bx bx-heart gift__icon" /> */}
            <Image width={200} height={200} src="/imgs/cap.png" alt="" className="gift__img" />
            <h3 className="gift__price">1 * 1000</h3>
            <span className="gift__description">{t(`text7`)}</span>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Gift