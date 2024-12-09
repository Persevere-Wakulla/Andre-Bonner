import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateBlogs from "./pages/CreateBlogs";
import ShowBlogs from "./pages/ShowBlogs";
import EditBlogs from "./pages/EditBlogs";
import DeleteBlogs from "./pages/DeleteBlogs";
import Home from "./pages/Home";


function BlogApp() {
    return(
        <Routes>
            {/* CRUD  */}
           <Route path="/" element={<Home />}/>
           <Route path="/blog/create" element={<CreateBlogs />}/> 
           <Route path="/blog/details/:id" element={<ShowBlogs />}/>
           <Route path="/blog/edit/:id" element={<EditBlogs />}/>
           <Route path="/blog/delete/:id" element={<DeleteBlogs />}/>
        </Routes>
    )
}
export default BlogApp