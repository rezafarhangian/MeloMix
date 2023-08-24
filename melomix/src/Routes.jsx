import Login from "./Container/Login/Login"
import Register from "./Container/Register/Register"
import Home from "./Pages/Home/Home"
import Music from "./Pages/Music/Music"


const routes = [
    { path: "/", element: <Home/> },
    { path: "/music/:category/:title", element: <Music/> },
    { path: "/login", element: <Login/> },
    { path: "/register", element: <Register/> },
]

export default routes