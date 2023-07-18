import React from "react";
import { AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import items from "../../data/sidebar.json";
import SidebarItem from "../../Container/SidebarItem/SidebarItem";
import "./Sidebar.scss"


export default function Sidebar({ openSidebar, setOpenSidebar }) {
  return (
    <div
      className={`${
        openSidebar ? "opensidebar px-4" : "closesidebar px-0"
      } sidebar h-100  d-none d-lg-block overflow-y-auto `}
    >
      <div
        className={`${
          openSidebar ? "justify-content-between" : "justify-content-center"
        } d-flex align-items-center  mt-3 border-bottom pb-3 `}
      >
        <button
          onClick={() => setOpenSidebar(!openSidebar)}
          className="btn-Hamburger p-0 "
        >
          {openSidebar ? (
            <AiOutlineClose className="icon-hamburger" />
          ) : (
            <RxHamburgerMenu className="icon-hamburger" />
          )}
        </button>
        <h6
          className={`${
            openSidebar ? "d-block" : "d-none"
          } mt-2 me-3 fw-bold logo`}
        >
          ملومیکس
        </h6>
      </div>

      <div className="mt-4">
        {items.map((item, index) => (
          <SidebarItem key={index} item={item} openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
        ))}
      </div>
    </div>
  );
}
