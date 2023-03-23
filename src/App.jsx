import '/src/index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from "react";
import Paws from "./Paws.jsx";
import Activities from "./Activities.jsx";
import Calendar from "./Calendar.jsx";
import GetInTouch from "./GetInTouch.jsx";
import Root from "./Root.jsx";
import Home from "./Home.jsx";
import Staff from "./Staff.jsx";


const router = createBrowserRouter([{
    path: "/",
    element: <Root/>,
    children: [
        {exact: true, path: "/home", element: <Home/>},
        {path: "/paws", element: <Paws/>},
        {path: "/Activities", element: <Activities/>},
        {path: "/calendar", element: <Calendar/>},
        {path: "/staff", element: <Staff/>},
        {path: "/getintouch", element: <GetInTouch/>}
    ]
},


]);

const App = () => {
    return (<RouterProvider router={router}/>)
}


export default App;





