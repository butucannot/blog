'use client';
import { useState } from "react";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const openBurger = () => {
        setIsOpen(!isOpen);
    }


    return (
        <header className="flex items-center justify-between p-4 bg-[#D9D9D9] lg:px-[20%] sm:px-[0%]">
            <div className="text-[36px]">LOGO</div>
            <nav>
                <ul className=" items-center whitespace-nowrap  space-x-4 text-[22px] hidden sm:flex">
                    <li>
                        <a href="/" className="hover:text-gray-400">
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="/blog" className="hover:text-gray-400">
                            BLOG
                        </a>
                    </li>
                    <li>
                        <a href="/about-us" className="hover:text-gray-400">
                            ABOUT US
                        </a>
                    </li>
                </ul>
                <div>
                    <button
                    onClick={openBurger}
                     className="sm:hidden flex items-center px-3 py-2 border rounded text-gray-500 border-gray-500 hover:text-gray-400 hover:border-gray-400">
                        <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>

                    <div
                        className={`${
                            isOpen ? "block" : "hidden"
                        } absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10`}
                    >
                        <ul className="py-2">
                            <li>
                                <a
                                    href="/"
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                >
                                    HOME
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/blog"
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                >
                                    BLOG
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about-us"
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                >
                                    ABOUT US
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}