import { useRoutes } from "react-router-dom";
import Routes from "./Routes";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Sidebar from "../src/components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  
  const router = useRoutes(Routes);
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="d-flex position-fixed top-0 bottom-0 end-0 start-0">
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

      <div className="w-100  ">
        <Navbar openSidebar={openSidebar} />
        <div className=" p-3  h-100 overflow-y-auto ">
          <div className="">{router}</div>
        </div>
      </div>
    </div>
  );
}
