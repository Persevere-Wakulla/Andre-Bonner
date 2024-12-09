import React from 'react'

const AdminLayout = () => {
  return (
    <main className='admin-layout' id="admin-top">
        
            <div className='p-4'>
                <h2 className='pb-5 font-bold text-2xl'> Information and Analysis</h2>
                <p>Create, Read, Update, and Delete the information as it comes...</p>
            </div>
            <nav className='p-4'>
                <NavLink to="adminSubscriptions" className='font-bold text-xl hover:w-1/2 sm:hover:w-1/2 md:hover:w-1/3'>View Subscriptions</NavLink>
                <br /><br />
                <NavLink to="adminContactPosts" className='font-bold text-xl hover:w-1/2 sm:hover:w-1/2 md:hover:w-1/4'>View Posts</NavLink>
                <NavLink to="adminBlogs" className='font-bold text-xl hover:w-1/2 sm:hover:w-1/2 md:hover:w-1/4'>View Blogs</NavLink>
            </nav>
            <br />
        
      <Outlet />
    </main>
  )
}

export default AdminLayout
