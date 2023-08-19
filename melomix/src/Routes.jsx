import Home from "./Pages/Home/Home"
import Music from "./Pages/Music/Music"


const routes = [
    { path: "/", element: <Home/> },
    { path: "/music/:category/:title", element: <Music/> },
]

export default routes