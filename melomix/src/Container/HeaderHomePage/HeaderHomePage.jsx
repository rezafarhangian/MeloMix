import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./HeaderHomePage.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import PlaceholderImage from "../../../public/assets/images/CoverMusic/placeholder2.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function HeaderHomePage() {
  
  return (
    <Container className="mt-5">
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
        <SwiperSlide className="w-100 h-100  px-1">
          <LazyLoadImage
            src="/assets/images/HeaderHomePage/banner1.jpg"
            className="img-fluid rounded-2"
            placeholderSrc={PlaceholderImage}
            effect="blur"
            width="100%"
           
           
          />
        </SwiperSlide>
        <SwiperSlide className="w-100 h-100  px-1">
          <LazyLoadImage
            src="/assets/images/HeaderHomePage/banner1.jpg"
            className="img-fluid rounded-2"
            placeholderSrc={PlaceholderImage}
            effect="blur"
            width="100%"
           
           
          />
        </SwiperSlide>
        <SwiperSlide className="w-100 h-100  px-1 ">
          <LazyLoadImage
            src="/assets/images/HeaderHomePage/banner1.jpg"
            className="img-fluid rounded-2"
            placeholderSrc={PlaceholderImage}
            effect="blur"
            width="100%"
            
           
          />
        </SwiperSlide>
        <SwiperSlide className="w-100 h-100  px-1">
          <LazyLoadImage
            src="/assets/images/HeaderHomePage/banner1.jpg"
            className="img-fluid rounded-2"
            placeholderSrc={PlaceholderImage}
            effect="blur"
            width="100%"
           
          />
        </SwiperSlide>
        <SwiperSlide className="w-100 h-100  px-1">
          <LazyLoadImage
            src="/assets/images/HeaderHomePage/banner1.jpg"
            className="img-fluid rounded-2"
            placeholderSrc={PlaceholderImage}
            effect="blur"
            width="100%"
           
           
          />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
