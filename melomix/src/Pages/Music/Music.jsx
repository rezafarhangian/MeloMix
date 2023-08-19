import React, { useEffect, useState } from "react";
import "./Music.scss";
import Footer from "../../components/Footer/Footer";
import { Container } from "react-bootstrap";
import { BiTimeFive, BiSolidShareAlt, BiHeart } from "react-icons/bi";
import { BsPlayCircle, BsCalendarDate, BsFillReplyFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import AudioPlayer from "../../Container/AudioPlayer/AudioPlayer";
import { Link, useParams } from "react-router-dom";
import musics from "../../data/musics";
import DOMPurify from "dompurify";

import PlaceholderImage from "../../../public/assets/images/CoverMusic/placeholder.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Music() {
  const [music, setMusic] = useState({});
  const [pages, setPages] = useState(1);
  const [openForm, setOpenForm] = useState(false);

  const { title, category } = useParams();

  useEffect(() => {
    switch (category) {
      case "pop":
        const filteredPopMusic = musics.pop.filter((m) => m.SongName === title);
        setMusic(filteredPopMusic[0]);
        break;

      case "traditional":
        const filteredTraditionalMusic = musics.traditional.filter(
          (m) => m.SongName === title
        );
        setMusic(filteredTraditionalMusic[0]);
        break;

      case "moviemusic":
        const filteredMovieMusic = musics.moviemusic.filter(
          (m) => m.SongName === title
        );
        setMusic(filteredMovieMusic[0]);
        break;

      case "relaxingmusic":
        const filteredrelaxingMusic = musics.relaxingmusic.filter(
          (m) => m.SongName === title
        );
        setMusic(filteredrelaxingMusic[0]);
        break;

      default:
        break;
    }
  }, [title, category]);

  return (
    <>
      <div className="page-containerr ">
        <div className=" w-100 h-auto mx-auto ">
          <div className=" w-100 single-track position-relative d-lg-none h-auto">
            <LazyLoadImage
              src={music.Cover}
              placeholderSrc={PlaceholderImage}
              effect="black-and-white"
              className="w-100  single-track-bg"
              height="280px"
              width="100%"
            />
            {/* <img className="w-100  single-track-bg" src={music.Cover} alt="" /> */}

            <div className="p-3 pe-sm-5 position-absolute top-0">
              <div className="single-track-cover rounded overflow-hidden">
                <LazyLoadImage
                  src={music.Cover}
                  placeholderSrc={PlaceholderImage}
                  effect="black-and-white"
                  className="w-100 h-100"
                  height="100%"
                  width="100%"
                />
                {/* <img className="w-100 h-100" src={music.Cover} alt="" /> */}
              </div>
              <div className="mt-3 single-track-title">
                <span> {music.SongName}</span>
                <p>{music.Singer}</p>
              </div>
            </div>
            <div className="py-3 px-sm-5 mt-2 px-3 single-track-details d-flex justify-content-between border-bottom">
              <div className="d-flex align-items-center justify-content-between ">
                <div className="ps-2 single-track-time border-start">
                  <BiTimeFive className="ms-1 " />
                  <span>{music.time}</span>
                </div>
                <div className="px-2 single-track-repet border-start">
                  <BsPlayCircle className="ms-1" />
                  <span>{music.NumberOfBroadcasts}</span>
                </div>
                <div className="px-2 single-track-date">
                  <BsCalendarDate className="ms-1" />
                  <span>{music.YearOfPublication}</span>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="single-track-like ms-2 ms-sm-3">
                  <BiHeart />
                </div>
                <div className="single-track-share">
                  <BiSolidShareAlt />
                </div>
              </div>
            </div>

            <div className="single-track-pages ">
              <div className="d-flex single-track-pages-small">
                <div
                  onClick={() => setPages(1)}
                  className={`${
                    pages === 1 ? "active-page" : ""
                  } w-100 text-center p-3`}
                >
                  ترک ها
                </div>
                <div
                  onClick={() => setPages(2)}
                  className={`${
                    pages === 2 ? "active-page" : ""
                  } w-100 text-center p-3`}
                >
                  توضیحات
                </div>
                <div
                  onClick={() => setPages(3)}
                  className={`${
                    pages === 3 ? "active-page" : ""
                  } w-100 text-center p-3`}
                >
                  نظرات
                </div>
              </div>
              <div
                className={`${
                  pages === 1
                    ? "border-small1"
                    : pages === 2
                    ? "border-small2"
                    : pages === 3
                    ? "border-small3"
                    : ""
                } `}
              ></div>
            </div>

            <div className="wrapper-pages h-auto">
              {pages === 1 && (
                <div>
                  <AudioPlayer />
                </div>
              )}
              {pages === 2 && (
                <div className="description-music">
                  <p className="description-music__title">متن موسیقی :</p>
                  {music.Description ? (
                    <div
                      className="description-music__content border-bottom "
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(music.Description),
                      }}
                    ></div>
                  ) : (
                    <div className="fw-semibold pb-4 text-center border-bottom ">
                      متنی وجود ندارد
                    </div>
                  )}
                  <div className="mt-3 description-music-datails">
                    <p>جزییات</p>
                    <div className="mb-4">
                      <span className="description-music-datails-question">
                        خواننده :{" "}
                      </span>
                      <span className="description-music-datails-answer">
                        {music.Singer ? music.Singer : "  —  "}
                      </span>
                    </div>
                    <div className="mb-4">
                      <span className="description-music-datails-question">
                        دسته بندی :{" "}
                      </span>
                      <span className="description-music-datails-answer">
                        {category === "pop"
                          ? "پاپ"
                          : category === "traditional"
                          ? "سنتی"
                          : category === "moviemusic"
                          ? "موسیقی فیلم"
                          : category === "relaxingmusic"
                          ? "موسیقی آرامش بخش"
                          : ""}
                      </span>
                    </div>
                    <div className="mb-4">
                      <span className="description-music-datails-question">
                        آهنگ ساز :{" "}
                      </span>
                      <span className="description-music-datails-answer">
                        {music.Composer ? music.Composer : "—"}
                      </span>
                    </div>
                    <div className="mb-4">
                      <span className="description-music-datails-question">
                        نوازنده :{" "}
                      </span>
                      <span className="description-music-datails-answer">
                        {music.Musician ? music.Musician : "—"}
                      </span>
                    </div>
                    <div className="mb-4">
                      <span className="description-music-datails-question">
                        ترانه سرا :{" "}
                      </span>
                      <span className="description-music-datails-answer">
                        {music.SongWriter ? music.SongWriter : "—"}
                      </span>
                    </div>
                    <div className="mb-4">
                      <span className="description-music-datails-question">
                        مجوز :{" "}
                      </span>
                      <span className="description-music-datails-answer">
                        {music.License ? music.License : "—"}
                      </span>
                    </div>
                    <div className="mb-4">
                      <span className="description-music-datails-question">
                        میکس و مسترینگ :{" "}
                      </span>
                      <span className="description-music-datails-answer">
                        {music.MixingAndMastering
                          ? music.MixingAndMastering
                          : "—"}
                      </span>
                    </div>
                    <div className="mb-4">
                      <span className="description-music-datails-question">
                        تنظیم کننده :{" "}
                      </span>
                      <span className="description-music-datails-answer">
                        {music.Regulators ? music.Regulators : "—"}
                      </span>
                    </div>
                    <div className="mb-4">
                      <span className="description-music-datails-question">
                        زمان انتشار :{" "}
                      </span>
                      <span className="description-music-datails-answer">
                        {music.YearOfPublication
                          ? music.YearOfPublication
                          : "—"}
                      </span>
                    </div>
                  </div>
                </div>
              )}
              {pages === 3 && (
                <div className="post-comments">
                  <div className="post-comments-form">
                    <h4>فرم ثبت نظرات</h4>
                    <form className="post-comments">
                      <textarea
                        name=""
                        id=""
                        placeholder="برای ارسال کامنت ابتدا وارد حساب کاربری خود شوید."
                      ></textarea>
                      <Link to="/">
                        <button className="">ورود / ثبت نام</button>
                      </Link>
                    </form>
                  </div>
                  {music.Comments.length ? (
                    <div className="mt-5 comments-box p-2 rounded">
                      {music.Comments.map((m) => (
                        <div key={m.id} className="comment p-2 rounded my-4">
                          <div className="comment-body">
                            <div className="d-flex justify-content-between align-items-center px-2">
                              <div className="comment-profile d-flex align-items-center">
                                <span>
                                  <FaUser />
                                </span>
                                <span className="fw-bold mt-2">{m.name}</span>
                              </div>
                              <div className="comment-date">{m.date}</div>
                            </div>
                            <div className="pe-4 ps-2  my-3 conmment-text">
                              {m.text}
                            </div>
                            <div className=" d-flex justify-content-end">
                              <button
                                onClick={() => setOpenForm(!openForm)}
                                className="comment-reply-btn"
                              >
                                <span>پاسخ</span>
                                <BsFillReplyFill />
                              </button>
                            </div>
                          </div>

                          <div
                            className={`${
                              !openForm ? "d-none" : "d-block"
                            } comment-reply-form  p-2`}
                          >
                            <div className={` post-comments-form`}>
                              <h4>فرم ثبت نظرات</h4>
                              <form className="post-comments">
                                <textarea
                                  name=""
                                  id=""
                                  placeholder="برای ارسال کامنت ابتدا وارد حساب کاربری خود شوید."
                                ></textarea>
                                <Link to="/">
                                  <button className="">ورود / ثبت نام</button>
                                </Link>
                              </form>
                            </div>
                          </div>

                          {/* ================ reply comment ============== */}
                          {m.reply &&
                            m.reply.map((c) => (
                              <div key={c.id} className="mt-5">
                                <div className="comment-body bg-body-secondary p-3 rounded my-3">
                                  <div className="d-flex justify-content-between align-items-center px-2">
                                    <div className="comment-profile d-flex align-items-center">
                                      <span>
                                        <FaUser />
                                      </span>
                                      <span className="fw-bold mt-2">
                                        {c.name}
                                      </span>
                                    </div>
                                    <div className="comment-date">{c.date}</div>
                                  </div>
                                  <div className="pe-4 ps-2 my-3  conmment-text">
                                    {c.text}
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="empty-comment-box d-flex flex-column align-items-center border mt-5 p-3 rounded mb-3">
                      <svg
                        width="216"
                        height="83"
                        viewBox="0 0 216 83"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M46 77H137C137.515 77 138.017 76.9444 138.5 76.8389C138.983 76.9444 139.485 77 140 77H192C195.866 77 199 73.866 199 70C199 66.134 195.866 63 192 63H186C182.134 63 179 59.866 179 56C179 52.134 182.134 49 186 49H205C208.866 49 212 45.866 212 42C212 38.134 208.866 35 205 35H183C186.866 35 190 31.866 190 28C190 24.134 186.866 21 183 21H119C122.866 21 126 17.866 126 14C126 10.134 122.866 7 119 7H62C58.134 7 55 10.134 55 14C55 17.866 58.134 21 62 21H22C18.134 21 15 24.134 15 28C15 31.866 18.134 35 22 35H47C50.866 35 54 38.134 54 42C54 45.866 50.866 49 47 49H7C3.13401 49 0 52.134 0 56C0 59.866 3.13401 63 7 63H46C42.134 63 39 66.134 39 70C39 73.866 42.134 77 46 77ZM209 77C212.866 77 216 73.866 216 70C216 66.134 212.866 63 209 63C205.134 63 202 66.134 202 70C202 73.866 205.134 77 209 77Z"
                          fill="#F9F9F9"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M143.861 63.8286C141.8 65.3729 139.79 66.8247 137.515 68.0793L137.647 79.3768C137.657 80.2628 136.949 80.9894 136.066 80.9999C135.706 81.004 135.356 80.8868 135.071 80.6671L124.941 72.8518C121.144 73.7282 117.139 74.197 113 74.197C88.6995 74.197 69 58.0352 69 38.0985C69 18.1619 88.6995 2 113 2C137.301 2 157 18.1619 157 38.0985C157 43.6166 155.491 48.8454 152.793 53.5225C152.295 54.3851 151.757 55.2289 151.181 56.0523C151.181 56.0523 150.054 57.7521 147.8 60.1587C145.546 62.5653 143.861 63.8286 143.861 63.8286Z"
                          fill="#F4F4F4"
                        ></path>
                        <path
                          d="M143.861 63.8286L144.611 64.8289L144.611 64.8287L143.861 63.8286ZM137.515 68.0793L136.912 66.9847L136.257 67.3459L136.265 68.0938L137.515 68.0793ZM137.647 79.3768L138.897 79.3622L137.647 79.3768ZM136.066 80.9999L136.08 82.2498L136.081 82.2498L136.066 80.9999ZM135.071 80.6671L134.308 81.6568L135.071 80.6671ZM124.941 72.8518L125.705 71.8621L125.236 71.5008L124.66 71.6338L124.941 72.8518ZM152.793 53.5225L153.876 54.1471L152.793 53.5225ZM151.181 56.0523L150.157 55.3354L150.148 55.3484L150.139 55.3616L151.181 56.0523ZM143.112 62.8282C141.057 64.3678 139.106 65.7748 136.912 66.9847L138.119 69.1738C140.475 67.8745 142.543 66.378 144.611 64.8289L143.112 62.8282ZM136.265 68.0938L136.397 79.3913L138.897 79.3622L138.765 68.0647L136.265 68.0938ZM136.397 79.3913C136.399 79.5903 136.241 79.7477 136.051 79.75L136.081 82.2498C137.657 82.2311 138.915 80.9353 138.897 79.3622L136.397 79.3913ZM136.051 79.75C135.973 79.7509 135.897 79.7255 135.835 79.6774L134.308 81.6568C134.815 82.0482 135.439 82.2571 136.08 82.2498L136.051 79.75ZM135.835 79.6774L125.705 71.8621L124.178 73.8415L134.308 81.6568L135.835 79.6774ZM124.66 71.6338C120.955 72.4889 117.044 72.947 113 72.947V75.447C117.233 75.447 121.333 74.9675 125.222 74.0698L124.66 71.6338ZM113 72.947C89.1471 72.947 70.25 57.1248 70.25 38.0985H67.75C67.75 58.9455 88.2519 75.447 113 75.447V72.947ZM70.25 38.0985C70.25 19.0722 89.1471 3.25 113 3.25V0.75C88.2519 0.75 67.75 17.2515 67.75 38.0985H70.25ZM113 3.25C136.853 3.25 155.75 19.0722 155.75 38.0985H158.25C158.25 17.2515 137.748 0.75 113 0.75V3.25ZM155.75 38.0985C155.75 43.383 154.306 48.398 151.71 52.8979L153.876 54.1471C156.676 49.2929 158.25 43.8501 158.25 38.0985H155.75ZM151.71 52.8979C151.231 53.7283 150.713 54.5413 150.157 55.3354L152.205 56.7692C152.802 55.9165 153.359 55.0419 153.876 54.1471L151.71 52.8979ZM151.181 56.0523C150.139 55.3616 150.139 55.3615 150.139 55.3614C150.139 55.3613 150.139 55.3612 150.139 55.3612C150.139 55.361 150.139 55.3609 150.139 55.3608C150.139 55.3607 150.139 55.3606 150.139 55.3607C150.139 55.3608 150.139 55.3613 150.138 55.3622C150.137 55.364 150.135 55.3674 150.132 55.3725C150.125 55.3825 150.114 55.3989 150.098 55.4215C150.067 55.4666 150.019 55.5362 149.953 55.6284C149.821 55.8127 149.619 56.0872 149.348 56.4365C148.806 57.1352 147.985 58.1321 146.888 59.3043L148.712 61.0132C149.868 59.7788 150.738 58.7224 151.323 57.9696C151.615 57.5931 151.836 57.2922 151.986 57.0827C152.061 56.9779 152.118 56.8959 152.158 56.8386C152.177 56.81 152.193 56.7875 152.203 56.7715C152.209 56.7635 152.213 56.7571 152.216 56.7523C152.218 56.75 152.219 56.748 152.22 56.7464C152.221 56.7457 152.221 56.745 152.222 56.7444C152.222 56.7441 152.222 56.7439 152.222 56.7436C152.222 56.7435 152.222 56.7434 152.222 56.7433C152.222 56.7431 152.223 56.743 151.181 56.0523ZM146.888 59.3043C145.792 60.4741 144.837 61.3632 144.161 61.9564C143.823 62.2529 143.555 62.4751 143.374 62.6212C143.284 62.6942 143.215 62.7481 143.171 62.7828C143.149 62.8001 143.132 62.8126 143.122 62.8202C143.117 62.824 143.114 62.8266 143.112 62.828C143.111 62.8287 143.111 62.829 143.111 62.8291C143.111 62.8292 143.111 62.8291 143.111 62.829C143.111 62.829 143.111 62.8289 143.111 62.8288C143.111 62.8287 143.111 62.8287 143.111 62.8286C143.111 62.8285 143.112 62.8284 143.861 63.8286C144.611 64.8287 144.611 64.8285 144.612 64.8284C144.612 64.8284 144.612 64.8283 144.612 64.8282C144.612 64.828 144.612 64.8278 144.613 64.8276C144.613 64.8272 144.614 64.8267 144.615 64.8261C144.616 64.825 144.618 64.8235 144.62 64.8217C144.625 64.8182 144.631 64.8134 144.639 64.8074C144.655 64.7953 144.677 64.7783 144.705 64.7564C144.762 64.7125 144.843 64.649 144.945 64.566C145.151 64.3999 145.445 64.1559 145.81 63.8358C146.54 63.1957 147.554 62.2499 148.712 61.0132L146.888 59.3043Z"
                          fill="#979797"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M139.411 28.0716C143.676 28.0716 147.782 27.5656 151.629 26.6294C153.164 30.1091 154 33.8586 154 37.7659C154 42.8345 152.594 47.6376 150.08 51.9337C149.616 52.726 149.115 53.5011 148.577 54.2575C147.729 55.4517 147.125 56.2949 146.592 56.9711C145.333 58.5708 144.477 59.2355 141.757 61.4004C139.943 62.8442 137.964 64.1525 135.844 65.3049L135.966 75.6823C135.976 76.4962 136.225 77.9903 135.401 78C135.067 78.0037 133.832 77.0694 133.567 76.8675L125.359 69.5733C121.82 70.3783 116.857 70.9244 113 70.9244C90.3563 70.9244 72 56.0788 72 37.7659C72 22.7688 84.3107 10.0972 101.205 6C105.63 18.6996 121.058 28.0716 139.411 28.0716ZM97.1555 33.3186C94.4985 33.3186 92.3446 35.4758 92.3446 38.1369C92.3446 40.7979 94.4985 42.9551 97.1555 42.9551C99.8125 42.9551 101.966 40.7979 101.966 38.1369C101.966 35.4758 99.8125 33.3186 97.1555 33.3186ZM112.39 33.3186C109.733 33.3186 107.579 35.4758 107.579 38.1369C107.579 40.7979 109.733 42.9551 112.39 42.9551C115.047 42.9551 117.201 40.7979 117.201 38.1369C117.201 35.4758 115.047 33.3186 112.39 33.3186ZM127.624 33.3186C124.967 33.3186 122.814 35.4758 122.814 38.1369C122.814 40.7979 124.967 42.9551 127.624 42.9551C130.281 42.9551 132.435 40.7979 132.435 38.1369C132.435 35.4758 130.281 33.3186 127.624 33.3186Z"
                          fill="#F1F1F1"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M96.8 33C99.451 33 101.6 35.2386 101.6 38C101.6 40.7614 99.451 43 96.8 43C94.149 43 92 40.7614 92 38C92 35.2386 94.149 33 96.8 33ZM112 33C114.651 33 116.8 35.2386 116.8 38C116.8 40.7614 114.651 43 112 43C109.349 43 107.2 40.7614 107.2 38C107.2 35.2386 109.349 33 112 33ZM127.2 33C129.851 33 132 35.2386 132 38C132 40.7614 129.851 43 127.2 43C124.549 43 122.4 40.7614 122.4 38C122.4 35.2386 124.549 33 127.2 33Z"
                          fill="#F4F4F4"
                          stroke="#979797"
                          strokeWidth="2.5"
                        ></path>
                        <path
                          d="M81 26C80.2274 27.2871 79.5578 28.6228 79 30"
                          stroke="#A9A9A9"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M95 13C90.1107 15.4343 85.983 18.8777 83 23"
                          stroke="#A9A9A9"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                      <span className="d-block mt-3">اولین نفر نظر بده</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* ========================================================== */}
          <div className="d-none d-lg-block">
            <Container>
              <div className=" single-track-large mx-auto">
                <div>
                  <div className="d-flex justify-content-end">
                    <div className="px-2 single-track-date border-start">
                      <BsCalendarDate className="ms-1" />
                      <span>{music.time}</span>
                    </div>
                    <div className="px-2 single-track-repet border-start">
                      <BsPlayCircle className="ms-1" />
                      <span>{music.NumberOfBroadcasts}</span>
                    </div>
                    <div className="px-2 single-track-time ">
                      <BiTimeFive className="ms-1 " />
                      <span>{music.YearOfPublication}</span>
                    </div>
                  </div>
                  <div className="single-track-content mt-2 rounded position-relative">
                    {/* <img src={music.Cover} alt="" /> */}
                    <LazyLoadImage
                      src={music.Cover}
                      placeholderSrc={PlaceholderImage}
                      effect="black-and-white"
                      className="rounded"
                      height="180px"
                      width="180px"
                    />

                    <div className="details">
                      <h6>{music.SongName} </h6>
                      <p>{music.Singer}</p>
                    </div>

                    <div className="d-flex like-share">
                      <div>
                        <BiHeart />
                      </div>
                      <div>
                        <BiSolidShareAlt />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5   single-track-pages-larg">
                  <div className="d-flex">
                    <div
                      onClick={() => setPages(1)}
                      className={`${
                        pages === 1 ? "active-page" : ""
                      } text-center p-2`}
                    >
                      ترک ها
                    </div>
                    <div
                      onClick={() => setPages(2)}
                      className={`${
                        pages === 2 ? "active-page" : ""
                      } text-center p-2`}
                    >
                      توضیحات
                    </div>
                    <div
                      onClick={() => setPages(3)}
                      className={`${
                        pages === 3 ? "active-page" : ""
                      } text-center p-2`}
                    >
                      نظرات
                    </div>
                  </div>
                  <div
                    className={`${
                      pages === 1
                        ? "border1"
                        : pages === 2
                        ? "border2"
                        : pages === 3
                        ? "border3"
                        : ""
                    } `}
                  ></div>
                </div>

                <div>
                  {pages === 1 && <div className="pages">موزیک</div>}
                  {pages === 2 && (
                    <div className="pages p-3">
                      <div className="description-music">
                        <p className="description-music__title fw-bold">
                          متن موسیقی :
                        </p>
                        {music.Description ? (
                          <div
                            className="description-music__content border-bottom "
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(music.Description),
                            }}
                          ></div>
                        ) : (
                          <div className="fw-semibold pb-4 text-center border-bottom ">
                            متنی وجود ندارد
                          </div>
                        )}
                        <div className="mt-3 description-music-datails">
                          <p className="fw-bold">جزییات : </p>
                          <div className="d-flex px-2">
                            <div className="w-50">
                              <div className="mb-4">
                                <span className="description-music-datails-question">
                                  خواننده :{" "}
                                </span>
                                <span className="description-music-datails-answer">
                                  {music.Singer ? music.Singer : "—"}
                                </span>
                              </div>
                              <div className="mb-4">
                                <span className="description-music-datails-question">
                                  دسته بندی :{" "}
                                </span>
                                <span className="description-music-datails-answer">
                                  {category === "pop"
                                    ? "پاپ"
                                    : category === "traditional"
                                    ? "سنتی"
                                    : category === "moviemusic"
                                    ? "موسیقی فیلم"
                                    : category === "relaxingmusic"
                                    ? "موسیقی آرامش بخش"
                                    : ""}
                                </span>
                              </div>
                              <div className="mb-4">
                                <span className="description-music-datails-question">
                                  آهنگ ساز :{" "}
                                </span>
                                <span className="description-music-datails-answer">
                                  {music.Composer ? music.Composer : "—"}
                                </span>
                              </div>
                              <div className="mb-4">
                                <span className="description-music-datails-question">
                                  نوازنده :{" "}
                                </span>
                                <span className="description-music-datails-answer">
                                  {music.Musician ? music.Musician : "—"}
                                </span>
                              </div>
                              <div className="mb-4">
                                <span className="description-music-datails-question">
                                  ترانه سرا :{" "}
                                </span>
                                <span className="description-music-datails-answer">
                                  {music.SongWriter ? music.SongWriter : "—"}
                                </span>
                              </div>
                            </div>
                            <div>
                              <div className="mb-4">
                                <span className="description-music-datails-question">
                                  مجوز :{" "}
                                </span>
                                <span className="description-music-datails-answer">
                                  {music.License ? music.License : "—"}
                                </span>
                              </div>
                              <div className="mb-4">
                                <span className="description-music-datails-question">
                                  میکس و مسترینگ :{" "}
                                </span>
                                <span className="description-music-datails-answer">
                                  {music.MixingAndMastering
                                    ? music.MixingAndMastering
                                    : "—"}
                                </span>
                              </div>
                              <div className="mb-4">
                                <span className="description-music-datails-question">
                                  تنظیم کننده :{" "}
                                </span>
                                <span className="description-music-datails-answer">
                                  {music.Regulators ? music.Regulators : "—"}
                                </span>
                              </div>
                              <div className="mb-4">
                                <span className="description-music-datails-question">
                                  زمان انتشار :{" "}
                                </span>
                                <span className="description-music-datails-answer">
                                  {music.YearOfPublication
                                    ? music.YearOfPublication
                                    : "—"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {pages === 3 && (
                    <div className="post-comments rounded p-3">
                      <div className="post-comments-form mt-3">
                        <h4>فرم ثبت نظرات</h4>
                        <form className="post-comments">
                          <textarea
                            name=""
                            id=""
                            placeholder="برای ارسال کامنت ابتدا وارد حساب کاربری خود شوید."
                          ></textarea>
                          <Link to="/">
                            <button className="fw-bold">ورود / ثبت نام</button>
                          </Link>
                        </form>
                      </div>

                      {music.Comments.length ? (
                        <div className="mt-5 comments-box p-2 rounded">
                          {music.Comments.map((m) => (
                            <div
                              key={m.id}
                              className="comment p-2 rounded my-4"
                            >
                              <div className="comment-body">
                                <div className="d-flex justify-content-between align-items-center px-2">
                                  <div className="comment-profile d-flex align-items-center">
                                    <span>
                                      <FaUser />
                                    </span>
                                    <span className="fw-bold mt-2">
                                      {m.name}
                                    </span>
                                  </div>
                                  <div className="comment-date">{m.date}</div>
                                </div>
                                <div className="pe-4 ps-2  my-3 conmment-text">
                                  {m.text}
                                </div>
                                <div className=" d-flex justify-content-end">
                                  <button
                                    onClick={() => setOpenForm(!openForm)}
                                    className="comment-reply-btn"
                                  >
                                    <span>پاسخ</span>
                                    <BsFillReplyFill />
                                  </button>
                                </div>
                              </div>

                              <div
                                className={`${
                                  !openForm ? "d-none" : "d-block"
                                } comment-reply-form  p-2`}
                              >
                                <div className={` post-comments-form`}>
                                  <h4>فرم ثبت نظرات</h4>
                                  <form className="post-comments">
                                    <textarea
                                      name=""
                                      id=""
                                      placeholder="برای ارسال کامنت ابتدا وارد حساب کاربری خود شوید."
                                    ></textarea>
                                    <Link to="/">
                                      <button className="">
                                        ورود / ثبت نام
                                      </button>
                                    </Link>
                                  </form>
                                </div>
                              </div>

                              {/* ================ reply comment ============== */}
                              {m.reply &&
                                m.reply.map((c) => (
                                  <div key={c.id} className="mt-5">
                                    <div className="comment-body bg-body-secondary p-3 rounded my-3">
                                      <div className="d-flex justify-content-between align-items-center px-2">
                                        <div className="comment-profile d-flex align-items-center">
                                          <span>
                                            <FaUser />
                                          </span>
                                          <span className="fw-bold mt-2">
                                            {c.name}
                                          </span>
                                        </div>
                                        <div className="comment-date">
                                          {c.date}
                                        </div>
                                      </div>
                                      <div className="pe-4 ps-2 my-3  conmment-text">
                                        {c.text}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="empty-comment-box d-flex flex-column align-items-center border mt-5 p-3 rounded mb-3">
                          <svg
                            width="216"
                            height="83"
                            viewBox="0 0 216 83"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M46 77H137C137.515 77 138.017 76.9444 138.5 76.8389C138.983 76.9444 139.485 77 140 77H192C195.866 77 199 73.866 199 70C199 66.134 195.866 63 192 63H186C182.134 63 179 59.866 179 56C179 52.134 182.134 49 186 49H205C208.866 49 212 45.866 212 42C212 38.134 208.866 35 205 35H183C186.866 35 190 31.866 190 28C190 24.134 186.866 21 183 21H119C122.866 21 126 17.866 126 14C126 10.134 122.866 7 119 7H62C58.134 7 55 10.134 55 14C55 17.866 58.134 21 62 21H22C18.134 21 15 24.134 15 28C15 31.866 18.134 35 22 35H47C50.866 35 54 38.134 54 42C54 45.866 50.866 49 47 49H7C3.13401 49 0 52.134 0 56C0 59.866 3.13401 63 7 63H46C42.134 63 39 66.134 39 70C39 73.866 42.134 77 46 77ZM209 77C212.866 77 216 73.866 216 70C216 66.134 212.866 63 209 63C205.134 63 202 66.134 202 70C202 73.866 205.134 77 209 77Z"
                              fill="#F9F9F9"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M143.861 63.8286C141.8 65.3729 139.79 66.8247 137.515 68.0793L137.647 79.3768C137.657 80.2628 136.949 80.9894 136.066 80.9999C135.706 81.004 135.356 80.8868 135.071 80.6671L124.941 72.8518C121.144 73.7282 117.139 74.197 113 74.197C88.6995 74.197 69 58.0352 69 38.0985C69 18.1619 88.6995 2 113 2C137.301 2 157 18.1619 157 38.0985C157 43.6166 155.491 48.8454 152.793 53.5225C152.295 54.3851 151.757 55.2289 151.181 56.0523C151.181 56.0523 150.054 57.7521 147.8 60.1587C145.546 62.5653 143.861 63.8286 143.861 63.8286Z"
                              fill="#F4F4F4"
                            ></path>
                            <path
                              d="M143.861 63.8286L144.611 64.8289L144.611 64.8287L143.861 63.8286ZM137.515 68.0793L136.912 66.9847L136.257 67.3459L136.265 68.0938L137.515 68.0793ZM137.647 79.3768L138.897 79.3622L137.647 79.3768ZM136.066 80.9999L136.08 82.2498L136.081 82.2498L136.066 80.9999ZM135.071 80.6671L134.308 81.6568L135.071 80.6671ZM124.941 72.8518L125.705 71.8621L125.236 71.5008L124.66 71.6338L124.941 72.8518ZM152.793 53.5225L153.876 54.1471L152.793 53.5225ZM151.181 56.0523L150.157 55.3354L150.148 55.3484L150.139 55.3616L151.181 56.0523ZM143.112 62.8282C141.057 64.3678 139.106 65.7748 136.912 66.9847L138.119 69.1738C140.475 67.8745 142.543 66.378 144.611 64.8289L143.112 62.8282ZM136.265 68.0938L136.397 79.3913L138.897 79.3622L138.765 68.0647L136.265 68.0938ZM136.397 79.3913C136.399 79.5903 136.241 79.7477 136.051 79.75L136.081 82.2498C137.657 82.2311 138.915 80.9353 138.897 79.3622L136.397 79.3913ZM136.051 79.75C135.973 79.7509 135.897 79.7255 135.835 79.6774L134.308 81.6568C134.815 82.0482 135.439 82.2571 136.08 82.2498L136.051 79.75ZM135.835 79.6774L125.705 71.8621L124.178 73.8415L134.308 81.6568L135.835 79.6774ZM124.66 71.6338C120.955 72.4889 117.044 72.947 113 72.947V75.447C117.233 75.447 121.333 74.9675 125.222 74.0698L124.66 71.6338ZM113 72.947C89.1471 72.947 70.25 57.1248 70.25 38.0985H67.75C67.75 58.9455 88.2519 75.447 113 75.447V72.947ZM70.25 38.0985C70.25 19.0722 89.1471 3.25 113 3.25V0.75C88.2519 0.75 67.75 17.2515 67.75 38.0985H70.25ZM113 3.25C136.853 3.25 155.75 19.0722 155.75 38.0985H158.25C158.25 17.2515 137.748 0.75 113 0.75V3.25ZM155.75 38.0985C155.75 43.383 154.306 48.398 151.71 52.8979L153.876 54.1471C156.676 49.2929 158.25 43.8501 158.25 38.0985H155.75ZM151.71 52.8979C151.231 53.7283 150.713 54.5413 150.157 55.3354L152.205 56.7692C152.802 55.9165 153.359 55.0419 153.876 54.1471L151.71 52.8979ZM151.181 56.0523C150.139 55.3616 150.139 55.3615 150.139 55.3614C150.139 55.3613 150.139 55.3612 150.139 55.3612C150.139 55.361 150.139 55.3609 150.139 55.3608C150.139 55.3607 150.139 55.3606 150.139 55.3607C150.139 55.3608 150.139 55.3613 150.138 55.3622C150.137 55.364 150.135 55.3674 150.132 55.3725C150.125 55.3825 150.114 55.3989 150.098 55.4215C150.067 55.4666 150.019 55.5362 149.953 55.6284C149.821 55.8127 149.619 56.0872 149.348 56.4365C148.806 57.1352 147.985 58.1321 146.888 59.3043L148.712 61.0132C149.868 59.7788 150.738 58.7224 151.323 57.9696C151.615 57.5931 151.836 57.2922 151.986 57.0827C152.061 56.9779 152.118 56.8959 152.158 56.8386C152.177 56.81 152.193 56.7875 152.203 56.7715C152.209 56.7635 152.213 56.7571 152.216 56.7523C152.218 56.75 152.219 56.748 152.22 56.7464C152.221 56.7457 152.221 56.745 152.222 56.7444C152.222 56.7441 152.222 56.7439 152.222 56.7436C152.222 56.7435 152.222 56.7434 152.222 56.7433C152.222 56.7431 152.223 56.743 151.181 56.0523ZM146.888 59.3043C145.792 60.4741 144.837 61.3632 144.161 61.9564C143.823 62.2529 143.555 62.4751 143.374 62.6212C143.284 62.6942 143.215 62.7481 143.171 62.7828C143.149 62.8001 143.132 62.8126 143.122 62.8202C143.117 62.824 143.114 62.8266 143.112 62.828C143.111 62.8287 143.111 62.829 143.111 62.8291C143.111 62.8292 143.111 62.8291 143.111 62.829C143.111 62.829 143.111 62.8289 143.111 62.8288C143.111 62.8287 143.111 62.8287 143.111 62.8286C143.111 62.8285 143.112 62.8284 143.861 63.8286C144.611 64.8287 144.611 64.8285 144.612 64.8284C144.612 64.8284 144.612 64.8283 144.612 64.8282C144.612 64.828 144.612 64.8278 144.613 64.8276C144.613 64.8272 144.614 64.8267 144.615 64.8261C144.616 64.825 144.618 64.8235 144.62 64.8217C144.625 64.8182 144.631 64.8134 144.639 64.8074C144.655 64.7953 144.677 64.7783 144.705 64.7564C144.762 64.7125 144.843 64.649 144.945 64.566C145.151 64.3999 145.445 64.1559 145.81 63.8358C146.54 63.1957 147.554 62.2499 148.712 61.0132L146.888 59.3043Z"
                              fill="#979797"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M139.411 28.0716C143.676 28.0716 147.782 27.5656 151.629 26.6294C153.164 30.1091 154 33.8586 154 37.7659C154 42.8345 152.594 47.6376 150.08 51.9337C149.616 52.726 149.115 53.5011 148.577 54.2575C147.729 55.4517 147.125 56.2949 146.592 56.9711C145.333 58.5708 144.477 59.2355 141.757 61.4004C139.943 62.8442 137.964 64.1525 135.844 65.3049L135.966 75.6823C135.976 76.4962 136.225 77.9903 135.401 78C135.067 78.0037 133.832 77.0694 133.567 76.8675L125.359 69.5733C121.82 70.3783 116.857 70.9244 113 70.9244C90.3563 70.9244 72 56.0788 72 37.7659C72 22.7688 84.3107 10.0972 101.205 6C105.63 18.6996 121.058 28.0716 139.411 28.0716ZM97.1555 33.3186C94.4985 33.3186 92.3446 35.4758 92.3446 38.1369C92.3446 40.7979 94.4985 42.9551 97.1555 42.9551C99.8125 42.9551 101.966 40.7979 101.966 38.1369C101.966 35.4758 99.8125 33.3186 97.1555 33.3186ZM112.39 33.3186C109.733 33.3186 107.579 35.4758 107.579 38.1369C107.579 40.7979 109.733 42.9551 112.39 42.9551C115.047 42.9551 117.201 40.7979 117.201 38.1369C117.201 35.4758 115.047 33.3186 112.39 33.3186ZM127.624 33.3186C124.967 33.3186 122.814 35.4758 122.814 38.1369C122.814 40.7979 124.967 42.9551 127.624 42.9551C130.281 42.9551 132.435 40.7979 132.435 38.1369C132.435 35.4758 130.281 33.3186 127.624 33.3186Z"
                              fill="#F1F1F1"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M96.8 33C99.451 33 101.6 35.2386 101.6 38C101.6 40.7614 99.451 43 96.8 43C94.149 43 92 40.7614 92 38C92 35.2386 94.149 33 96.8 33ZM112 33C114.651 33 116.8 35.2386 116.8 38C116.8 40.7614 114.651 43 112 43C109.349 43 107.2 40.7614 107.2 38C107.2 35.2386 109.349 33 112 33ZM127.2 33C129.851 33 132 35.2386 132 38C132 40.7614 129.851 43 127.2 43C124.549 43 122.4 40.7614 122.4 38C122.4 35.2386 124.549 33 127.2 33Z"
                              fill="#F4F4F4"
                              stroke="#979797"
                              strokeWidth="2.5"
                            ></path>
                            <path
                              d="M81 26C80.2274 27.2871 79.5578 28.6228 79 30"
                              stroke="#A9A9A9"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                            ></path>
                            <path
                              d="M95 13C90.1107 15.4343 85.983 18.8777 83 23"
                              stroke="#A9A9A9"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                            ></path>
                          </svg>
                          <span className="d-block mt-3">
                            اولین نفر نظر بده
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </Container>
          </div>
        </div>
        <div className="mb-5 footer-margin">
          <Footer />
        </div>
      </div>
    </>
  );
}
