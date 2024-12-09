import React, { useState } from "react";
import { Link } from 'react-router-dom'
//! import react-icons
// import { AiOutlineEdit } from 'react-icons/ai'
// import { BsInfoCircle } from 'react-icons/bs'
// import {PiBookOpenTextLight} from 'react-icons/pi'
import BookModal from "./BookModal";
import { set } from "mongoose";
const BookSingleCard = ({ book }) => {
    //!to show modal
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl">
            <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
                {book.publishYear}
            </h2>
            <h4 className="my-2 text-gray-500">{book._id}</h4>
            <div className="flex justify-start items-center gap-x-2">
                {/*//!React-icon <PiBookOpenTextLight className="text-red-300 text-2xl" /> */}
                <span className="text-red-300 text-2xl">📙</span>
                <h2 className="my-1">{book.title}</h2>
            </div>
            <div className="flex justify-start items-center gap-x-2">
                {/*//!React-icon <PiBookOpenTextLight className="text-red-300 text-2xl" /> */}
                <span className="text-red-300 text-2xl">🪪</span>
                <h2 className="my-1">{book.author}</h2>
            </div>
            <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
                <span
                onClick={()=> setShowModal(true)}
                >📑</span>
                <Link to={`/books/details/${book._id}`}>📖</Link>
                <Link to={`/books/edit/${book._id}`}>✍️</Link>
                <Link to={`/books/delete/${book._id}`}>🚮</Link>
            </div>
            {showModal && (
                <BookModal book={book} onClose={()=> setShowModal(false)} />
            )}
        </div>

    )
}

export default BookSingleCard