import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./SidebarMobile.scss";
import items from "../../data/sidebar.json";
import SidebarItem from "../../Container/SidebarItem/SidebarItem";
import { Link } from "react-router-dom";




export default function SidebarMobile({ show, setShow }) {
  const handleClose = () => setShow(false);


  const [open, setOpen] = useState(false);
   
  return (
    <Offcanvas
      responsive="lg"
      show={show}
      onHide={handleClose}
      placement="end"
      style={{ width: "250px" }}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="title">ملومیکس</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {items.map((item, index) => (
          <div key={index}>
            {item.childrens ? (
              <div
                className={`${
                  open ? "sidebar-item open" : "sidebar-item"
                }   p-0 d-lg-none`}
              >
                <div
                  onClick={() => {
                    setOpen(!open);
                  }}
                  className={`${open ? "add-bg" : ""}  d-flex justify-content-between  align-items-center sidebar-title p-1 `}
                >
                  <div className="d-flex ">
                    <i className={item.icon}></i>

                    <p
                      className={`my-auto `}
                    >
                      {item.title}
                    </p>
                  </div>

                  {open ? (
                    <i
                      className={`bi bi-chevron-up toggle-btn `}
                    ></i>
                  ) : (
                    <i
                      className={`bi-chevron-down toggle-btn `}
                    ></i>
                  )}
                </div>

                <div className="sidebar-content ">
                  {item.childrens.map((child, index) => (
                    <Link key={index} to="/" className="submenu d-block">
                      {child.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                to="/"
                className={`sidebar-item plain p-1 d-flex align-items-center  justify-content-start d-lg-none`}
              >
                {item.icon && <i className={item.icon}></i>}
                <p
                  className={` my-auto fw-bold`}
                >
                  {item.title}
                </p>
              </Link>
            )}
          </div>
        ))}
      </Offcanvas.Body>
    </Offcanvas>
  );
}
