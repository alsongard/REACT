import { NavLink } from "react-router-dom"
export default function Header() {
  return (
    <header>
        <h1>The Logo</h1>


        <ul>
          <li>
            <NavLink to="#">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              Contact
            </NavLink>
          </li>
        </ul>
    </header>
  )
}
