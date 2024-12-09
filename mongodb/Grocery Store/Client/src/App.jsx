import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import CreateBooks from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import './App.css';
// import { useEffect, useState } from 'react';




function App() {
  // useEffect( ()=>{
  // async function serverData(){

  //   let res = await fetch('http://localhost:3000/books')
  //   let data = await res.json()
  //   console.log(data);
  // }
  // serverData()
  // }, []);


  return (
    <Routes>
     <Route path='/' element={<Home />} />      
     <Route path='/books/create' element={<CreateBooks />} />      
     <Route path='/books/details/:id' element={<ShowBook />} />      
     <Route path='/books/edit/:id' element={<EditBook />} />      
     <Route path='/books/delete/:id' element={<DeleteBook />} />      
    </Routes>
  );
};

export default App;