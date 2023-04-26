import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
import "swiper/scss";
// import 'swiper/scss/navigation';
import "swiper/scss/pagination";

// import "./styles.css";
import "./Slide.scss";

// import required modules
import { Pagination, Autoplay, EffectFade } from "swiper";
// const images = [img, img1, img2, img3, img4, img5, img3, img7];
const Slide = ({ data }) => {
  return (
    <div className="sliderWrapper">
      <>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          loop={true}
          effect={"fade"}
          modules={[Pagination, Autoplay, EffectFade]}
          className="mySwiper"
        >
          {data?.map((img, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={img} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    </div>
  );
};

export default Slide;
