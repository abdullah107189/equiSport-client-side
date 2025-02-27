import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import googleLogo from '../../../assets/google.png'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import loginPhoto from '../../../assets/login.svg'
import './login.css'
const Login = () => {
    const [open, setOpen] = useState(true)
    const [loading, setLoading] = useState(false)
    const [gloading, setGloading] = useState(false)
    const { createdUserLoginWithPassAndWith, createUserWithGoogle, setUser } = useContext(AuthContext)
    const navigate = useNavigate()
    let location = useLocation();
    const from = location.state?.pathname || "/";

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (password.length <= 5) {
            return Swal.fire({
                title: "Check password",
                text: "at least 6 characters",
                icon: "warning"
            });
        }
        setLoading(true)
        createdUserLoginWithPassAndWith(email, password)
            .then(res => {
                if (res.user) {
                    Swal.fire({
                        title: "Login Success!",
                        text: "Well Come our site!",
                        icon: "success"
                    });
                    navigate(from)
                    setLoading(false)
                }
            })
            .catch(err => {
                Swal.fire({
                    text: err.message,
                    icon: "error"
                })
                setLoading(false)
            })
    };
    const handleCreateUserWithGoogle = () => {
        setGloading(true)
        createUserWithGoogle()
            .then((res) => {
                if (res.user) {
                    const photo = res?.user?.photoURL;
                    const name = res?.user?.displayName
                    Swal.fire({
                        title: "Login Success with Google",
                        text: "well come our site!",
                        icon: "success"
                    });
                    navigate(from)
                    setGloading(false)
                    setUser(prev => { return { ...prev, photo, name } })
                }
            })
            .catch(err => {
                Swal.fire({
                    text: err.message,
                    icon: 'warning'
                })
                setGloading(false)
            })
    }

    return (
        <div className="loginBg">
            <div className="bg-black/50 absolute inset-0 -bottom-80"></div>
            <div className=" mxw flex justify-between relative items-center md:py-10 py-5 h-screen  p-5 ">
                <div className="md:w-1/2 md:flex hidden z-10">
                    <img className="md:w-2/3 mx-auto" src={loginPhoto} alt="" />
                </div>
                <div className="md:w-1/2 w-full z-10 ">
                    <div className="w-full xl:w-2/3 md:w-4/5 md:mr-auto md:p-8 p-4 rounded-lg shadow-xl border border-gray-300 bg-white/10 backdrop-blur-md text-white ">
                        <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4 ">
                                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-2 text-black dark:text-white block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="password" className="block text-sm font-medium">Password</label>
                                <div className="relative w-full">
                                    <input name="password"
                                        id="password"
                                        type={open ? 'password' : 'text'}
                                        placeholder="password"
                                        className="mt-2 text-black dark:text-white block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                        required />
                                    <span className="absolute top-2 right-1 cursor-pointer p-2" onClick={() => setOpen(!open)}>{open ? <FaEye className="w-10" /> : <FaEyeSlash className="w-10" />}</span>
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-indigo-500 text-white py-2 rounded-md focus:outline-none hover:bg-indigo-600 transition duration-200">{loading ? <span className="loading loading-dots loading-lg"></span> : 'Login'}</button>
                        </form>
                        <div className="text-sm mt-3">Are you new this side <Link to={'/reg'}><button className="btn-link text-[#00d7c0]">Register</button></Link></div>
                        <div className="mt-4 text-center">
                            <div onClick={handleCreateUserWithGoogle} className="flex items-center gap-3 justify-center w-full bg-accent hover:bg-accent/80 text-white py-2 rounded-md focus:outline-none transition duration-200">
                                {gloading ?
                                    <span className="loading loading-dots loading-lg"></span>
                                    :
                                    <div className="flex gap-3 items-center">
                                        Login with google
                                        <img className="w-7 h-7 object-contain" src={googleLogo} alt="" />
                                    </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
