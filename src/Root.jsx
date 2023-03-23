import {Outlet} from 'react-router-dom'
import './index.css';
import Navigation from "./Navigation.jsx";
import React from "react";

function Root() {
    return (<div>
        <Navigation/>
        <Outlet/>
    </div>);
}


export default Root;
