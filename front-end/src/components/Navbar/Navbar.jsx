import  { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Navbar.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaSearchSolid } from "react-icons/lia";
import NavbarMobile from "../SidebarMobile/SidebarMobile";



export default function Navbar() {

  const [openSidebar, setOpenSidebar] = useState(false);


  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="navbar w-100  p-3 ">
        <Row className="d-flex justify-content-between align-items-center  w-100 m-auto ">
          <Col className="d-flex  align-items-center ">
            <button onClick={handleShow} className="btn-Hamburger p-0 d-lg-none">
              <RxHamburgerMenu className="icon-hamburger " />
            </button>
            <h6
              className={`${
                openSidebar ? "d-none" : "d-block"
              } mt-2 me-3 fw-bold logo`}
            >
              ملومیکس
            </h6>
            <div className="search d-flex align-items-center d-none d-lg-block me-5">
              <LiaSearchSolid />
              <input type="text" placeholder="جستجو ..." className="me-1" />
            </div>
          </Col>

          <Col xs={5} className=" d-flex justify-content-end ">
            <button className="login-btn px-md-3 py-md-2  ">
              ورود / ثبت نام
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
            <NavbarMobile show={show} setShow={setShow}/>
      </>
  );
}
