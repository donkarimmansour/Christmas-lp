import Image from "next/image"

const Celebrate = () => {
  return (
    <section className="celebrate section" id="celebrate" data-aos="fade-down">
      <div className="container">
        <div className="celebrate__container">
          <div className="celebrate__data">
            <h2 className="celebrate__title">
              Celebrate With A
              <br />
              Lot Of Love
            </h2>
            <p className="celebrate__description">
              In this holidays, celebrate with much love and peace, offering
              many blessings to our loved ones, friends and neighbors, wishing
              them a good Christmas message.
            </p>
            <a href="#" className="btn">Send Good Wishes</a>
          </div>
          <Image width={500} height={500} src="/imgs/celebrate.png" alt="" className="celebrate__img" />
        </div>
      </div>
    </section>

  )
}

export default Celebrate