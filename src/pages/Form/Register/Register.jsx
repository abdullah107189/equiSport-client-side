import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
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
                        })
                        .catch(error => Swal.fire({
                            text: error.message,
                            icon: "warning"
                        }))
                }
            })
            .catch(error =>
                Swal.fire({
                    text: error.message,
                    icon: "warning"
                })
            )
    };

    return (
        <div className="flex justify-center items-center md:py-10 py-5 ">
            <div className="w-full max-w-md p-8  rounded-lg shadow-xl border border-gray-300">
                <h2 className="text-3xl font-semibold text-center mb-6 ">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium ">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="photoUrl" className="block text-sm font-medium ">Photo URL</label>
                        <input
                            type="text"
                            name="photoUrl"
                            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium ">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium ">Password</label>
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
                        Register
                    </button>
                </form>
                <div className="text-sm">Have an account <Link to={'/login'}><button className="btn-link"> Login</button></Link></div>

                <div className="mt-4 text-center">
                    <button className="w-full bg-accent hover:bg-accent/80 text-white py-2 rounded-md focus:outline-none transition duration-200">
                        Sign up with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
