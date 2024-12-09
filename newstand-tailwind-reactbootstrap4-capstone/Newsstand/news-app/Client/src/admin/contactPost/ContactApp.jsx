import React from "react";
import { Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import CreatePosts from "./pages/CreatePosts";
import ShowPosts from "./pages/ShowPosts";
import EditPosts from "./pages/EditPosts";
import DeletePosts from "./pages/DeletePosts";


function ContactApp() {
    return(
        <Routes>
            {/* CRUD  */}
           <Route path="/" element={<Home />}/>
           <Route path="/contact-posts/create" element={<CreatePosts />}/> 
           <Route path="/contact-posts/details/:id" element={<ShowPosts />}/>
           <Route path="/contact-posts/edit/:id" element={<EditPosts />}/>
           <Route path="/contact-posts/delete/:id" element={<DeletePosts />}/>
        </Routes>
    )
}
export default ContactApp