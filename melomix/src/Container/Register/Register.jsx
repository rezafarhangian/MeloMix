import React, { useState } from 'react'
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Footer from "../../components/Footer/Footer";




export default function Register() {

    
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setRepeatShowPassword] = useState(false);


  return (
    <>
    <Container>
      <form className="login-form" onClick={(e) => e.preventDefault()}>
        <p className="text-center fw-bold mt-2">ثبت نام در ملومیکس</p>
        <div className="mb-3">
          <label className="d-block" htmlFor="">
            نام و نام خانوادگی 
          </label>
          <input className="login-input" type="tel" />
        </div>
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
        <div className="mb-4 position-relative">
          <label className="d-block" htmlFor="">
            تکرار رمز عبور
          </label>
          <input
            className="login-input"
            type={showRepeatPassword ? "text" : "password"}
          />
          <button
            onClick={() => setRepeatShowPassword(!showRepeatPassword)}
            className="position-absolute toggle-icon"
          >
            {showRepeatPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
          </button>
        </div>
        <button className="btn-login">ثبت نام</button>
        <div className="d-flex justify-content-between align-items-center mt-4 mb-1">
          <span>
            حساب کاربری دارید؟ <Link to="/login"> ورود</Link>
          </span>
        </div>
      </form>
    </Container>
    <div className="mb-5">
    <Footer />
  </div>
  </>
  )
}
