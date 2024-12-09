import React from "react";

const BookModal = ({ book, onClose}) => {
    return (
        <div className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center" onClick={onClose}>
            <div
                onClick={(event) => event.stopPropagation()}
                className="w-[600px] max-w-full h-[400px] bg-white text-black rounded-xl p-4 flex flex-col relative"
            >
                <span
                    className="absolute right-6 top-6 text-3xl cursor-pointer"
                    onClick={onClose}>❌</span>
                <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
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
                    <span className="text-red-300 text-2xl">👤</span>
                    <h2 className="my-1">{book.author}</h2>
                </div>
                <p className="mt-4">Anything You want to show</p>
                <p className="my-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi labore harum nam? Dolor et quo, minus sapiente, dolorem, placeat magni alias quae perspiciatis pariatur nobis vero libero earum sit. Similique?
                </p>
            </div>
        </div>
    )
}

export default BookModal