import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={3}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide className="flex">
        <img
          className="rounded-2xl relative"
          src="https://images.unsplash.com/photo-1598522038386-a331a1f4d176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
          alt=""
        />
        <h2 className="absolute z-10 p-3 text-white font-bold bottom-0 lg:text-3xl">
          Saint Martin
        </h2>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="rounded-2xl relative"
          src="https://plus.unsplash.com/premium_photo-1680040211019-29a8dbb250d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
          alt=""
        />
        <h2 className="absolute z-10 p-3 text-white font-bold bottom-0 lg:text-3xl">
          Kuakata
        </h2>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="rounded-2xl relative"
          src="https://images.unsplash.com/photo-1682308999971-208126ba75ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
          alt=""
        />
        <h2 className="absolute z-10 p-3 text-white font-bold bottom-0 lg:text-3xl">
          Cox's Bazar
        </h2>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="rounded-2xl relative"
          src="https://images.unsplash.com/photo-1580452356610-d8428b35410d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGlzbGFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60
          "
          alt=""
        />
        <h2 className="absolute z-10 p-3 text-white font-bold bottom-0 lg:text-3xl">
          Nijhoom Deep
        </h2>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="rounded-2xl relative"
          src="https://images.unsplash.com/photo-1591254693052-e33265b2ab45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aXNsYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <h2 className="absolute z-10 p-3 text-white font-bold bottom-0 lg:text-3xl">
          Bay of Bengal
        </h2>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
