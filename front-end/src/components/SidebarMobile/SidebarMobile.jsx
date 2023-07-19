import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import items from "../../data/sidebar.json";
import SidebarItem from "../../Container/SidebarItem/SidebarItem";
import {BsMusicNote} from "react-icons/bs"




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
        <Offcanvas.Title className="title">
        <div
              className={`d-flex mt-2 me-3 fw-bold logo  align-items-center `}
            >  
                  <BsMusicNote/>
              <h1>ملومیکس</h1>
            </div>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {items.map((item, index) => (
          <div key={index} className="d-lg-none">
            <SidebarItem  item={item} openSidebar={true} setOpenSidebar={setOpen}/>
          </div>
        ))}
      </Offcanvas.Body>
    </Offcanvas>
  );
}
