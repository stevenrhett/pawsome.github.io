import React from 'react'
import logo from "./assets/pet__training.png"
const footerNavigation = {
    solutions: [
        { name: 'Hosting', href: '#' },
        { name: 'Data Services', href: '#' },
        { name: 'Uptime Monitoring', href: '#' },
        { name: 'Enterprise Services', href: '#' },
    ],
    support: [
        { name: 'Pricing', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'Guides', href: '#' },
        { name: 'API Reference', href: '#' },
    ],
    company: [
        { name: 'About', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Jobs', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Partners', href: '#' },
    ],
    legal: [
        { name: 'Claim', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
    ],
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Footer() {
    return (
        <div>
            {/* Footer */}
            <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">


                <footer
                    aria-labelledby="footer-heading"
                    className="relative border-t border-gray-900/10 py-24 sm:mt-56 sm:py-32"
                >
                    {/*<svg*/}
                    {/*    className="absolute inset-0 -z-10 h-full w-full stroke-blue-200 [mask-image:radial-gradient(100%_100%_at_bottom_left, white, transparent)]"*/}
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
                    <h2 id="footer-heading" className="sr-only">
                        Footer
                    </h2>
                    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                        <img
                            className="h-20 w-auto"
                            src={logo}
                            alt="Company name"
                        />
                        <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-sm font-semibold leading-6 text-gray-900">Lorem</h3>
                                    <ul role="list" className="mt-6 space-y-4">
                                        {footerNavigation.solutions.map((item) => (
                                            <li key={item.name}>
                                                <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-10 md:mt-0">
                                    <h3 className="text-sm font-semibold leading-6 text-gray-900">Lorem</h3>
                                    <ul role="list" className="mt-6 space-y-4">
                                        {footerNavigation.support.map((item) => (
                                            <li key={item.name}>
                                                <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="md:grid md:grid-cols-2 md:gap-8">

                                <div>
                                    <h3 className="text-sm font-semibold leading-6 text-gray-900">Lorem</h3>
                                    <ul role="list" className="mt-6 space-y-4">
                                        {footerNavigation.company.map((item) => (
                                            <li key={item.name}>
                                                <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-10 md:mt-0">
                                    <h3 className="text-sm font-semibold leading-6 text-gray-900">Lorem</h3>
                                    <ul role="list" className="mt-6 space-y-4">
                                        {footerNavigation.legal.map((item) => (
                                            <li key={item.name}>
                                                <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};


