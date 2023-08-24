import { useRoutes, useLocation } from "react-router-dom";
import Routes from "./Routes";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Sidebar from "../src/components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";

import ScrollToTop from "./ScrollToTop.jsx";

export default function App() {
  const router = useRoutes(Routes);
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="d-flex position-fixed top-0 bottom-0 end-0 start-0 ">
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

      <div className="w-100 flex-shrink-1  ">
        <Navbar openSidebar={openSidebar} />

        <div className="  h-100 overflow-y-auto ">
          {router}
        </div>
      </div>
    </div>
  );
}
