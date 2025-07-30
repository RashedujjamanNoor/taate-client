import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Hero = () => {
  return (
    <div className="h-auto w-auto overflow-hidden bg-secondary">
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
          <img src="/owmens.png" alt="men" className="h-full w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/owmen.jpg" alt="" className="h-full w-full" />
        </SwiperSlide>
        <SwiperSlide className="h-full w-full">
          <img src="/kid.jpg" alt="" className="h-full w-full object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
