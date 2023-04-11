import React from 'react'
import {Disclosure, Menu} from '@headlessui/react'
import {Bars3CenterLeftIcon, XMarkIcon} from '@heroicons/react/24/outline'
import {NavLink} from "react-router-dom";
import logo from "./assets/pet__training.png";

const navigation = [{name: 'Home', href: '/home', current: false}, {
    name: 'Paws', href: '/paws', current: false
}, {name: 'Activities', href: '/activities', current: false}, {
    name: 'Staff', href: '/staff', current: false
}, {name: 'Connect', href: '/getintouch', current: false}]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navigation() {

    return (<div className="relative flex min-h-full flex-col">

            <div className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-100">


                {/* Navbar */}

                <Disclosure as="nav" className="flex-shrink-0 ">
                    {({open}) => (<>
                        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                            <div className="relative flex h-16 items-center justify-around">

                                {/* Logo section */}

                                <div className="flex items-center px-2 lg:px-0">
                                    <div className="flex-shrink-0">
                                        <NavLink to="/home">
                                            <img className="flex h-20 w-auto lg:hidden"
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
                                    className="inline-flex items-center justify-center rounded-md p-2 text-white
                                       focus:outline-none focus:ring-2
                                        focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (<XMarkIcon className="block h-6 w-6" aria-hidden="true"/>) : (
                                        <Bars3CenterLeftIcon className="block h-6 w-6" aria-hidden="true"/>)}
                                </Disclosure.Button>
                            </div>

                            {/* lg-screen navigation bar */}

                            <div className="hidden lg:block lg:w-80">
                                <div className="flex items-center space-x-8 justify-end">
                                    <div className="flex">
                                        {navigation.map((item) => (<NavLink to={item.href}
                                                                            key={item.name}
                                                                            className="rounded-md px-3 py-2 text-md font-medium text-white"
                                                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </NavLink>))}
                                    </div>

                                    {/* dropdown list */}

                                    <Menu as="div" className="relative ml-4 flex-shrink-0">
                                        <div>
                                            <Menu.Button
                                                className="flex rounded-full bg-blue-400 text-sm text-white
                                                    focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
                                                    focus:ring-offset-blue-100">
                                                <span className="sr-only">Open Mobile menu</span>
                                            </Menu.Button>
                                        </div>
                                        <Menu.Items
                                            className="absolute mt-2 w-48 origin-top-right rounded-md bg-white py-1">
                                            {navigation.map((item) => (<Menu.Item key={item.name}>
                                                {({active}) => (<NavLink to={item.name}
                                                                         href={item.href}
                                                                         className={classNames(active ? 'bg-base text-white' : 'text-white', 'block rounded-md px-3 py-2 text-base font-medium')}
                                                >

                                                </NavLink>)}
                                            </Menu.Item>))}
                                        </Menu.Items>
                                    </Menu>
                                </div>
                            </div>
                        </div>


                        <Disclosure.Panel className="lg:hidden">
                            <div className="space-y-1 px-2 pt-2 pb-3">
                                {navigation.map((item) => (<Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(item.current ? 'bg-blue-50 text-white' : 'text-white', 'block rounded-md px-3 py-2 text-base font-medium')}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>))}
                            </div>
                        </Disclosure.Panel>
                    </>)}
                </Disclosure>
                {/* main wrapper */}

                <div className="mx-auto w-full max-w-7xl flex-grow lg:flex xl:px-8">
                </div>
            </div>

        </div>


    )
}

