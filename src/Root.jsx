import {Outlet} from 'react-router-dom'
import GetInTouch from "./getInTouch";
import './index.css';

function RootLayout() {


    return <>
        <GetInTouch/>
        <Outlet/>
    </>

}

export default RootLayout;
