import Image from "next/image"

const Home = () => {
  return (
    <section className="home" id="home" data-aos="fade-down">
      <div className="container">
        <div className="home__container">
          <Image width={500} height={500} src="/imgs/home.png" alt="" className="home__img" />
          <div className="home__data">
            <h1 className="home__title">
              Merry Christmas and <br />
              Happy New Year!
            </h1>
            <p className="home__description">
              Christmas and a new year is about to begin, all good wishes and
              successes.
            </p>
            <a href="#" className="btn">Get Started</a>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Home