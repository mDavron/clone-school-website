import React from "react";
import img from "../../assets/images/slide/img-1.jpg";
import img1 from "../../assets/images/slide/pexels-1.jpeg";
import img2 from "../../assets/images/slide/pexels-2.jpeg";
import img3 from "../../assets/images/slide/pexels-3.jpeg";
import img4 from "../../assets/images/slide/pexels-4.jpeg";
import img5 from "../../assets/images/slide/pexels-5.jpg";
import img7 from "../../assets/images/slide/pexels-7.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
import "./Slide.css";

// import required modules
import { Pagination, Autoplay, EffectFade } from "swiper";
const images = [img, img1, img2, img3, img4, img5, img3, img7];
const Slide = () => {
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
          {images.map((img, index) => {
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
