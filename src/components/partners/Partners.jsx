import React from "react";
import akfa from "../../assets/images/partnersIcon/akfa.svg";
import pearson from "../../assets/images/partnersIcon/pearson.svg";
import tpu from "../../assets/images/partnersIcon/tpu.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Partners.scss";

// import required modules
import { Pagination, Autoplay } from "swiper";

const Partners = () => {
  return (
    <div className="partners">
      <div className="partners-desc">
        <h2 className="desc_title">Our Partners</h2>
        <p className="desc_text">
          Our best parnerships download and distribute with our compliments
        </p>
      </div>
      <div className="partners_slider">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="imgWrapper">
              <img src={akfa} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="imgWrapper">
              <img src={pearson} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="imgWrapper">
              <img src={tpu} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="imgWrapper">
              <img src={akfa} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="imgWrapper">
              <img src={pearson} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="imgWrapper">
              <img src={tpu} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Partners;
