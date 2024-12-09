import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// ! NEWS APP
import NewsApp from './NewsApp.jsx'
//! ALGORITHM PRACTICE
import HashMap from './project notes/ALGORITHM-PRACTICE/HashMap.jsx'
//* Admin-Employee(section-CRUD-->login)
// import AdminApp from './AdminApp.jsx'
//* LOCAL-STORAGE PRACTICE
import App from './project notes/local-storage example/App.jsx'
//! ALGORITHM PRACTICE
import ShortestWord from './project notes/ALGORITHM-PRACTICE/ShortestWord.jsx'
import Algorithms from './project notes/ALGORITHM-PRACTICE/UniqueInOrder'
import ExamQuestions from './project notes/ALGORITHM-PRACTICE/ExamQuestions'
// import SubscribeApp from './admin/subscribe/SubscribeApp.jsx'
//! ADMIN APP
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* //! News App */}
    <NewsApp/>
    {/* <HashMap/> */}
    {/* //! ADMIN APP-uncomment to see */}
    {/* <AdminApp/> */}
    {/* <SubscribeApp/> */}
    {/* <App /> */}
    {/* <ShortestWord/> */}
    {/* <Algorithms/> */}
    {/* <ExamQuestions/> */}
  </React.StrictMode>,
)

