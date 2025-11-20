import { Outlet } from "react-router-dom"
import Login from "./Login"
import Navbar from "./Navbar"
import Profile from "./Profile"


const Body = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>   {/* This renders the child routes of Body*/}
    </>
  )
}


export default Body