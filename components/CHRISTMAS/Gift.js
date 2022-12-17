import Image from "next/image"

const Gift = () => {
  return (
    <section className="gift section" id="gift" data-aos="fade-down">
      <div className="container">
        <h2 className="section-title">Share A Gift</h2>
        <div className="gift__container">
          <div className="gift__card">
            <i className="bx bx-heart gift__icon" />
            <Image width={200} height={200} src="/imgs/gift1.png" alt="" className="gift__img" />
            <h3 className="gift__price">$15</h3>
            <span className="gift__description">Gingerbread</span>
          </div>
          <div className="gift__card">
            <i className="bx bx-heart gift__icon" />
            <Image width={200} height={200} src="/imgs/gift2.png" alt="" className="gift__img" />
            <h3 className="gift__price">$22</h3>
            <span className="gift__description">Santa Claus Hat</span>
          </div>
          <div className="gift__card">
            <i className="bx bx-heart gift__icon" />
            <Image width={200} height={200} src="/imgs/gift3.png" alt="" className="gift__img" />
            <h3 className="gift__price">$48</h3>
            <span className="gift__description">Christmas Tree</span>
          </div>
          <div className="gift__card">
            <i className="bx bx-heart gift__icon" />
            <Image width={200} height={200} src="/imgs/gift4.png" alt="" className="gift__img" />
            <h3 className="gift__price">$35</h3>
            <span className="gift__description">Snowman</span>
          </div>
          <div className="gift__card">
            <i className="bx bx-heart gift__icon" />
            <Image width={200} height={200} src="/imgs/gift5.png" alt="" className="gift__img" />
            <h3 className="gift__price">$12</h3>
            <span className="gift__description">Candy Stick</span>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Gift