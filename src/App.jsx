import Crud from "./Crud"
import Card from "./components/Card"
import Edit from "./components/Edit"

function App() {


  return (
    <div>
      <div>
        <Crud />
      </div>

     <div>
      <Card />
     </div>

     <div>
      <Edit />
     </div>
     
    </div>
  )
}

export default App
