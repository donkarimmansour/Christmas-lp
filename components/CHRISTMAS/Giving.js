import Image from "next/image"
import { useTranslation } from "react-i18next"

const Giving = () => { 
  const { t } = useTranslation('giving')
  
  
  return (
    <section className="giving section" data-aos="fade-down">
      <div className="container">
        <h2 className="section-title">
        {t(`text1`)}  <br />
        {t(`text2`)} 
        </h2>
        <div className="giving__container">
          <div className="giving__content">
            <Image width={200} height={200} src="/imgs/giving1.png" alt="" className="giving__img" />
            <h3 className="giving__title">{t(`text3`)} </h3>
            <p className="giving__description">
            {t(`text4`)} 
            </p>
          </div>
          <div className="giving__content">
            <Image width={200} height={200} src="/imgs/giving2.png" alt="" className="giving__img" />
            <h3 className="giving__title">{t(`text5`)} </h3>
            <p className="giving__description">{t(`text6`)} </p>
          </div>
          <div className="giving__content">
            <Image width={200} height={200} src="/imgs/giving3.png" alt="" className="giving__img" />
            <h3 className="giving__title">{t(`text7`)} </h3>
            <p className="giving__description">
            {t(`text8`)} 
            </p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Giving