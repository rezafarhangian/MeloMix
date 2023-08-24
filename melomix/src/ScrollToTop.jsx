import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import { useLayoutEffect } from "react";

export default function ScrollToTop({ children }) {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
}

