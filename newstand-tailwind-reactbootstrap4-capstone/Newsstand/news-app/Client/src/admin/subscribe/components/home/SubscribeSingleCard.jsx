import React, { useState } from "react";
import { Link } from 'react-router-dom'
//! import react-icons
// import { AiOutlineEdit } from 'react-icons/ai'
// import { BsInfoCircle } from 'react-icons/bs'
// import {PiBookOpenTextLight} from 'react-icons/pi'
import SubscribeModal from "./SubscribeModal";

const SubscribeSingleCard = ({ subscription }) => {
    //!to show modal
    const [showModal, setShowModal] = useState(false);
    return (
        <article className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl">
            <header>
                <span className="text-red-300 text-2xl">👤</span>
            </header>
            <section>
                <h2 className="px-5 py-1 bg-red-300 rounded-lg m-4">
                    {subscription.fName} {subscription.mName} {subscription.lName}
                </h2>
            </section>
            <section className="flex justify-start items-center gap-x-2">
                <span className="text-red-300 text-2xl">🆔</span>
                <h4 className="my-5 text-gray-500">{subscription._id}</h4>

            </section>
            <section className="flex justify-start items-center gap-x-2">
                {/*//!React-icon <PiBookOpenTextLight className="text-red-300 text-2xl" /> */}
                <span className="text-red-300 text-2xl">📧</span>
                <h2 className="my-1">{subscription.email}</h2>
            </section>
            <section className="flex justify-start items-center gap-x-2">
                {/*//!React-icon <PiBookOpenTextLight className="text-red-300 text-2xl" /> */}
                <span className="text-red-300 text-2xl">🪪</span>
                <h2 className="my-1">{subscription.userName} 🔑{subscription.password}</h2>
            </section>
            <section className="flex justify-between items-center gap-x-2 mt-4 p-4">
                <span
                    className="h-12"
                    onClick={() => setShowModal(true)}
                >📑</span>
                <Link to={`/subscribe/details/${subscription._id}`}>📖</Link>
                <Link to={`/subscribe/edit/${subscription._id}`}>✍️</Link>
                <Link to={`/subscribe/delete/${subscription._id}`}>🚮</Link>
            </section>
            {showModal && (
                <SubscribeModal subscribe={subscription} onClose={() => setShowModal(false)} />
            )}
        </article>

    )
}

export default SubscribeSingleCard