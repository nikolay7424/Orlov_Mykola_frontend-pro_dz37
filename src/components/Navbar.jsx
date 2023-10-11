import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <ul className="navbar">
                <li>
                    <NavLink to="/contacts">Contacts</NavLink>
                </li>
                <li>
                    <NavLink to="/add">Add phone</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
