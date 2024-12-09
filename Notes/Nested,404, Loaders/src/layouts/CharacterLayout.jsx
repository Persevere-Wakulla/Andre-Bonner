import { NavLink, Outlet } from "react-router-dom"
export default function CharacterLayout() {
    return (
        <div>

            <h1>Adventure Time Characters</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, atque molestias. Quisquam ipsum maiores velit obcaecati deserunt, doloremque placeat, soluta ipsam commodi nobis quam? Quae voluptatibus quasi maxime nihil totam?</p>
            <nav>
                <ul>
                    <li>
                        <NavLink to='finn'>Finn</NavLink>
                        <NavLink to='pb'>PB</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}