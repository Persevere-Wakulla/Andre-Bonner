import { useState } from "react"
import Spinner from "../components/Spinner"
import { useNavigate } from 'react-router-dom'
import BackButton from "../components/BackButton"

const CreatePosts = () => {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const navigate = useNavigate();
    const [loading, setLoading] = useState("")
    return(
        <></>
    )
}
export default CreatePosts