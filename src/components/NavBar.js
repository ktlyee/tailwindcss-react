import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = ({ toggle }) => {
    return (
        <nav className='flex justify-between items-center h-16 bg-white text-black shadow-sm font-mono' role='navigation'>
            <Link to='/' className='pl-8'>EGG</Link>
            <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </div>
            <div className="pr-8 md:block hidden">
                <NavLink to='/' exact className='p-4' activeClassName='active'>Home</NavLink>
                <NavLink to='/menu' exact className='p-4' activeClassName='active'>Menu</NavLink>
                <NavLink to='/about' exact className='p-4' activeClassName='active'>About</NavLink>
                <NavLink to='/contact' exact className='p-4' activeClassName='active'>Contact</NavLink>
            </div>
        </nav>
    )
}

export default NavBar
