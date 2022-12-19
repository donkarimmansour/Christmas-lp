import Image from "next/image"
import { useTranslation } from "react-i18next"
import CPALINK from "../../cpa"

const Home = () => { 
  const { t } = useTranslation('home')

  return (
    <section className="home" id="home" data-aos="fade-down">
      <div className="container">
        <div className="home__container">
          <Image width={500} height={500} src="/imgs/home.png" alt="" className="home__img" />
          <div className="home__data">
            <h1 className="home__title">
            {t(`text1`)} <br /> 
            {t(`text2`)}! 
            </h1>
            <p className="home__description">
            {t(`text3`)}
            {t(`text4`)}
            </p>
            <a href={CPALINK} className="btn">{t(`text5`)}</a>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Home