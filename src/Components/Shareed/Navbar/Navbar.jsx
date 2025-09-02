import { Link, NavLink } from 'react-router-dom'
import useAuth from '../../../Hooks/useAuth';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const { user, logOut } = useAuth()
    // console.log(user);
    const [theme, setTheme] = useState('light')
    // console.log(theme);

    useEffect(() => {
        const savetheme = localStorage.getItem('theme')
        setTheme(savetheme)
    }, [])

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localtheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localtheme)
    }, [theme])

    // logout user
    const handleLogout = () => {
        logOut()
    }
    const handleToggle = (event) => {
        // console.log(event.target.checked);
        if (event.target.checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }


    const navItems = <>
        <li><NavLink>Home</NavLink></li>
        
        {
            user && <>
                <li><NavLink to='/my-posted-jobs'>My Posted Job</NavLink></li>
                <li><NavLink to='/applied-jobs'>Applied Job</NavLink></li>
                <li><NavLink to='/add-job'>Add A Job</NavLink></li>
                <li><NavLink to='/my-blog'>My Blog</NavLink></li>
            </>
        }

        <li><NavLink to='/all-jobs'>All Jobs</NavLink></li>


    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Tusk Nest</a>
                </div>
                
                {/* other part  */}
                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <button onClick={handleLogout}>Logout</button> : <Link to='/signin' className="btn btn-ghost hover:bg-white hover:outline-none">Login</Link>
                    }
                    <a ></a>
                </div>
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ml-3">
                    <div className="w-10 rounded-full">
                        <img
                            title={user?.displayName}
                            referrerPolicy='no-referer'
                            alt='photo'
                            src={user?.photoURL} />
                    </div>
                </div>
                <input onChange={handleToggle} type="checkbox" value="dark" className="toggle toggle-lg theme-controller ml-4 " />
            </div>
        </div>

    );
};

export default Navbar;