import { useEffect, useState } from "react"
import Spinner from "../components/Spinner"
import { useNavigate, useParams } from 'react-router-dom'
import BackButton from "../components/BackButton"

const EditPosts = () => {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState("")
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(()=>{
        setLoading(true)
        fetch(`http://localhost:5000/contact-post/${id}`)
        .then(async (res) => {
            let data = await res.json()
            console.log(data);
           setEmail(data.email)
           setMessage(data.message)
           setLoading(false) 
        }).catch((error) =>{
            setLoading(false);
            alert('An error happened. Please happened. Please Check Console')
            console.error(error);            
        })
    },[])
    const handleEditPost = () => {
        const data = {
            email,
            message
        }
        setLoading(true)
        fetch(`http://localhost:5000/contact-post/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: { 'content-type': 'application/json' }
        }).then(
            () => {
                setLoading(false)
                navigate('/')
            }).catch((error) => {
                setLoading(false)
                alert('An error happened. Please happened. Please Check Console')
                console.error();                
            })
    }
    return(
        <article className="p-4">
            <BackButton/>
            <h1 className="text-3xl my-4">Edit Posts</h1>
            {loading ? <Spinner /> : ""}
            <section className="my-4">
                <label className="text-xl mr-4 text-gray-500">Email</label>
                <input type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 border-gray-500 px-4 py-2 w-full"
                 />
                 <div className="my-4">
                 <label className="text-xl mr-4 text-gray-500">Message</label>
                 <input type="text"
                     value={message}
                     onChange={(e) => setMessage(e.target.value)}
                     className="border-2 border-gray-500 px-4 py-2 w-full"
                 />
             </div>
             <button className="p-2 bg-sky-300 m-8" onClick={handleEditPost}>
                    Save
                </button>
            </section>

        </article>
    )
}
export default EditPosts