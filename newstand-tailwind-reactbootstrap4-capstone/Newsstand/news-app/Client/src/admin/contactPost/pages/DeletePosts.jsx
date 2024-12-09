import React, { useState } from "react"
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"
import { useNavigate, useParams } from 'react-router-dom'

const DeletePosts = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const { id } = useParams();
    
    const handleDeletePost = () => {
        setLoading(true)
        fetch(`http://localhost:5000/contact-post/${id}`, {
            method: 'DELETE'
        }).then(
            ()=> {
                setLoading(false);
                navigate('/')
            })
            .catch((error) => {
                setLoading(false);
                alert('An error happened. Please check console');
                console.log(error)
            })
    }
    return(
        <article className="p-4 text-center test-sm">
<BackButton />
            <div className="my-10">
                <h1 className="text-3xl my-5">Delete Post</h1>
                {loading ? <Spinner /> : ''}
                <div className="flex flex-col border-2 border-sky-400 rounded-xl p-4 mx-auto ">
                    <h3>ARE YOU SURE YOU WANT TO DELETE THIS POST</h3>

                    <button
                        className="p-4 bg-red-600 text-white m-1 w-full"
                        onClick={handleDeletePost}
                    >⚔️ YES, DELETE IT ⚔️</button>

                </div>

            </div>
        </article>
    )
}
export default DeletePosts