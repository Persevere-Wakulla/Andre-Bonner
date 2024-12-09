import React, { useState, useEffect } from "react"
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"
import { useParams } from 'react-router-dom'
import { set } from "mongoose"
const ShowPosts = () => {
    const [posts, setPosts] = useState({})
    const [loading, setLoading] = useState(false)
    const {id} = useParams()

    useEffect(()=> {
        setLoading(true)
        fetch(`http://localhost:5000/contact-post/${id}`)
        .then(
            async (res) => {
                let data = await res.json()
                setPosts(data)
                setLoading(false)
            })
            .catch((error) => {
                console.log(`error`, error);
                setLoading(false)
            })
    }, [])
    return(
        <article className="p-4">
            <BackButton />
            <h1 className="text-3xl my-4">Show Contact Posts</h1>
            {loading ?(
                <Spinner />
            ):(
                <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
                    <div className="my-4 flex">
                    <p className="text-xl mr-4 text-gray-500"><span>📧</span> Email</p>
                    <span>{posts.email}</span>
                </div>
                <div className="my-4 flex">
                    <p className="text-xl mr-4 text-gray-500"><span>⏳</span> Create Time</p>
                    <span>{new Date(posts.createdAt).toString()}</span>
                </div>
                <div className="my-4 flex">
                    <p className="text-xl mr-4 text-gray-500"><span>⌚</span> Last Update Time</p>
                    <span>{new Date(posts.updatedAt).toString()}</span>
                </div>
                <div className="my-4 flex">
                    <p className="text-xl mr-4 text-gray-500"><span>📰</span> Post</p>
                    <span>{posts.message}</span>
                </div>
                
                </div>
            )

            }
        </article>
    )
}
export default ShowPosts