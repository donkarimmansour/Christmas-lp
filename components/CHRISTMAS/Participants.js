
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const Participants = () => {
  const { t } = useTranslation('participants') 


  const data = [
    {
      "last_name": "Cales",
      "first_name": "Kimberlee",
      "url": "https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627199924/facebook/qeneosve38pvi2ufzhzj.jpg",
    },
    {
      "last_name": "Bridendolph",
      "first_name": "Lynna",
      "url": "https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627199994/facebook/zhrxqpmi5ggnhpm5na9h.jpg",
    },
    {
      "last_name": "Stockley",
      "first_name": "Gail",
      "url": "https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627199949/facebook/upsuzgfww1ykwt9xywy3.jpg",
    },
    {
      "last_name": "Heidbreder",
      "url": "https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627199954/facebook/t7llsmcqkq2vzyiseept.jpg",
      "first_name": "Gwendolyn",
    },
    {
      "last_name": "Nemoede",
      "first_name": "Sherlocke",
      "url": "https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627200075/facebook/kf1hwhtiwcnvkitzc2nc.jpg",
    },
    {
      "last_name": "Amato",
      "first_name": "Karleen",
      "url": "https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627199939/facebook/s4aa0ihuv1g7hahooy9e.jpg",
    },
    {
      "last_name": "Cornette",
      "first_name": "Fran",
      "url": "https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627199961/facebook/qvqx5eabd1jgpqechldr.jpg",
    },
    {
      "last_name": "Dimitrov",
      "first_name": "Titos",
      "url": "https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627200019/facebook/mogukzggj84fhr7j4opz.jpg",
    },
    {
      "last_name": "Ganes",
      "first_name": "Mika",
      "url": "https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627199948/facebook/fm30brmlamdryz08zaa8.jpg",
    },
    {
      "last_name": "Canalez",
      "url": "https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627199973/facebook/xrvsgcsqcbpwd3qtm5t8.jpg",
      "first_name": "Sydel",
    },
    {
      "last_name": "Grindstaff",
      "first_name": "Leighton",
      "url": "https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627200015/facebook/htdwxinegfmlxi0bhsrj.jpg",
    },
    {
      "last_name": "Dunham",
      "first_name": "Becca",
      "url": "https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627199975/facebook/fb03yu62yzc4wqego8fz.jpg",
    },
   
    {
      "last_name": "Yeakle",
      "first_name": "Ayn",
      "url": "https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627200022/facebook/geu25b2tdwq24z3gtvgf.jpg",
    },
    {
      "last_name": "Salvador",
      "url": "https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627199950/facebook/s05hreeyashfu47yeead.jpg",
      "first_name": "Yaakov",
    },

 
  ]

  return (
    <section className="new section" id="new" data-aos="fade-down">
      <div className="container">
        <h2 className="section-title">{t('text1')}</h2>

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

              {data && data.map((user, ui) => {
                return (<SwiperSlide key={ui} className="new__card">
                  <div className="new__overlay" />
                  <Image width={200} height={200} src={user.url} alt="" className="new__img" style={{borderRadius : '50%'}}/>
                  {/* <h3 className="new__price">$95</h3> */}
                  {/* <span className="new__description">{`${user.first_name} ${user.last_name}`}</span> */}
                  <span className="new__description">{`${user.first_name}`}</span>
                  {/* <button className="new__btn">
                    <i className="bx bx-heart new__icon" />
                  </button> */}
                </SwiperSlide>)
              })}

         
            </div>

            <div className="swiper-pagination" />

          </div>

        </Swiper>


      </div>
    </section>

  )
}

export default Participants 