import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import singUp from '../../../assets/singUp.svg'

const Register = () => {
    const [open, setOpen] = useState(true)
    const [loading, setLoading] = useState(false)
    const { createUserWithPassAndEmail, updateUserProfile, setUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (!/(?=.*[a-z])/.test(password)) {
            return Swal.fire({
                title: "Check password",
                text: "At least one lowercase letter",
                icon: "warning"
            });
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            return Swal.fire({
                title: "Check password",
                text: "At least one uppercase letter",
                icon: "warning"
            });
        }
        if (password.length <= 5) {
            return Swal.fire({
                title: "Check password",
                text: "at least 6 characters",
                icon: "warning"
            });
        }
        setLoading(true)
        createUserWithPassAndEmail(email, password)
            .then(res => {
                if (res.user) {
                    updateUserProfile(name, photoUrl)
                        .then(() => {
                            Swal.fire({
                                title: "Congrats",
                                text: "Create your account",
                                icon: "success"
                            });
                            setUser(prev => { return { ...prev, photoURL: photoUrl, displayName: name } })
                            navigate('/')
                            setLoading(false)
                        })
                        .catch(error => {
                            Swal.fire({
                                text: error.message,
                                icon: "warning"
                            })
                            setLoading(false)
                        })
                }
            })
            .catch(error => {
                Swal.fire({
                    text: error.message,
                    icon: "warning"
                })
                setLoading(false)
            })
    };

    return (
        <div className="">
            <div className="bg-black/50 absolute inset-0 "></div>

            <div className="flex justify-center items-center md:py-10 py-5 loginBg">
                <div className="md:w-1/2 md:flex hidden z-10">
                    <img className="md:w-2/3 mx-auto" src={singUp} alt="" />
                </div>
                <div className="md:w-1/2 w-full z-10">
                    <div className="w-full xl:w-2/3 md:w-4/5 md:mr-auto md:p-8 p-4 rounded-lg shadow-xl border border-gray-300 bg-white/10 text-white backdrop-blur-md">
                        <h2 className="text-3xl font-semibold text-center mb-6 ">Register</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium ">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="mt-2 text-black block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="photoUrl" className="block text-sm font-medium ">Photo URL</label>
                                <input
                                    type="text"
                                    name="photoUrl"
                                    className="mt-2 text-black block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium ">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-2 text-black block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
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
                                        className="mt-2 text-black block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                        required />
                                    <span className="absolute top-2 right-1 cursor-pointer p-2" onClick={() => setOpen(!open)}>{open ? <FaEye className="w-10" /> : <FaEyeSlash className="w-10" />}</span>
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-indigo-500 text-white py-2 rounded-md focus:outline-none hover:bg-indigo-600 transition duration-200">{loading ? <span className="loading loading-dots loading-lg"></span> : 'Register'}</button>
                        </form>
                        <div className="text-sm mt-2">Have an account <Link to={'/login'}><button className="btn-link text-[#00d7c0]"> Login</button></Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
