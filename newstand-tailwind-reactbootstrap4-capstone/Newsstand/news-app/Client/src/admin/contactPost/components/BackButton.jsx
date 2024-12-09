import { Link} from 'react-router-dom'
// import { BsArrowLeft } from 'react-icons/bs'
const BackButton = ({ destination = '/'}) => {
    return (
        <div className="flex">
            <Link to={destination}
            className='bg-sky-500 text-white px-10 py-5 rounded-lg w-fit'><p className=''>👈</p></Link>
        </div>
    )
}

export default BackButton