import React, { useEffect, useState } from "react";
// import axios from 'axios'
import Spinner from "../components/Spinner";
import { Link } from 'react-router-dom';
// import { AiOutlineEdit } from 'react-icons/ai'
// import { BsInfoCircle } from 'react-icons/bs'
// import { MdOutlineAddBox, MdOutlineDelete } from ' react-icons/md'
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";
const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');
    //todo: video way
    // useEffect(() => {
    //     setLoading(true)
    //     axios
    //         .get('http://localhost:3000/books')
    //         .then(
    //             (response) => {
    //                 setBooks(response.data.data);
    //                 setLoading(false);
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //                 setLoading(false);
    //             })
    // }, []);
    //todo: VI'S way
    // useEffect(() => {
    //     setLoading(true)
    //     fetch('http://localhost:5555/books')
    //         .then(
    //             (req) => req.json())
    //         .then((response) => {
    //             setBooks(response.data)
    //             setLoading(false)
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             setLoading(false);
    //         })

    //todo:goldmouth..way...
    // useEffect(() => {
    //     setLoading(true);
    //     fetch('http://localhost:5555/books')
    //     .then((res) => res.json())
    //     .then((res) => setBooks(res.data))
    //     .then(() => setLoading(false))
    //     .catch((err) => console.log(err));
    // }, []);
    // console.log(books)

    //todo: southsides way...industry way
    //! when dealing with multiple properties...destructure!!
    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:5555/books')
            .then(
                async (res) => {
                    console.log(res);
                    //! when dealing with multiple properties...destructure!!
                    // let data = await res.json() 
                    let { data, count } = await res.json();
                    console.log(data);
                    console.log(count)
                    setBooks(data);
                    setLoading(false);
                    console.log(books)
                })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, []);

    //todo: coons way
    // useEffect(() => {
    //     setLoading(true)
    //     fetch('http://localhost:5555/books')
    //         .then(
    //             async (res) => {
    //                 console.log(res);
    //                 //! when dealing with multiple properties...destructure!!
    //                 // let data = await res.json() 
    //                 let { data, count } = await res.json();
    //                 console.log(data);
    //                 console.log(count)
    //                 setBooks(data);
    //                 setLoading(false);
    //                 console.log(books)
    //             })
    //         .catch((error) => {
    //             console.log(error);
    //             setLoading(false);
    //         })
    // }, []);

    // useEffect(() => {
    //     setLoading(true)
    //     async function serverData() {
    //         let res = await fetch('http://localhost:3000/books')
    //         let data = await res.json()
    //         console.log(data);
    //         setLoading(false);
    //     }
    //     serverData()
    // }, []);

    return (
        <div className="p-4">
            <div className="flex justify-center items-center gap-x-4">
                <button
                    className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
                    onClick={() => setShowType('table')}
                >
                    Table
                </button>
                <button
                    className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
                    onClick={() => setShowType('card')}
                >
                    Card
                </button>
            </div>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl my-8">Book List</h1>
                <Link to='/books/create'>
                    {/* //! <MdOutlineAddBox/> */}
                    {/* //* instead do the following div */}
                    <div className="text-sky-800 text-4xl ml-6 " id='add-link'>➕</div>
                </Link>
            </div>
            {loading ? <Spinner /> : showType === 'table' ? (<BooksTable books={books} />) : (<BooksCard books={books} />)}
        </div>
    )
}
export default Home