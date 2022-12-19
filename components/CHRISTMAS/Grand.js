import Image from "next/image"
import { useTranslation } from "react-i18next"

const Grand = () => {

  const { t } = useTranslation('grand')
  

  return (
    <section className="celebrate section" id="celebrate" data-aos="fade-down">
      <div className="container">
        <div className="celebrate__container">
          <div className="celebrate__data">
            <h2 className="celebrate__title">
            {t(`text1`)}
              <br />
              {t(`text2`)}
            </h2>
            <p className="celebrate__description">
            {t(`text3`)}
            {t(`text4`)}
            {t(`text5`)}
            </p>
            <a href="#" className="btn">{t(`text6`)}</a>
          </div>
          <Image width={500} height={500} src="/imgs/celebrate.png" alt="" className="celebrate__img" />
        </div>
      </div>
    </section> 

  )
}

export default Grand