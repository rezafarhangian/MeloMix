import React from "react";
import Container from "react-bootstrap/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./HeaderHomePage.scss"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeaderHomePage() {
  return (
    <Container className="">
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        loop={true}
        navigation={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="myCustomSwiper"
      >
        <SwiperSlide className="w-100 px-1">
          <img
            className="img-fluid rounded-2"
            src="./../../../public/images/HeaderHomePage/banner1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="w-100 px-1">
          <img
            className="img-fluid rounded-2"
            src="./../../../public/images/HeaderHomePage/banner2.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="w-100 px-1 ">
          <img
            className="img-fluid rounded-2"
            src="./../../../public/images/HeaderHomePage/banner3.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="w-100 px-1">
          <img
            className="img-fluid rounded-2"
            src="./../../../public/images/HeaderHomePage/banner4.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="w-100 px-1">
          <img
            className="img-fluid rounded-2"
            src="./../../../public/images/HeaderHomePage/banner5.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
