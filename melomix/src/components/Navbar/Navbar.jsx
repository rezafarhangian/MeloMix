import  { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Navbar.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaSearchSolid } from "react-icons/lia";
import SidebarMobile from "../SidebarMobile/SidebarMobile";
import {BsMusicNote} from "react-icons/bs"
import { Link } from "react-router-dom";

export default function Navbar({openSidebar}) {



  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <div className="navbar w-100  p-3 ">
        <Row className="d-flex justify-content-between align-items-center  w-100 m-auto ">
          <Col  className="d-flex  align-items-center ">
            <button onClick={handleShow} className="btn-Hamburger p-0 d-lg-none">
              <RxHamburgerMenu className="icon-hamburger  " />
            </button>
            <div
              className={`${
                openSidebar ? "d-none" : "d-lg-flex"
              } mt-2 me-3 fw-bold logo  align-items-center d-none`}
            >  
                  <BsMusicNote/>
              <h1>ملومیکس</h1>
            </div>
            <div className="search d-flex align-items-center d-none d-lg-block me-5">
              <LiaSearchSolid />
              <input type="text" placeholder="جستجو ..." className="me-1" />
            </div>
          </Col>

          <Col xs={5} className=" d-flex justify-content-end ">
            <button className="login-btn  ">
              <Link to="/login" className="text-white h-100 w-100  px-md-2 py-md-2">
              ورود / ثبت نام
              </Link>
            </button>
          </Col>
        </Row>
        <Row className="mt-3 w-100  m-auto d-lg-none">
          <Col sx={12}>
            <div className="search d-flex align-items-center">
              <LiaSearchSolid />
              <input type="text" placeholder="جستجو ..." className="me-1" />
            </div>
          </Col>
        </Row>
      </div>
            <SidebarMobile show={show} setShow={setShow}/>
      </>
  );
}
