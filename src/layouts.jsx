import React from "react";
import {Outlet} from 'react-router-dom';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import Dashboard from './components/dashboard/dashboard.jsx';
import Home from './components/HomePage/home.jsx';

function Layouts(){
    return(
        <>
    <Header/>
    {/* <Home/> */}
    <Outlet/>
    <Footer/>
    </>
    )
}

export default Layouts;