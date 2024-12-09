import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { BlogDataContext, UserContext } from './RootLayout';
// import Blog from '../Pages/Blog/Blogs';
// import GuestBlogs from '../Pages/Blog/g-blogs/GuestBlogs';
export default function BlogLayout() {
    const subscriber = useContext(UserContext);
    const subscriberBlogData =useContext(BlogDataContext)
    console.log(subscriber)
    console.log(subscriberBlogData);
    
    return (
        <main className='blogLayout w-screen' id='blog-top'>
            
            
            <h2 className='bloglayouttitle text-4xl p-5 text-center font-medium'>Top News</h2>
            
            <hr />
            <Outlet />

        </main>

    )
} 