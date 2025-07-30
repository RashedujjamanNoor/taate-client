import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import menImg from "../assets/men.png";
import owmenImg from "../assets/owmen.png";
import modelsImg from "../assets/models.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Hero = () => {
  return (
    <div className=" overflow-hidden bg-secondary">
      <img src="../" alt="" />
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper h-auto w-auto"
      >
        <SwiperSlide>
          <img src={menImg} alt="men" className="h-full w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={owmenImg} alt="owmen" className="h-full w-full" />
        </SwiperSlide>
        <SwiperSlide className="h-full w-full">
          <img src={modelsImg} alt="models" className="h-full w-full " />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
