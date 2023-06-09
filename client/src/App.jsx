import { Route, Routes } from "react-router-dom"
import Bookpage from "./components/Bookpage"
import ReportPage from "./components/ReportPage"



function App() {

  return (
    
    <Routes>
      <Route path='/bookpage' element={<Bookpage/>}/>
      <Route path='/' element={<ReportPage/>}/>
      <Route path='/update/:id' element={<Bookpage/>}/>
      

    </Routes>
  )
}

export default App