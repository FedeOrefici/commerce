import { Route, Routes } from "react-router-dom"
import Home from "../views/Home"
import Navbar from "./components/Navbar"
import Favorites from "../views/Favorites"
import Login from "../views/Login"

function App() {


  return (
    <div>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  )
}

export default App
