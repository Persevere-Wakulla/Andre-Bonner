import React, { useEffect, useState } from "react";
// import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowBook = () => {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5555/books/${id}`)
            .then(
                async (res) => {
                    console.log(res);
                    //! when dealing with multiple properties...destructure!!
                    let data = await res.json() 
                    // let { data, count } = await res.json();
                    console.log(data);
                    setBook(data);
                    setLoading(false);
                    console.log(book)
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
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500"><span className=" bg-white">🪪</span> Id</span>
                        <span>{book._id}</span>
                    </div>
                    <div className="my-4 flex">
                        <p className="text-xl mr-4 text-gray-500"><span className=" bg-white">📔</span> Title</p>
                        <span>{book.title}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Author</span>
                        <span>{book.author}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Publish Year</span>
                        <span>{book.publishYear}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Title</span>
                        <span>{book.title}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Create Time</span>
                        <span>{new Date(book.createdAt).toString()}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
                        <span>{new Date(book.updatedAt).toString()}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ShowBook