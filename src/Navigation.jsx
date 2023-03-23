import React, {Fragment} from 'react'
import {Disclosure, Menu, Transition} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import {NavLink} from "react-router-dom";
import logo from "./assets/pet__training.png";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Navigation() {


    return (<Disclosure as="nav" className="relative isolate bg-white shadow">
        {({open}) => (<>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <svg
                    className="absolute inset-0 -z-10 h-full w-full stroke-blue-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                    aria-hidden="true"
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
                    <rect width="100%" height="100%" strokeWidth={0}
                          fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"/>
                </svg>
                <div className="flex h-16 justify-between">
                    <div className="flex">
                        <div className="flex flex-shrink-0 items-center">
                            <NavLink to="/home">
                                <img
                                    className="block h-8 w-auto lg:hidden"
                                    src={logo}
                                    alt="Pet Training"
                                /></NavLink>
                            <span className="sr-only">Paw'Somes</span>
                            <NavLink to="/home">
                                <img
                                    className="hidden h-8 w-auto lg:block"
                                    src={logo}
                                    alt="Pet Training"
                                /></NavLink>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items
                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                    <Disclosure.Button
                                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (<XMarkIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />) : (<Bars3Icon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />)}
                                    </Disclosure.Button>
                                    <NavLink to="/paws"
                                             className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
                                    >
                                        Paws
                                    </NavLink>
                                    <NavLink to="/activities"
                                             className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                    >
                                        >Activities
                                    </NavLink>

                                    <NavLink to="/calendar"
                                             className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                    >
                                        Calendar
                                    </NavLink>

                                    <NavLink to="/staff"
                                             className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                    >
                                        Staff
                                    </NavLink>

                                </div>
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <div
                                            className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 -mr-2 items-center sm:hidden">
                                            {/* Mobile menu button */}
                                            <Disclosure.Button
                                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Open main menu</span>
                                                {open ? (<XMarkIcon className="block h-6 w-6"
                                                                    aria-hidden="true"/>) : (
                                                    <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>)}
                                            </Disclosure.Button>
                                        </div>

                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items
                                            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({active}) => (<NavLink
                                                    to="/paws"
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Paws
                                                </NavLink>)}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({active}) => (<NavLink
                                                    to="/activities"
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Activities
                                                </NavLink>)}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({active}) => (<NavLink
                                                    to="/calendar"
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Calendar
                                                </NavLink>)}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </Menu.Items>
                        </Transition>
                    </div>
                </div>
            </div>



        </>)}
    </Disclosure>)
}

