import { Link } from 'react-router-dom'

const PostsTable = ({ posts }) => {
    return (
        <table className='w-full'>
            {/* table-header */}
            <thead>
                {/* table-row */}
                <tr>
                    {/* table-header-cell */}
                    <th className="border border-slate-600 rounded-md">No</th>
                    <th className="border border-slate-600 rounded-md">Email</th>
                    <th className="border border-slate-600 rounded-md">Operations</th>
                </tr>
            </thead>
            {/* table-body */}
            <tbody>
                {/* table-row */}
            {posts.map((post, index) =>(
                <tr key={post._id} className='h-8 '>
                    {/* table-data-cell */}
                    <td className="border border-slate-700 rounded-md text-center">{index + 1}</td>
                    <td className="border border-slate-700 rounded-md text-center">{post.email}</td>
                    <td className="border border-slate-700 rounded-md text-center">
                            <div className="flex justify-center gap-x-4">
                                {/* //! details */}
                                <Link to={`/contact-posts/details/${post._id}`}><div className="text-2xl text-green-800 p-4 br-180" id='detail-link'>📖</div></Link>

                                {/* //! edit */}
                                <Link to={`/contact-posts/edit/${post._id}`}><div className="text-2xl text-yellow-600 p-4 br-180" id='edit-link'>✍️</div></Link>

                                {/*//! Delete  */}
                                <Link to={`/contact-posts/delete/${post._id}`}><div className="text-2xl text-red-600 p-4 br-180" id='delete-link'>🚮</div></Link>
                            </div>
                        </td>
                </tr>
            ))}

            </tbody>
        </table>
    )
}
export default PostsTable