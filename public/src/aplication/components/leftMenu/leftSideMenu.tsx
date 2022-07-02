import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "./Layout";
import './leftSideMenu.scss'
import Home from '../Home';
import User from './pages/Users'
import List from './pages/List'
    
const Leftmenu : React.FC=()=>{
    return(
        <div >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index  element={<Home />} />
                        <Route path="list" element={<List />} />
                        <Route path="users" element={<User />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
           
        
    )
}
export default Leftmenu