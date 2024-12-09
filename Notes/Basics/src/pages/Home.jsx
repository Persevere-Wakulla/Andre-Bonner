import Navbar from "../components/Navbar"

export default function Home({name}) {
    return (
        <div>
            <Navbar />

            <h1>Welcome {name}</h1>
        </div>
    )
}