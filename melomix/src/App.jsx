import { useRoutes} from "react-router-dom";
import Routes from "./Routes";
import { useEffect, useState } from "react";
import Sidebar from "../src/components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./ScrollToTop";


export default function App() {
  const router = useRoutes(Routes);
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="d-flex ">
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

      <div className="w-100  flex-shrink-1  ">
        <Navbar openSidebar={openSidebar} />
        <div className=" overflow-y-auto ">


          {router}
         
        </div>
      </div>
    </div>
  );
}
