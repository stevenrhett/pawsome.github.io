import React from 'react'
import {Disclosure, Menu} from '@headlessui/react'
import {Bars3CenterLeftIcon, XMarkIcon} from '@heroicons/react/24/outline'
import {NavLink} from "react-router-dom";
import logo from "./assets/pet__training.png";

const navigation = [{name: 'Home', href: '/home', current: false}, {
    name: 'Paws', href: '/paws', current: false
}, {name: 'Activities', href: '/activities', current: false}, {
    name: 'Staff', href: '#', current: false
}, {name: 'Connect', href: '/getintouch', current: false}]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navigation() {

    return (
            <div className="relative flex min-h-full flex-col">

                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-50">


                {/* Navbar */}

                <Disclosure as="nav" className="flex-shrink-0 ">
                    {({open}) => (<>
                        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                            <div className="relative flex h-16 items-center justify-between">

                                {/* Logo section */}

                                <div className="flex items-center px-2 lg:px-0 xl:w-64">
                                    <div className="flex-shrink-0">
                                        <NavLink to="/home">
                                            <img className="block h-20 w-auto lg:hidden"
                                                 src={logo}
                                                 alt="Pet Training"
                                            /></NavLink>
                                    </div>
                                </div>
                            </div>
                                {/* Middle section */}

                                <div className="flex flex-1 justify-center lg:justify-end">
                                    <div className="w-full px-2 lg:px-6">

                                    </div>
                                </div>
                                <div
                                    className="flex lg:hidden rounded-full text-lg -mr-2 items-center">

                                    {/* Mobile menu button */}

                                    <Disclosure.Button
                                        className="inline-flex items-center justify-center rounded-md p-2 text-blue-400
                                        hover:bg-blue-100 hover:text-blue-500 focus:outline-none focus:ring-2
                                        focus:ring-inset focus:ring-blue-300">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (<XMarkIcon className="block h-6 w-6" aria-hidden="true"/>) : (
                                            <Bars3CenterLeftIcon className="block h-6 w-6" aria-hidden="true"/>)}
                                    </Disclosure.Button>
                                </div>

                                {/* lg-screen navigation bar */}

                                <div className="hidden lg:block lg:w-80">
                                    <div className="flex items-center space-x-8 justify-end">
                                        <div className="flex">
                                            {navigation.map((item) =>
                                                (<NavLink to={item.href}
                                                          key={item.name}
                                                          className="rounded-md px-3 py-2 text-md font-medium text-blue-600 hover:text-blue-500"
                                                          aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </NavLink>))}
                                        </div>

                                        {/* dropdown list */}

                                        <Menu as="div" className="relative ml-4 flex-shrink-0">
                                            <div>
                                                <Menu.Button
                                                    className="flex rounded-full bg-blue-500 text-sm text-white
                                                    focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
                                                    focus:ring-offset-blue-500">
                                                    <span className="sr-only">Open Mobile menu</span>
                                                </Menu.Button>
                                            </div>
                                            {/*<Menu.Items*/}
                                            {/*    className="absolute mt-2 w-48 origin-top-right rounded-md bg-white py-1">*/}
                                            {/*    {navigation.map((item) => (<Menu.Item key={item.name}>*/}
                                            {/*        {({active}) => (<NavLink to={item.name}*/}
                                            {/*                                 href={item.href}*/}
                                            {/*                                 className={classNames(active ? 'bg-blue-100 text-white' : 'text-blue-600 hover:bg-blue-500 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium')}*/}
                                            {/*        >*/}

                                            {/*        </NavLink>)}*/}
                                            {/*    </Menu.Item>))}*/}
                                            {/*</Menu.Items>*/}
                                        </Menu>
                                    </div>
                                </div>
                            </div>


                        <Disclosure.Panel className="lg:hidden">
                            <div className="space-y-1 px-2 pt-2 pb-3">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(item.current ? 'bg-blue-100 text-white' : 'text-blue-600 hover:bg-blue-500 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium')}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>))}
                            </div>
                            <div className=" border-blue-200 pt-4 pb-3 space-y-1 px-2">
                                <div className="">
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </>)}
                </Disclosure>
                {/* main wrapper */}

                <div className="mx-auto w-full max-w-7xl flex-grow lg:flex xl:px-8">
                    {/*<svg*/}
                    {/*    className="absolute inset-0 -z-10 h-full w-full stroke-blue-200 [mask-image:radial-gradient(100%_100%_at_top_right,white, decoration-transparent)]"*/}
                    {/*    aria-hidden="true"*/}
                    {/*>*/}
                    {/*    <defs>*/}
                    {/*        <pattern*/}
                    {/*            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"*/}
                    {/*            width={200}*/}
                    {/*            height={200}*/}
                    {/*            x="50%"*/}
                    {/*            y={-1}*/}
                    {/*            patternUnits="userSpaceOnUse"*/}
                    {/*        >*/}
                    {/*            <path d="M100 200V.5M.5 .5H200" fill="none"/>*/}
                    {/*        </pattern>*/}
                    {/*    </defs>*/}
                    {/*    <svg x="50%" y={-1} className="overflow-visible fill-blue-50">*/}
                    {/*        <path*/}
                    {/*            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"*/}
                    {/*            strokeWidth={0}*/}
                    {/*        />*/}
                    {/*    </svg>*/}
                    {/*    <rect width="100%" height="100%" strokeWidth={0}*/}
                    {/*          fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"/>*/}
                    {/*</svg>*/}
                    {/* Footer */}
                </div>
            </div>

            </div>


    )
}

