import Card from "../src/components/Card"
import Navbar from "../src/components/Navbar"
import Paginate from "../src/components/Paginate"
import SearchBar from "../src/components/SearchBar"


const Home = () => {

    
    
  return (
    <div className="flex">
      <div className="bg-[#7A293D] flex items-center justify-center w-[250px]">
        <Navbar />
      </div>

      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full flex items-center justify-center h-[150px]">
          <SearchBar />
        </div>
        <div className="bg-slate-500 w-full h-screen flex items-center justify-center">
          <Card />
        </div>
        <Paginate />
      </div>
    </div>
  )
}

export default Home
