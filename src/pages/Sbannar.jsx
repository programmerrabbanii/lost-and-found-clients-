import React from "react";
import { Navigation, Pagination, Autoplay, EffectFade, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slider from "../assets/img/lifestyle-boy-scouts-woods (1).jpg";
import slider2 from "../assets/img/lifestyle-boy-scouts-woods.jpg";
import slider3 from "../assets/img/little-boy-with-backpack-nature-environment.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    image: slider,
    title: "Lost Something Precious?",
    description: "Report and track your lost items easily. Connect with people who care.",
  },
  {
    image: slider2,
    title: "Found Something Valuable?",
    description: "Help someone today by posting found items. You could be someone’s hero.",
  },
  {
    image: slider3,
    title: "Together, We Can Help",
    description: "Join a caring community to reconnect lost items with their owners.",
  },
];

const Sbannar = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade, Parallax]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        effect="fade"
        parallax={true}
        loop={true} 
        className="h-[85vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <div
                className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/10 z-10"
                data-swiper-parallax="-200"
              />
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover transform transition-transform duration-1000 scale-105 hover:scale-110"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-10 sm:px-20 text-white">
                <h2
                  className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg"
                  data-swiper-parallax="-300"
                >
                  {slide.title}
                </h2>
                <p
                  className="text-lg sm:text-xl max-w-xl drop-shadow"
                  data-swiper-parallax="-100"
                >
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom navigation buttons */}
        <div className="custom-prev absolute left-4 top-1/2 z-30 transform -translate-y-1/2 text-white text-3xl cursor-pointer">
          ❮
        </div>
        <div className="custom-next absolute right-4 top-1/2 z-30 transform -translate-y-1/2 text-white text-3xl cursor-pointer">
          ❯
        </div>
      </Swiper>
    </div>
  );
};

export default Sbannar;
