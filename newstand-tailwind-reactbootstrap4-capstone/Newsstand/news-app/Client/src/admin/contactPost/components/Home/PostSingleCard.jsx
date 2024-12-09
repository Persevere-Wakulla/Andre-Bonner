import { useState } from "react"
import PostModal from "./PostModal"
import {Link} from 'react-router-dom'

export default function PostSingleCard({ post }) {
    const [showModal, setShowModal] = useState(false)

    return (
        <article className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl">
            <header>
                <span className="text-red-300 text-2xl">👤</span>
            </header>
            <section className="flex justify-start items-center gap-x-2">
                {/*//!React-icon <PiBookOpenTextLight className="text-red-300 text-2xl" /> */}
                <span className="text-red-300 text-2xl">📧</span>
                <h2 className="my-1">{post.email}</h2>
            </section>
            <section className="flex justify-between items-center gap-x-2 mt-4 p-4">
                <span
                    className="h-12"
                    onClick={() => setShowModal(true)}
                >📑</span>
                <Link to={`/contact-posts/details/${post._id}`}>📖</Link>
                <Link to={`/contact-posts/edit/${post._id}`}>✍️</Link>
                <Link to={`/contact-posts/delete/${post._id}`}>🚮</Link>
            </section>
            {showModal && (
                <PostModal post={post} onClose={() => setShowModal(false)} />
            )}
        </article>
    )
}