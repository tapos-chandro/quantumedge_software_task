import axios from "axios";
import { useState } from "react";
import { BiHide, BiSolidShow } from "react-icons/bi";
import { FaEnvelope, FaLock, FaFacebookF, FaTimes, FaApple } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import Swal from 'sweetalert2'


const Login = () => {

    const [toggleTwo, setToggleTwo] = useState(false)
    const navigate = useNavigate();
    const [error, setError] = useState('')
    


    const handleLogin = async (e) => {
        e.preventDefault();

        const from = e.target
        const email = from.email.value;
        const password = from.password.value;

        const fromData = { email, password }

        try {
            const res = await axios.post("http://localhost:5000/api/login", fromData);
            console.log(res)

            if (res.data.status == true) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${res.data.message}`,
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')
            }else{
                setError(res.data.message)
                
            }



        } catch (error) {
            console.log(error.message)
        }

    }


    return (
        <div className="relative">
            <img src="../../../src/assets/Ellipse 4.png" className="absolute -top-10" alt="" />
            <div className="py-32 flex items-center justify-center bg-gradient-to-tr from-white to-green-50 p-4">
                <div className="bg-bg-color rounded-2xl z-20 shadow-lg overflow-hidden max-w-5xl w-full flex flex-col md:flex-row ">

                    {/* Left - Form */}
                    <div className="w-full md:w-1/2 p-8 text-white relative text-center">
                        <h2 className="text-2xl font-bold mb-1">Open your account</h2>
                        <p className="text-sm mb-6 text-gray-400">
                            Have an new account?
                            <Link to={"/signup"} className="text-green-400 hover:underline">Sign up</Link>

                        </p>
                        <img src="../../../src/assets/Ellipse 21.png" className="absolute -right-52 -z-10 top-0" alt="" />

                        {/* Form */}
                        <form className="space-y-7" onSubmit={handleLogin}>
                            <div className="relative">
                                <FaEnvelope className="absolute left-3 top-3 text-[#888888]" />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    name="email"
                                    className="w-full pl-10 pr-4 py-2 rounded-full border  border-[#cccccc20] text-white placeholder-[#4B4B4B] focus:outline-none focus:ring-2 focus:ring-green-400"
                                />
                                 <p className="text-red-400 ">{error.includes('Email is incorrect!') === true && error}</p>
                            </div>

                            <div className="relative">
                                <FaLock className="absolute left-3 top-3 text-[#888888]" />
                                {
                                    toggleTwo === true ? <BiSolidShow onClick={() => setToggleTwo(!toggleTwo)} className="absolute right-8 top-3 text-[#888888] hover:cursor-pointer text-xl" /> : <BiHide onClick={() => setToggleTwo(!toggleTwo)} className="absolute right-8 top-3 text-[#888888] hover:cursor-pointer text-xl" />
                                }
                                <input
                                    type={`${toggleTwo === true ? 'text' : "password"}`}
                                    placeholder="Password"
                                    required
                                    name="password"
                                    className="w-full pl-10 pr-4 py-2 rounded-full border border-[#cccccc20] text-white placeholder-[#4B4B4B] focus:outline-none focus:ring-2 focus:ring-green-400"
                                />
                                <p className="text-red-400 ">{error.includes('Password is incorrect!') === true && error}</p>
                            </div>


                            <button
                                type="submit"
                                className="w-full bg-primary-color font-semibold hover:bg-green-600 transition text-white py-2 rounded-full hover:cursor-pointer"
                            >
                                Login
                            </button>
                        </form>
                        {/* Social icons */}
                        <div className="flex justify-center gap-4 mt-6">
                            <button className="bg-[#1f1f1f] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 hover:text-primary-color hover:cursor-pointer">
                                <FaFacebookF />
                            </button>
                            <button className="bg-[#1f1f1f] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 hover:text-primary-color hover:cursor-pointer">
                                <FaApple />
                            </button>
                            <button className="bg-[#1f1f1f] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 hover:text-primary-color hover:cursor-pointer">
                                <FaXTwitter />
                            </button>
                        </div>

                        {/* Terms */}
                        <p className="text-xs text-center text-gray-500 mt-6">
                            By joining, you agree to the
                            <a href="#" className="text-green-400 underline">Terms of Service</a> and
                            <a href="#" className="text-green-400 underline">Privacy Policy</a>.
                        </p>
                    </div>

                    {/* Right - Image */}
                    <div className="hidden md:block w-1/2 relative p-4 ">
                        <img
                            src="../../../src/assets/Subtract.png"
                            alt="Team Work"
                            className="w-full h-full rounded-xl object-cover"
                        />
                        <button className="absolute top-3 right-3 hover:cursor-pointer bg-[#1B1B1B] border border-[#4B4B4B] bg-opacity-70 text-primary-color rounded-full p-2 hover:bg-opacity-100">
                            <FaTimes />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;