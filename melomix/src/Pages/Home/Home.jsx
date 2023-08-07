import React from "react";
import HeaderHomePage from "../../Container/HeaderHomePage/HeaderHomePage";
import DOMPurify from "dompurify";
import Footer from "../../components/Footer/Footer";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { MdPodcasts } from "react-icons/md";
import { CiFaceFrown } from "react-icons/ci";
import Container from "react-bootstrap/Container";
import "./Home.scss";
import musics from "../../data/musics";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Sound from "../../components/Sound/Sound";

export default function Home() {
  return (
    <div className="mb-5 page-container">
      <HeaderHomePage />

      {/* <div className="mt-5 ">
        {song.moviemusic.map((p, index) => (
          <div key={index}>
            <p>{p.License}</p>
            <p>{p.Musician}</p>
            <p>{p.SongName}</p>
            <p>{p.Singer}</p>
            <img src={p.Cover} alt="Error" />
            <audio controls>
              <source src={p.MusicUrl} type="audio/mpeg" />
            </audio>
            <div
              className="bg-body-secondary lh-sm"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(p.Description),
              }}
            />
          </div>
        ))}
      </div> */}

      <div className="music">
        <Container>
          <div className="d-flex  music_title">
            <BsMusicNoteBeamed />
            <h6>
              بخش موسیقی <span>( 25 )</span>
            </h6>
          </div>

          <div className="swipercontainers mt-3">
            <div className=" mt-5">
              <h4 className="soundstitle">موسیقی پاپ</h4>

              <Swiper
                slidesPerView={1}
                navigation={true}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  540: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                  },
                }}
                modules={[FreeMode, Navigation]}
                className="swiper-sounds  "
              >
                {musics.pop.map((m) => (
                  <SwiperSlide key={m.id} className="">
                    <Sound
                      cover={m.Cover}
                      singer={m.Singer}
                      musicname={m.SongName}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className=" mt-5 ">
              <h4 className="soundstitle">موسیقی سنتی</h4>
              <Swiper
                slidesPerView={1}
                navigation={true}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  540: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                  },
                }}
                modules={[FreeMode, Navigation]}
                className="swiper-sounds  "
              >
                {musics.traditional.map((m) => (
                  <SwiperSlide key={m.id} className="">
                    <Sound
                      cover={m.Cover}
                      singer={m.Singer}
                      musicname={m.SongName}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className=" mt-5 ">
              <h4 className="soundstitle">موسیقی فیلم</h4>
              <Swiper
                slidesPerView={1}
                navigation={true}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  540: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                  },
                }}
                modules={[FreeMode, Navigation]}
                className="swiper-sounds  "
              >
                {musics.moviemusic.map((m) => (
                  <SwiperSlide key={m.id} className="">
                    <Sound
                      cover={m.Cover}
                      singer={m.Singer}
                      musicname={m.SongName}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className=" mt-5 ">
              <h4 className="soundstitle">موسیقی آرامش بخش</h4>
              <Swiper
                slidesPerView={1}
                navigation={true}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  540: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                  },
                }}
                modules={[FreeMode, Navigation]}
                className="swiper-sounds  "
              >
                {musics.relaxingmusic.map((m) => (
                  <SwiperSlide key={m.id} className="">
                    <Sound
                      cover={m.Cover}
                      singer={m.Singer}
                      musicname={m.SongName}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </Container>
      </div>

      <div className="podcast">
        <Container>
          <div className="d-flex  podcast_title mb-3">
            <MdPodcasts />
            <h6>
              پادکست <span>( 0 )</span>
            </h6>
          </div>
          <div className="podcast-content rounded  d-flex justify-content-center align-items-center">
            <div className="d-flex align-items-center align-content-center">
              <p>پادکستی یافت نشد</p>
              <CiFaceFrown />
            </div>
          </div>
        </Container>
      </div>

      <div className="audio-book">
        <Container>
          <div className="d-flex  audio-book_title mb-3">
            <MdPodcasts />
            <h6>
              کتاب صوتی <span>( 0 )</span>
            </h6>
          </div>
          <div className=" rounded audio-book_content d-flex justify-content-center align-items-center">
            <div className="d-flex  align-items-center align-content-center">
              <p>کتاب صوتی یافت نشد</p>
              <CiFaceFrown />
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </div>
  );
}
