import { Link, NavLink } from "react-router-dom";
import userLogo from '../../assets/profile.png'
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
const Navbar = () => {
    const { user ,logOutUser} = useContext(AuthContext)
    const li = <>
        <NavLink to="/" className={({ isActive }) => isActive ? "btn-accent btn" : "btn"}>Home</NavLink>
        <NavLink to="/allEquipment" className={({ isActive }) => isActive ? "btn-accent btn" : "btn"}>All Sports Equipment</NavLink>
        <NavLink to="/addEquipment" className={({ isActive }) => isActive ? "btn-accent btn" : "btn"}>Add Equipment</NavLink>
        <NavLink to="/myEquipment" className={({ isActive }) => isActive ? "btn-accent btn" : "btn"}>My Equipment List</NavLink>
    </>
    const handleLogOut = () =>{
        logOutUser()
        .then(()=>{
            Swal.fire({
                title:"Logout Seccess",
                icon:'success'
            })
        })
    }
    return (
        <div className="navbar bg-base-100 py-2 px-0 ">
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
                        {li}
                    </ul>
                </div>
                <p className="text-3xl font-bold italic"><span className="text-accent">E</span>qui<span className="text-accent">S</span>ports</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-3">
                    {li}
                </ul>
            </div>
            <div className="navbar-end  gap-3">

                <img
                    className="rounded-full w-12 h-12 object-cover bg-white"
                    alt={user ? user?.displayName : 'user'}
                    title={user?.displayName}
                    src={user ? user?.photoURL : userLogo} />
                {
                    user ?
                        <button onClick={handleLogOut} className="btn">Log Out</button>
                        :
                        <div className="flex gap-3">
                            <NavLink to="/login" className={({ isActive }) => isActive ? "btn-accent btn" : "btn"}>Login</NavLink>
                            <NavLink to="/reg" className={({ isActive }) => isActive ? "btn-accent btn" : "btn"}>Register</NavLink>
                        </div>
                }
            </div>
        </div >
    );
};

export default Navbar;