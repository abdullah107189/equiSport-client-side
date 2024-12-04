import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import googleLogo from '../../../assets/google.png'
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const [open, setOpen] = useState(true)
    const [loading, setLoading] = useState(false)
    const [gloading, setGloading] = useState(false)
    const { createdUserLoginWithPassAndWith, createUserWithGoogle, setUser } = useContext(AuthContext)
    const navigate = useNavigate()
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
                    navigate('/')
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
                    navigate('/')
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
        <div className="flex justify-center items-center md:py-10 py-5">
            <div className="w-full max-w-md p-8 rounded-lg shadow-xl border border-gray-300">
                <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
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
                                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                required />
                            <span className="absolute top-2 right-1 cursor-pointer p-2" onClick={() => setOpen(!open)}>{open ? <FaEye className="w-10" /> : <FaEyeSlash className="w-10" />}</span>
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-indigo-500 text-white py-2 rounded-md focus:outline-none hover:bg-indigo-600 transition duration-200">{loading ? <span className="loading loading-dots loading-lg"></span> : 'Login'}</button>
                </form>
                <div className="text-sm">Are you new this side <Link to={'/reg'}><button className="btn-link">Register</button></Link></div>
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
    );
};

export default Login;
