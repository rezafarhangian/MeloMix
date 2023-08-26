import React from "react";
import { AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import items from "../../data/sidebar.json";
import SidebarItem from "../SidebarItem/SidebarItem";
import "./Sidebar.scss"
import {BsMusicNote} from "react-icons/bs"


export default function Sidebar({ openSidebar, setOpenSidebar }) {
  return (
    <div
      className={`${
        openSidebar ? "opensidebar px-4" : "closesidebar px-0"
      } sidebar d-none d-lg-block overflow-y-auto flex-shrink-0`}
    >
      <div
        className={`${
          openSidebar ? "justify-content-between pb-bottom1 " : "justify-content-center pb-bottom2 "
        } d-flex align-items-center  border-bottom  `}
      >
        <button
          onClick={() => setOpenSidebar(!openSidebar)}
          className="btn-Hamburger p-0 "
        >
          {openSidebar ? (
            <AiOutlineClose className="icon-hamburger " />
          ) : (
            <RxHamburgerMenu className="icon-hamburger" />
          )}
        </button>
        <div
          className={`${
            openSidebar ? "d-block" : "d-none"
          } mt-2 me-3 fw-bold logo d-flex align-items-center`}
        >
             <BsMusicNote/>
              <h1>ملومیکس</h1>
        </div>
      </div>

      <div className="mt-4">
        {items.map((item, index) => (
          <SidebarItem key={index} item={item} openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
        ))}
      </div>
    </div>
  );
}
