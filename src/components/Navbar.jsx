import { NavLink } from "react-router-dom"

const Navbar = () => {

  


  return (
    <div className="w-fullflex h-min-[100px] flex items-center justify-center bg-slate-400 px-4">
      <ul className="flex items-centers w-[80%] justify-around py-4">
        <NavLink className="bg-slate-800 text-white p-2 rounded w-[150px] text-center hover:bg-slate-700" to="/home">Drinks</NavLink>
        <NavLink className="bg-slate-800 text-white p-2 rounded w-[150px] text-center hover:bg-slate-700" to="/favorites">Favorites</NavLink>
        <NavLink className="bg-slate-800 text-white p-2 rounded w-[150px] text-center hover:bg-slate-700" to='/'>logout</NavLink>
      </ul>
    </div>
  )
}

export default Navbar
