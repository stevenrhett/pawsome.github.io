import React, {useState} from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Home";


function About() {
    return null;
}

const router = createBrowserRouter([
        {
            path: '/', element: <Home/>
        },
        {
            path: '/about', element: <About/>
        }
    ]
);


const App = () => {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <RouterProvider router={router}/>
            <button onClick={() => setCount(count + 1)}>{count}</button>

        </div>)
}


export default App








