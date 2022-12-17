import Image from "next/image"

const Giving = () => {
  return (
    <section className="giving section" data-aos="fade-down">
      <div className="container">
        <h2 className="section-title">
          Start Giving This <br />
          Christmas
        </h2>
        <div className="giving__container">
          <div className="giving__content">
            <Image width={200} height={200} src="/imgs/giving1.png" alt="" className="giving__img" />
            <h3 className="giving__title">Surprise gifts</h3>
            <p className="giving__description">
              They are the best gifts there is.
            </p>
          </div>
          <div className="giving__content">
            <Image width={200} height={200} src="/imgs/giving2.png" alt="" className="giving__img" />
            <h3 className="giving__title">Ornaments</h3>
            <p className="giving__description">Give a moment to decorate.</p>
          </div>
          <div className="giving__content">
            <Image width={200} height={200} src="/imgs/giving3.png" alt="" className="giving__img" />
            <h3 className="giving__title">Lots of love</h3>
            <p className="giving__description">
              Give away feelings that last forever.
            </p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Giving