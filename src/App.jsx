import { Route, Routes } from "react-router-dom"
import Home from "../views/Home"
import Navbar from "./components/Navbar"
import Favorites from "../views/Favorites"

function App() {


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  )
}

export default App
