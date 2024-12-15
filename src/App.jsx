
import { BrowserRouter, Routes, Route  } from "react-router-dom"
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import Orders from "./pages/Orders"
import MenuPage from "./pages/MenuPage"
import MenuDetails from "./pages/MenuDetails"
import CheckOut from "./pages/CheckOut"

function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<Dashboard/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/menus' element={<MenuPage/>}/>
        <Route path='/menu/:menuId' element={<MenuDetails/>}/>
        <Route path='/checkout/:menuId' element={<CheckOut/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
