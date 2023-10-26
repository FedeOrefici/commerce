import { Route, Routes } from "react-router-dom"
import Home from "../views/Home"
import Favorites from "../views/Favorites"
import ItemDetail from "./components/ItemDetail"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/:id" element={<ItemDetail />} />
      </Routes>
    </div>
  )
}

export default App
