import { NavLink } from "react-router-dom"

const Navbar = () => {

  


  return (
    <div className="w-[250px] h-[80%] flex items-center justify-center bg-[#D9D9D9] px-4">
      <ul className="flex items-centers w-[80%] justify-center flex-col gap-5">
        <NavLink className="text-[#7A293D] p-2 rounded w-[150px] text-center hover:bg-[#7A293D] uppercase hover:text-white" to="/home">Drinks</NavLink>
        <NavLink className="text-[#7A293D] p-2 rounded w-[150px] text-center hover:bg-[#7A293D] uppercase hover:text-white" to="/favorites">Favorites</NavLink>
      </ul>
    </div>
  )
}

export default Navbar
