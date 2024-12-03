import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import googleLogo from '../../../assets/google.png'

const Login = () => {
    const { createdUserLoginWithPassAndWith, createUserWithGoogle, setUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        createdUserLoginWithPassAndWith(email, password)
            .then(res => {
                if (res.user) {
                    Swal.fire({
                        title: "Login Success!",
                        text: "Well Come our site!",
                        icon: "success"
                    });
                    navigate('/')
                }
            })
            .catch(err => {
                Swal.fire({
                    text: err.message,
                    icon: "error"
                })
            })
    };
    const handleCreateUserWithGoogle = () => {
        createUserWithGoogle()
            .then(res => {
                if (res.user) {
                    const photo = res?.user?.photoURL;
                    const name = res?.user?.displayName
                    setUser(prev => { return { ...prev, photo, name } })
                    Swal.fire({
                        title: "Login Success with Google",
                        text: "well come our site!",
                        icon: "success"
                    });
                }
            })
            .catch(err => {
                Swal.fire({
                    text: err.message,
                    icon: 'warning'
                })
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
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-500 text-white py-2 rounded-md focus:outline-none hover:bg-indigo-600 transition duration-200"
                    >
                        Login
                    </button>
                </form>
                <div className="text-sm">Are you new this side <Link to={'/reg'}><button className="btn-link">Register</button></Link></div>
                <div className="mt-4 text-center">
                    <button onClick={handleCreateUserWithGoogle} className="flex items-center gap-3 justify-center w-full bg-accent hover:bg-accent/80 text-white py-2 rounded-md focus:outline-none transition duration-200">
                        <img className="w-7 h-7 object-contain" src={googleLogo} alt="" />
                        Sign up with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
