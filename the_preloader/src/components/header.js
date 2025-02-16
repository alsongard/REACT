import { NavLink } from "react-router-dom"
export default function Header() {
  return (
    <header className="flex flex-row absolute  h-[70px] w-[100vw] justify-between pl-[20px] pr-[30px] items-center">
        <h1 className="text-white text-[30px]">The Logo</h1>
        <ul className="flex flex-row w-[600px] px-[20px] bg-gradient-to-r from-sky-500 to-indigo-500 rounded-md py-[10px] justify-between">
          <li>
            <NavLink to="/" 
              className={({isActive})=>
                isActive ? "text-black" : "text-white"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about"
              className={({isActive})=>
                isActive ? "text-black" : "text-white"}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services"
              className={({isActive})=>
                isActive ? "text-black" : "text-white"}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact"
              className={({isActive})=>
                isActive ? "text-black" : "text-white"}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact"
              className={({isActive})=>
                isActive ? "text-black" : "text-white"}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact"
              className={({isActive})=>
                isActive ? "text-black" : "text-white"}
            >
              Sign in
            </NavLink>
          </li>
          
        </ul>
    </header>
  )
}
