
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const New = () => {
  return (
    <section className="new section" id="new" data-aos="fade-down">
      <div className="container">
        <h2 className="section-title">New Gifts</h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={26}
          slidesPerView={3}
          centeredSlides={true}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 5 },
            480: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 26 },
          }}
        >

          <div className="swiper">

            <div className="swiper-wrapper">

              <SwiperSlide className="new__card">
                <div className="new__overlay" />
                <Image width={200} height={200} src="/imgs/new1.png" alt="" className="new__img" />
                <h3 className="new__price">$95</h3>
                <span className="new__description">Reindeer</span>
                <button className="new__btn">
                  <i className="bx bx-heart new__icon" />
                </button>
              </SwiperSlide>

              <SwiperSlide className="new__card">
                <div className="new__overlay" />
                <Image width={200} height={200} src="/imgs/new2.png" alt="" className="new__img" />
                <h3 className="new__price">$20</h3>
                <span className="new__description">Snow Globe</span>
                <button className="new__btn">
                  <i className="bx bx-heart new__icon" />
                </button>
              </SwiperSlide>

              <SwiperSlide className="new__card">
                <div className="new__overlay" />
                <Image width={200} height={200} src="/imgs/new3.png" alt="" className="new__img" />
                <h3 className="new__price">$75</h3>
                <span className="new__description">Sledge</span>
                <button className="new__btn">
                  <i className="bx bx-heart new__icon" />
                </button>
              </SwiperSlide>


              <SwiperSlide className="new__card">
                <div className="new__overlay" />
                <Image width={200} height={200} src="/imgs/new4.png" alt="" className="new__img" />
                <h3 className="new__price">$15</h3>
                <span className="new__description">Christmas Wreath</span>
                <button className="new__btn">
                  <i className="bx bx-heart new__icon" />
                </button>
              </SwiperSlide>

            </div>

            <div className="swiper-pagination" />

          </div>

        </Swiper>


      </div>
    </section>

  )
}

export default New