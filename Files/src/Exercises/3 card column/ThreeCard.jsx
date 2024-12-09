import Luxury from "./components/Luxury"
import Sedan from "./components/Sedan"
import Suv from "./components/Suv"
import './threeCard.css'


// Parent Component, holding all of my other components
export default function ThreeCard (){
    return (
        <main>
            <Sedan/>
            <Suv/>
            <Luxury/>
        </main>
    )
}