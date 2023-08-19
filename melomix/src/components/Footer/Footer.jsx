import React from "react";
import "./Footer.scss";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  BiLogoTelegram,
  BiLogoTwitter,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
  BiLogoInstagramAlt,
} from "react-icons/bi";

export default function Footer() {
  return (
    <div className=" footer  p-3">
      <Container>
        <div className="d-md-none">
          <h2>ملومیکس</h2>
        </div>
        <div className="d-md-flex justify-content-between align-items-start mt-md-2 mt-lg-5">
          <div>
            <div className="d-flex flex-wrap justify-content-between footer-link  ">
              <div className="wrapper-link flex-shrink-0">
                <Link className="d-block" to="/">
                  پادکست
                </Link>
                <Link className="d-block" to="/">
                  کتاب صوتی
                </Link>
                <Link className="d-block" to="/">
                  موسیقی
                </Link>
                <Link className="d-block" to="/">
                  وبلاگ
                </Link>
                <Link className="d-block" to="/">
                  بخش برنامه سازان
                </Link>
              </div>
              <div className="wrapper-link flex-shrink-0">
                <Link className="d-block" to="/">
                  درباره ملومیکس
                </Link>
                <Link className="d-block" to="/">
                  ارتباط با ما
                </Link>
                <Link className="d-block" to="/">
                  سوالات متداول
                </Link>
                <Link className="d-block" to="/">
                  همکاری با ما
                </Link>
                <Link className="d-block" to="/">
                  مسئولیت اجتماعی
                </Link>
              </div>
              <div className="wrapper-link flex-shrink-0">
                <Link className="d-block" to="/">
                  قوانین و مقررات
                </Link>
                <Link className="d-block" to="/">
                  حریم خصوصی
                </Link>
                <Link className="d-block" to="/">
                  راهنمای ساخت پادکست
                </Link>
              </div>
            </div>
            <div className="d-none d-md-block mt-5 copyright1">
              <h2>ملومیکس</h2>
              <p>تمامی حقوق این وبسایت متعلق به ملومیکس است</p>
            </div>
          </div>

          <div>
            <div className="d-flex align-items-center justify-content-center flex-wrap icons-wrapper m-auto mt-md-0 mt-5">
              <img
                className="bazzar-icon"
                src="/assets/images/Footer/bazaar-icon.png"
                alt=""
              />
              <img src="/assets/images/Footer/android.svg" alt="" />
              <img src="/assets/images/Footer/apple-store.svg" alt="" />
              <img src="/assets/images/Footer/google-paly.svg" alt="" />
            </div>

            <div className="d-flex align-items-center justify-content-center mt-4 namad">
              <img src="/assets/images/Footer/enamad.png" alt="" />
              <img src="/assets/images/Footer/samandehi.png" alt="" />
            </div>

            <div className="media d-flex justify-content-center align-items-center mt-3">
              <a href="https://telegram.org/" target="_blank">
                <BiLogoTelegram className="text-light " />
              </a>
              <a href="https://twitter.com/?lang=fa" target="_blank">
                <BiLogoTwitter className="text-light " />
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                <BiLogoLinkedinSquare className="text-light " />
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <BiLogoYoutube className="text-light " />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <BiLogoInstagramAlt className="text-light " />
              </a>
            </div>
            <div className="copyright2 d-md-none">
              <p>تمامی حقوق این وبسایت متعلق به ملومیکس است</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
