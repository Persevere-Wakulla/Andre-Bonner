import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { Link } from 'react-router-dom'
import PostsTable from "../components/Home/PostsTable";
import PostsCard from "../components/Home/PostsCard";

const Home = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [showType, setShowType] = useState('table')

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:5000/contact-post')
        .then(
            async (res) =>{
                console.log(res);
                let {data, count} = await res.json()
                console.log(data);
                setPosts(data)
                setLoading(false)                
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, [])
    return(
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
                <h1 className="text-3xl my-8">Contact-Posts</h1>
                <Link to='/contact-posts/create'>
                    {/* //! <MdOutlineAddBox/> */}
                    {/* //* instead do the following div */}
                    <div className="text-sky-800 text-4xl ml-6 " id='add-link'>➕</div>
                </Link>
            </div>
            {loading ? <Spinner /> : showType === 'table' ? (<PostsTable posts={posts}/>) : (<PostsCard posts={posts} />)}

        </div>
    )
}
export default Home