import { Link} from 'react-router-dom'
const BackButton = ({ destination = '/blogs'}) => {
    return (
        <div className="flex">
            <Link to={destination}
            className='bg-slate-600 text-white px-10 py-3 rounded-lg w-fit '><p className=''>🔙</p></Link>
        </div>
    )
}

export default BackButton