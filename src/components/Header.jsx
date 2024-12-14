import { NavLink } from "react-router-dom"
const Header = () => {
  return (
    <header className=" flex justify-between p-5">
        <h2 className=" text-2xl font-bold text-indigo-500">QrFoodz</h2>
        <nav className=" space-x-5">
            <NavLink to={"/dashboard"} className={"hover:text-indigo-500"} >Dashboard</NavLink> 
            <NavLink to={"/menus"} className={"hover:text-indigo-500"}>Menu</NavLink> 
            <NavLink to={"/orders"} className={"hover:text-indigo-500"}>Orders</NavLink>
        </nav>
    </header>
  )
}

export default Header
