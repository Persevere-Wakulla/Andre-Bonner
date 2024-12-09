import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <section>
            <h2>Page Not Found</h2>
            <p>This Page is currently unavailable or is not a part of this website.</p>

            <h6>Go to the <Link to='/'>HomePage</Link>.</h6>
        </section>
    )
}
