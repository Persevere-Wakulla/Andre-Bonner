import React from "react";
import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom'

//* CSS-TAILWIND
import './App.css';
// Layouts
import RootLayout from "./layout/RootLayout";
import HelpLayout from "./layout/HelpLayout";
import BlogLayout from "./layout/BlogLayout";
//!PAGES
// HOME PAGE
import NewsHome from "./pages/Home";
// ABOUT PAGE
import About from "./pages/About";
// CONTACT PAGE
import Contact from "./pages/help/Contact";
// FAQ PAGE
import Faq from "./pages/help/Faq";
// BLOG PAGES
import Blog from "./pages/blog/Blogs";
import BlogDetails from "./pages/blog/BlogDetails";
// VISITOR BLOG PAGES
import GuestBlogs from "./Pages/blog/g-blogs/GuestBlogs";
import VisitorBlogDetails from "./pages/blog/g-blogs/VisitorBlogDetails";
// BLOG ERROR PAGE
import BlogError from "./pages/blog/BlogError";

//! Subscription-Form Route
import SubscribeForm from "./components/form-components/subscriptionInfo/NewsSubscribeForm";
;

//* Purchase-Succesful Route 
import PurchaseDetails from "./components/form-components/subscriptionInfo/PurchaseDetails";

//? AdminLayout and Pages
import AdminLayout from "./admin/admin-layouts/AdminLayout";
import SubscriptionsHome from "./admin/subscribe/pages/SubscriptionsHome";
import DeleteSubscriptions from "./admin/subscribe/pages/DeleteSubscriptions";
import EditSubscriptions from "./admin/subscribe/pages/EditSubscriptions";
import ShowSubscriptions from "./admin/subscribe/pages/ShowSubsciptions";
import CreateSubscriptions from "./admin/subscribe/pages/CreateSubscriptions";


import NotFound from "./pages/NotFound";





const router = createBrowserRouter(
    createRoutesFromElements(
        // ! RootLayout 
        <Route path='/' element={<RootLayout />} >
            {/* //*Home */}
            <Route index element={<NewsHome />} />
            {/* //*About*/}
            <Route path='about' element={<About />} />
            {/* //*Subscribe */}
            <Route path="subscribe" element={<SubscribeForm />} />
            {/* route for a succesful subsciption submission */}
            <Route path='purchaseSuccessful' element={<PurchaseDetails />} />

            {/* //!HelpLayout */}
            <Route path='help' element={<HelpLayout />}>
                <Route path='faq' element={<Faq />} />
                <Route path='contact' element={<Contact />} />
            </Route>

            {/* //!BlogLayout-user  */}
            <Route path='blogs' element={<BlogLayout />} errorElement={<BlogError />}>
                <Route index element={<Blog />} />
                <Route path=':id' element={<BlogDetails />} />
            </Route>
            {/* //? BlogLayout-guest  */}
            <Route path='g-blogs' component={<BlogLayout />} errorElement={<BlogError />}>
                <Route index element={<GuestBlogs />} />
                <Route path=':id' element={< VisitorBlogDetails />} />
            </Route>
            {/* //! AdminLayout */}
            <Route path='admin' component={<AdminLayout />} >
                <Route index element={<SubscriptionsHome />} />
                <Route path="createSubscription" component={<CreateSubscriptions />}/>
                <Route path="subscribe/show/:id" component={<ShowSubscriptions />} />
                <Route path="subscribe/edit/:id" component={<EditSubscriptions />} />
                <Route path="subscribe/delete/:id" component={<DeleteSubscriptions />} />
            </Route>

            {/* catch-all route-Error 404 page */}
            <Route path='*' element={<NotFound />} />

        </Route>
    )
)


const NewsApp = () => {
    return (

        <RouterProvider router={router} />
    )
}
export default NewsApp