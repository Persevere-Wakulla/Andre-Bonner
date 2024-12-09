import React from "react";


export default function PostModal({ post, onClose }) {
    return (
        <article className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center" onClick={onClose}>
            <div onClick={(event) => event.stopPropagation()}
                className="w-[600px] max-w-full h-[400px] bg-white text-black rounded-xl p-4 flex flex-col relative">
                <span
                    className="absolute right-6 top-6 text-3xl cursor-pointer"
                    onClick={onClose}>❌</span>
                <h4 className="my-2 text-gray-500">{post._id}</h4>
                <div className="flex justify-start items-center gap-x-2">
                    {/*//!React-icon <PiBookOpenTextLight className="text-red-300 text-2xl" /> */}
                    <span className="text-red-300 text-2xl">📧</span>
                    <h2 className="my-1">{post.email}</h2>
                </div>
                <div>
                <p className="mt-4 text-center">📰 COMMENT / POST</p>
                <p className="my-2 p-5">
                    {post.message}
                </p>
                </div>
            </div>
        </article>
    )
}