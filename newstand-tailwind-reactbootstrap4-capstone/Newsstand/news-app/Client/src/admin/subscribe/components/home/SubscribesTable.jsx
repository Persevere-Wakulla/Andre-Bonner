import react from "react";
import { Link } from 'react-router-dom';
// import { AiOutlineEdit } from 'react-icons/ai'
// import { BsInfoCircle } from 'react-icons/bs'
// import { MdOutlineAddBox, MdOutlineDelete } from ' react-icons/md'

const SubscribesTable = ({ subscribes }) => {
    return (
        <table className="w-full border-separate border-spacing-2">
            <thead>
                <tr>
                    <th className="border border-slate-600 rounded-md">No</th>
                    <th className="border border-slate-600 rounded-md">Account Number</th>
                    {/* //! hidden in mobile and tablet sizes */}
                    <th className="border border-slate-600 rounded-md max-md:hidden">Username</th>
                    <th className="border border-slate-600 rounded-md">Email</th>
                    <th className="border border-slate-600 rounded-md">Operations</th>
                </tr>
            </thead>
            <tbody>
                {subscribes.map((subscribe, index) => (
                    <tr key={subscribe._id} className="h-8">
                        <td className="border border-slate-700 rounded-md text-center">{index + 1}</td>
                        <td className="border border-slate-700 rounded-md text-center">{subscribe.accountNumber}</td>
                        <td className="border border-slate-700 rounded-md max-md:hidden text-center">{subscribe.userName}</td>
                        <td className="border border-slate-700 rounded-md text-center">{subscribe.email}</td>
                        <td className="border border-slate-700 rounded-md text-center">
                            <div className="flex justify-center gap-x-4">
                                {/* //! details */}
                                <Link to={`/subscribe/details/${subscribe._id}`}><div className="text-2xl text-green-800 p-4 br-180" id='detail-link'>📖</div></Link>

                                {/* //! edit */}
                                <Link to={`/subscribe/edit/${subscribe._id}`}><div className="text-2xl text-yellow-600 p-4 br-180" id='edit-link'>✍️</div></Link>

                                {/*//! Delete  */}
                                <Link to={`/subscribe/delete/${subscribe._id}`}><div className="text-2xl text-red-600 p-4 br-180" id='delete-link'>🚮</div></Link>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default SubscribesTable