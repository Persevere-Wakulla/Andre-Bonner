import { Link } from 'react-router-dom'
export default function GuestBlogsBackButton({ destination = '/g-blogs'}) {
    return (
        <div className="mt-28 flex">
            <Link to={destination}
                className='bg-slate-600 text-white px-10 py-3 rounded-lg w-fit '><p className=''>🔙</p></Link>
        </div>
    )
}