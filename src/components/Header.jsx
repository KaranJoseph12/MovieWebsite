import { NavLink } from "react-router-dom";
import {Title} from "./index"
import React from 'react'

const Header = () => {
  return (
    
    <header className="shadow sticky z-50 top-0">
    <nav className=" bg-[#212121] border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap  justify-between items-center mx-auto max-w-screen-xl">
                <Title title={"BM MOVIES"}/>
            <div className="flex items-center lg:order-2">
            <input type="text" placeholder="Search" className="input input-bordered input-info w-full max-w-xs " />
            </div>
            <div
                className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                id="mobile-menu-2"
            >
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <NavLink
                            to="/"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-sky-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-sky-700 lg:p-0`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/movies"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-sky-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-sky-700 lg:p-0`
                            }
                        >
                            Movies
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/watchlist"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-sky-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-sky-700 lg:p-0`
                            }
                        >
                            WatchList
                        </NavLink>
                    </li>
                    
                    
                </ul>
            </div>
        </div>
    </nav>
    </header>
  )
}

export default Header