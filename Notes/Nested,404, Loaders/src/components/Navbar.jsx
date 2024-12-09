import { Link, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import Characters from "../pages/characters/Finn";
export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>

                    <NavLink to='/' >Home</NavLink>
                    <NavLink to='characters' >Characters</NavLink>
                </li>
            </ul>
        </nav>
    )
}