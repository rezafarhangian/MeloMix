import { useEffect, useState } from "react";
import "./SidebarItem.scss";
import { Link } from "react-router-dom";

export default function SidebarItem({ item, openSidebar, setOpenSidebar }) {
  const [open, setOpen] = useState(false);


   useEffect(( ) => {
            if(!openSidebar){
                setOpen(false)
            }
   },[openSidebar])

  if (item.childrens) {
    return (
      <div className={`${open ? "sidebar-item open" : "sidebar-item"}   p-0`}> 
        <div
          onClick={() => {
            setOpen(!open)
            setOpenSidebar(true)} }
          className={`${open ? "add-bg" : ""}  d-flex ${openSidebar ? "justify-content-between" : "justify-content-center"}  align-items-center sidebar-title p-1 `}
        >
          <div className="d-flex ">
            <i className={item.icon}></i>

            <p className={`my-auto ${openSidebar ? "d-block" : "d-none"}`}>
              {item.title}
            </p>
          </div>

          {open ? (
            <i className={`bi bi-chevron-up toggle-btn ${openSidebar ? "d-block" : "d-none"}`}></i>
          ) : (
            <i className={`bi-chevron-down toggle-btn ${openSidebar ? "d-block" : "d-none"}`}></i>
          )}
        </div>

        <div className="sidebar-content ">
          {item.childrens.map((child, index) => (
            <Link key={index} to={child.path} className="submenu d-block">
              {child.title}
            </Link>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <Link to="/" className={`sidebar-item plain p-1 d-flex align-items-center ${openSidebar ? "justify-content-start" : "justify-content-center"}`} >
        {item.icon && <i className={item.icon}></i>}
        <p className={`${openSidebar ? "d-block" : "d-none"} my-auto fw-bold`}>{item.title}</p>
      </Link>
    );
  }
}
