import React from 'react'
import UserMenu from './UserMenu'

const Navbar = () => {
  return (
    <> {/* Adjust padding to reduce height */}
          <div className="navbar bg-accent shadow-lg mx-auto flex items-center justify-between">
            <label htmlFor="my-drawer-3" className="btn btn-ghost lg:hidden md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <div className="navbar-start">
              <a className="btn btn-ghost normal-case text-xl">Demo</a>
            </div>
            {/* <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li><a className="cursor-pointer">Home</a></li>
              </ul>
            </div> */}
            <UserMenu/>
          </div>
        </>
  )
}

export default Navbar