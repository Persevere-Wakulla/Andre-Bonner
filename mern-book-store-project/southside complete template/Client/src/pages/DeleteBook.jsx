import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
// import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteBook = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const handleDeleteBook = () => {
        setLoading(true);
        fetch(`http://localhost:5555/books/${id}`, {
            method: 'DELETE'
        })
            .then(
                () => {
                    setLoading(false);
                    navigate('/')
                })
            .catch((error) => {
                setLoading(false);
                alert('An error happened. Please happened. Please Check Console');
                console.log(error)
            })

    }

    return (
        <div className="p-4 text-center test-sm">
            <BackButton />
            <div className="my-10">
                <h1 className="text-3xl my-5">Delete Book</h1>
                {loading ? <Spinner /> : ''}
                <div className="flex flex-col border-2 border-sky-400 rounded-xl p-4 mx-auto ">
                    <h3>ARE YOU SURE YOU WANT TO DELETE THIS BOOK</h3>

                    <button
                        className="p-4 bg-red-600 text-white m-1 w-full"
                        onClick={handleDeleteBook}
                    >⚔️ YES, DELETE IT ⚔️</button>

                </div>

            </div>
        </div>
    )
}

export default DeleteBook