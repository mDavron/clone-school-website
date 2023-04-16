import React from "react";
import img1 from "../../assets/images/heroSlider/img-1.jpg";
import img2 from "../../assets/images/heroSlider/img-2.jpg";
import img3 from "../../assets/images/heroSlider/img-3.jpeg";
import btnIcon from "../../assets/svg/button-icon.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./HeroSlider.css";

// import required modules
import { Pagination, EffectFade, Autoplay } from "swiper";

export default function HeroSlider() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="heroSlider">
      <div className="content">
        <h1>
          Admission is <br /> open
        </h1>
        <p>
          Admission for grades 1 to 11 <br /> is open at CIC school
        </p>
        <a href="#">
          <img src={btnIcon} alt="" />
          Apply now
        </a>
      </div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        direction={"vertical"}
        effect={"fade"}
        pagination={pagination}
        modules={[Pagination, EffectFade, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
          <div className="blur"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
          <div className="blur"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
