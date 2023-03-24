import {Outlet} from 'react-router-dom'
import './index.css';
import Navigation from "./Navigation.jsx";
import React from "react";
import Footer from "./Footer.jsx";
import "./Root.module.css"


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Root() {
    return (
        <div>
            <Navigation/>
            <Outlet/>
            <Footer/>
        </div>
    );
}



