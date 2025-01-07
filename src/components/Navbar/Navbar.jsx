import { NavLink, useLocation } from "react-router-dom";
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext)
    const li = <>
        <NavLink to="/" className={({ isActive }) => isActive ? "activePBtn" : "PBtn"}>Home</NavLink>
        <NavLink to="/allEquipment" className={({ isActive }) => isActive ? "activePBtn" : "PBtn"}>All Sports Equipment</NavLink>

        {user && <NavLink to="/addEquipment" className={({ isActive }) => isActive ? "activePBtn" : "PBtn"}>Add Equipment</NavLink>}
        {user && <NavLink to="/myEquipment" className={({ isActive }) => isActive ? "activePBtn" : "PBtn"}>My Equipment List</NavLink>}

    </>

    const location = useLocation()
    let isWFull = false;
    if (location.pathname === '/login') {
        isWFull = true
    }
    if (location.pathname === '/reg') {
        isWFull = true
    }


    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])
    const handleTogoleMode = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)

    }
    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                Swal.fire({
                    title: "Logout Seccess",
                    icon: 'success'
                })
            })
    }
    return (
        <div className={`${isWFull ? '' : 'mxw'} bg-[#efefef] dark:bg-[#1f2937] px-4 `}>
            <div className={`${isWFull ? 'mxw' : ''} navbar py-2 px-0 `}>
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 space-y-3 p-2 shadow pb-5">
                            {li}
                            <label className="md:hidden pt-10 cursor-pointer place-items-center grid w-full">
                                <input
                                    type="checkbox"
                                    checked={theme === 'dark'}
                                    onClick={handleTogoleMode}
                                    value="synthwave"
                                    className="toggle dark:text-white  theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
                                <svg
                                    className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="5" />
                                    <path
                                        d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                                </svg>
                                <svg
                                    className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                            </label>

                        </ul>
                    </div>
                    <a href="/" className="md:text-3xl text-4xl ml-2 flex font-bold italic"><span className="text-accent">E</span><span className="md:flex hidden">qui</span><span className="text-accent">S</span><span className="md:flex hidden">ports</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 md:gap-3 gap-1">
                        {li}

                    </ul>
                </div>

                <div className="navbar-end  md:gap-3 gap-1">
                    <label className="md:grid cursor-pointer place-items-center hidden">
                        <input
                            type="checkbox"
                            checked={theme === 'dark'}
                            onClick={handleTogoleMode}
                            value="synthwave"
                            className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
                        <svg
                            className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <path
                                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <svg
                            className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label>
                    {
                        user && <img
                            data-tip="React-tooltip"
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content={`User : ${user && user?.displayName}`}
                            className="rounded-full w-9 h-9 object-cover bg-white"
                            alt={user && user?.displayName}
                            // title={user?.displayName}
                            src={user && user?.photoURL} />
                    }

                    <ReactTooltip id="my-tooltip" place="bottom" variant="success" type="light" effect="float" />
                    {
                        user ?
                            <button onClick={handleLogOut} className="actionBtn">Log Out</button>
                            :
                            <div className="flex md:gap-3 gap-1">
                                <NavLink to="/login" className={({ isActive }) => isActive ? "activeActionBtn" : "actionBtn"}>Login</NavLink>
                                <NavLink to="/reg" className={({ isActive }) => isActive ? "activeActionBtn" : "actionBtn"}>Register</NavLink>
                            </div>
                    }

                </div>
            </div >
        </div>
    );
};

export default Navbar;