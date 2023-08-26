import React, { useState } from "react";
import { BsFillReplyFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Comments({m}) {

    const [openForm, setOpenForm] = useState(false);


  return (
    <div  className="comment p-2 rounded my-4">
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
        <div className="pe-4 ps-2  my-3 conmment-text">{m.text}</div>
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
            <Link to="/login">
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
                  <span className="fw-bold mt-2">{c.name}</span>
                </div>
                <div className="comment-date">{c.date}</div>
              </div>
              <div className="pe-4 ps-2 my-3  conmment-text">{c.text}</div>
            </div>
          </div>
        ))}
    </div>
  );
}
