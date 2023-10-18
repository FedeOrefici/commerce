import Card from "../src/components/Card"
import Navbar from "../src/components/Navbar"
import Paginate from "../src/components/Paginate"
import SearchBar from "../src/components/SearchBar"


const Home = () => {

    
    
  return (
    <div>
      <Navbar />
      <div className="w-full flex items-center justify-center h-[200px] p-2">
        <SearchBar />
      </div>
      <div className="bg-slate-500 w-full h-screen flex items-center justify-center">
        <Card />
      </div>
      <Paginate />
    </div>
  )
}

export default Home
