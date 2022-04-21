

 import './style.css'
 import React from 'react'
 import {
  Route,
  Routes,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import Login from './components/Login';
import Ticket from './components/Ticket';

 export default function App() {
  

   return (
    
     <div className="App">
       <ToastContainer/>
       <Routes>
    <Route  path="/" element={<Login />} />
    <Route  path="/ticket" element={<Ticket />} />

</Routes>
      
      </div> 
   )
 }
 
