import React, { useState } from "react";
import "./Login.scss";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Footer from "../../components/Footer/Footer";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Container>
        <form className="login-form" onClick={(e) => e.preventDefault()}>
          <p className="text-center fw-bold mt-2">ورود به حساب کاربری</p>
          <div className="mb-3">
            <label className="d-block" htmlFor="">
              شماره همراه
            </label>
            <input className="login-input" type="tel" />
          </div>
          <div className="mb-4 position-relative">
            <label className="d-block" htmlFor="">
              رمز عبور
            </label>
            <input
              className="login-input"
              type={showPassword ? "text" : "password"}
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="position-absolute toggle-icon"
            >
              {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
            </button>
          </div>
          <button className="btn-login">ورود</button>
          <div className="d-flex justify-content-between align-items-center mt-4 mb-1">
            <span>
              حساب کاربری ندارید؟ <Link to="/register">ثبت نام</Link>
            </span>
            <span>فراموشی رمز عبور</span>
          </div>
        </form>
      </Container>
      <div className="mb-5">
        <Footer />
      </div>
    </>
  );
}
