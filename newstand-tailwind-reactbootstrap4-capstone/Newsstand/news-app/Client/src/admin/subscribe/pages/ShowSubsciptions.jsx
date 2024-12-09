import React, { useState, useEffect } from "react"
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"
import { useParams } from 'react-router-dom'
const ShowSubscriptions = () => {
    const [subscription, setSubscription] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/subscribe/${id}`)
            .then(
                async (res) => {
                    console.log(res);
                    //! when dealing with multiple properties...destructure!!
                    let data = await res.json() 
                    // let { data, count } = await res.json();
                    console.log(data);
                    setSubscription(data);
                    setLoading(false);
                    // console.log(book)
                })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, [])
    return(
        <div className="p-4">
        <BackButton />
        <h1 className="text-3xl my-4">Show Book</h1>
        {loading ?(
            <Spinner />
        ):(
            <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
                <div className="my-4 flex">
                    <span className="text-xl mr-4 text-gray-500"><span className=" ">🪪</span> Id</span>
                    <span>{subscription._id}</span>
                </div>
                <div className="my-4 flex">
                    <p className="text-xl mr-4 text-gray-500"><span className=" ">📔</span> First Name</p>
                    <span>{subscription.fName}</span>
                </div>
                <div className="my-4 flex">
                    <p className="text-xl mr-4 text-gray-500"><span>👤</span> Middle Name</p>
                    <span>{subscription.mName}</span>
                </div>
                <div className="my-4 flex ">
                    <p className="text-xl mr-4 text-gray-500"><span>©</span> Last Name</p>
                    <span>{subscription.lName}</span>
                </div>
                <div className="my-4 flex">
                    <p className="text-xl mr-4 text-gray-500"><span>⏳</span> Email</p>
                    <span>{subscription.email}</span>
                </div>
                <div className="my-4 flex">
                    <p className="text-xl mr-4 text-gray-500"><span>⏳</span> Address</p>
                    <span>{subscription.address}</span>
                </div>
                <div className="my-4 flex">
                    <p className="text-xl mr-4 text-gray-500"><span>⏳</span> Phone</p>
                    <span>{subscription.phone}</span>
                </div>
                <div className="my-4 flex">
                    <p className="text-xl mr-4 text-gray-500"><span>⏳</span> Account Number</p>
                    <span>{subscription.accountNumber}</span>
                </div>
                <div className="my-4 flex">
                    <p className="text-xl mr-4 text-gray-500"><span>⏳</span> Currency</p>
                    <span>{subscription.currency}</span>
                </div>
                <div className="my-4 flex">
                    <p className="text-xl mr-4 text-gray-500"><span>⏳</span> Card Type</p>
                    <span>{subscription.cardType}</span>
                </div>
                <div className="my-4 flex">
                    <p className="text-xl mr-4 text-gray-500"><span>⏳</span> Nickname</p>
                    <span>{subscription.nickname}</span>
                </div>
                <div className="my-4 flex">
                    <p className="text-xl mr-4 text-gray-500"><span>⏳</span> Pet Nickname</p>
                    <span>{subscription.petNickname}</span>
                </div>
                <div className="my-4 flex">
                    <p className="text-xl mr-4 text-gray-500"><span>⏳</span> Favorite Food</p>
                    <span>{subscription.favFood}</span>
                </div>
                <div className="my-4 flex">
                    <p className="text-xl mr-4 text-gray-500"><span>⏳</span> Favorite Color</p>
                    <span>{subscription.favColor}</span>
                </div>
                <div className="my-4 flex">
                    <p className="text-xl mr-4 text-gray-500"><span>⏳</span> Favorite Celebrity</p>
                    <span>{subscription.favCelebrity}</span>
                </div>
                <div className="my-4 flex">
                    <p className="text-xl mr-4 text-gray-500"><span>⏳</span> Changed Name</p>
                    <span>{subscription.changedName}</span>
                </div>
                <div className="my-4 flex">
                    <p className="text-xl mr-4 text-gray-500"><span>⏳</span> Grandmother's Middle Name</p>
                    <span>{subscription.gmaMiddleName}</span>
                </div>
                <div className="my-4 flex">
                    <p className="text-xl mr-4 text-gray-500"><span>⏳</span> Song Name</p>
                    <span>{subscription.songName}</span>
                </div>
                <div className="my-4 flex">
                    <p className="text-xl mr-4 text-gray-500"><span>⏳</span> Username</p>
                    <span>{subscription.userName}</span>
                </div>
                <div className="my-4 flex">
                    <p className="text-xl mr-4 text-gray-500"><span>⏳</span> Password</p>
                    <span>{subscription.password}</span>
                </div>
                <div className="my-4 flex">
                    <p className="text-xl mr-4 text-gray-500"><span>⏳</span> Create Time</p>
                    <span>{new Date(subscription.createdAt).toString()}</span>
                </div>
                <div className="my-4 flex">
                    <p className="text-xl mr-4 text-gray-500"><span>⌚</span> Last Update Time</p>
                    <span>{new Date(subscription.updatedAt).toString()}</span>
                </div>
            </div>
        )}
    </div>
    )
}
export default ShowSubscriptions