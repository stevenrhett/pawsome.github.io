import React from 'react';
import Paws from './Paws.jsx';
import Activities from './Activities.jsx';
import Calendar from './Calendar.jsx';
import GetInTouch from './GetInTouch.jsx';
import Root from './Root.jsx';
import Home from './Home.jsx';
import Staff from './Staff.jsx';
import {createBrowserRouter, RouterProvider} from "react-router-dom";


const router = createBrowserRouter([

    {
        path: "/",
        element: <Root/>,
        children: [
            {index: true, element: <Home/>},
            {path: 'paws', element: <Paws/>},
            {path: 'activities', element: <Activities/>},
            {path: 'calendar', element: <Calendar/>},
            {path: 'connect', element: <GetInTouch/>},
            {path: 'staff', element: <Staff/>},
        ],
    },
]);

const App = () => {
    return (<RouterProvider router={router}/>)
}
export default App;


