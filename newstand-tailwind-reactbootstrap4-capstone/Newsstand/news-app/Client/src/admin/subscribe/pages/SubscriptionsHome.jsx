import React, { useEffect, useState } from "react";
// import axios from 'axios'
import Spinner from "../components/Spinner";
import { Link } from 'react-router-dom';
// import { AiOutlineEdit } from 'react-icons/ai'
// import { BsInfoCircle } from 'react-icons/bs'
// import { MdOutlineAddBox, MdOutlineDelete } from ' react-icons/md'
import SubscribesTable from "../components/home/SubscribesTable";
import SubscribesCard from "../components/home/SubscribesCard";
const SubscriptionsHome = () => {
    const [subscribes, setSubscribes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:5000/subscribe')
            .then(
                async (res) => {
                    console.log(res);
                    //! when dealing with multiple properties...destructure!!
                    // let data = await res.json() 
                    let { data, count } = await res.json();
                    console.log(data);
                    console.log(count)
                    setSubscribes(data);
                    setLoading(false);
                    console.log(subscribes)
                })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, []);
    return(
        <div className="p-4">
            <div className="flex justify-center items-center gap-x-4">
                <button
                    className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
                    onClick={() => setShowType('table')}
                >
                    Table
                </button>
                <button
                    className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
                    onClick={() => setShowType('card')}
                >
                    Card
                </button>
            </div>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl my-8">SUBSCRIPTIONS</h1>
                <Link to="createSubscription">
                    {/* //! <MdOutlineAddBox/> */}
                    {/* //* instead do the following div */}
                    <div className="text-sky-800 text-4xl ml-6 " id='add-link'>➕</div>
                </Link>
            </div>
            {loading ? <Spinner /> : showType === 'table' ? (<SubscribesTable subscribes={subscribes} />) : (<SubscribesCard subscribes={subscribes} />)}
        </div>
    )
}
export default SubscriptionsHome