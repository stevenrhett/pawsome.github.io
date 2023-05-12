import {Link, Outlet, ScrollRestoration, useNavigation} from 'react-router-dom'
import Navigation from "./Navigation.jsx";
import Footer from "./Footer.jsx";
import "./Root.module.css"

export default function Root() {
    const navigation = useNavigation();

    return (<>

        <ScrollRestoration/>
        {navigation.state === "loading" && (<button type="button" className="bg-indigo-500">
            <svg className="mr-3 h-5 w-5 animate-spin" viewBox="0 0 24 24"></svg>
            Processing...
        </button>)}
        <div>
            <svg
                className="absolute -z-10 h-full w-full stroke-blue-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
                height="100%"
                width="100%"
            >
                <defs>
                    <pattern
                        id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                        width={200}
                        height={200}
                        x="50%"
                        y={-1}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M100 200V.5M.5 .5H200" fill="none"/>
                    </pattern>
                </defs>
                <svg x="50%" y={-1} className="overflow-visible fill-blue-50">
                    <path
                        d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                        strokeWidth={0}
                    />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"/>
            </svg>

        </div>

        <Navigation/>
        <div className="ml-6 mt-1 flex justify-start">
            <Link to=".." className="sm:hidden text-indigo-600">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                >
                    <path
                        d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"/>
                    <path
                        d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"/>
                </svg>
            </Link>
        </div>
        <Outlet/>
        <Footer/>
    </>);
}

