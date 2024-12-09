import { useState, useContext } from "react";
import { UserContext } from "../layout/RootLayout";
// import { useOutletContext } from 'react-router-dom'


const NewsHome = () => {
    const subscriber = useContext(UserContext)
    const [blog, setBlog] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showBlog, setShowBlog] = useState(false);


    return (
        <section className='c-home pl-0 pr-0' id='home-top'>
            <div>
                <h1 className='c-home text-4xl text-center font-bold pb-5'>NEWSSTAND</h1>
                <p className='text-2xl'>News articles about news all around the world. From politics to sports at a cheap price for the entire month. Experience our free articles to see our archives and possibly new aritcles for free. Read the latest news material if you are a subscriber. Thanks for visiting our site and send any issues and feedback on our contact page.</p>
            </div>
            {/* ADVERTISEMENTS  */}
            <section className="bg-black text-red-700 pt-10 p-0 mt-10 w-full mb-10 text-center">
                <h4 className="pb-8 text-4xl i-font w-full">VISIT THE DBDSE FOR DEALS ON PRODUCTS RANGING FROM ELECTRONICS, JEWELRY AND MORE </h4>
                <img src="src\personal-assets\assets\photo-sale.jpg" alt="" width={'100%'} />
            </section>
            <section className="mt-10  w-full bg-gray-700 rounded-lg">
                <img src="src\personal-assets\assets\photo-photoarea.jpg" alt="photo-area" width={'100%'} />
                <h4 className="text-center text-2xl text-white p-2">VISIT RP2 PHOTOGRAPHY COMING TO AN AREA NEAR YOU... MODELS, FAMILY GATHERINGS, PROFESSIONAL PERSONAL IMAGES AND MORE....</h4>
            </section>
        </section>
    )
}
export default NewsHome