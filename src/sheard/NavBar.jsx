import { Link, NavLink } from 'react-router';
import logo from '../../src/assets/logo.png'
import { useLocation } from 'react-router';
import { IoSearchOutline } from "react-icons/io5";



const NavBar = () => {

    const { pathname } = useLocation()
    const navLinks = <>
        <NavLink to="/" className='uppercase px-5'>Become a seller</NavLink>
        <NavLink to="/login" className='uppercase px-5'>Login</NavLink>
        <NavLink to="/signup" className="uppercase px-5 btn primary-btn"><button className='text-white outline-0 border-0 hover:cursor-pointer'>Registration</button></NavLink>
    </>

    return (
        <div className={`${pathname == '/' ? 'bg-[url(/bg-2.png)]' : 'bg-bg-color z-20 py-3'} bg-no-repeat bg-cover relative`}>
            <img src="../../src/assets/Ellipse 5.png" className='absolute top-0 z-20 left-0' alt="" />
            <div className='lg: max-w-[1400px] mx-auto px-5 py-5 lg:px-0'>
                <div className={`${ pathname == '/' ? 'border-b-1': 'border-0'} navbar  text-white shadow-sm  border-[#cccccc20] pb-8`}>
                    <div className="navbar-start">

                        <Link className=" hover: indent-0.5  text-xl z-50" to={"/"}><img src={logo} alt="" /></Link>
                        <button className='category-btn hidden lg:block ml-5'>Categories</button>
                    </div>
                    <div className="navbar-center w-1/4  bg-[#1f2b19] hidden p-2 rounded  lg:flex">

                        <select defaultValue="Pick an AI Model" className="select select-error w-1/2 p-2 bg-[#364032] focus:outline-0 text-white border-none ">
                            <option className='w-20'>Freelancer</option>
                            <option>GPT-4</option>
                            <option>Claude</option>
                            <option>Llama</option>
                        </select>
                    </div>
                    <div className="navbar-end">

                        <ul className="menu menu-horizontal px-1 hidden lg:block bg-transparent items-center ">
                            {navLinks}
                        </ul>

                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu gap-3 menu-sm dropdown-content bg-[#071400] flex items-center rounded-box z-1 right-0 mt-3 w-52 p-2 shadow">
                                {navLinks}
                                <button className='category-btn block lg:hidden'>Categories</button>
                                <select defaultValue="Pick an AI Model" className="select select-error w-1/2 p-2 bg-[#364032] focus:outline-0 text-white border-none ">
                                    <option disabled={true} className='w-20'>Freelancer</option>
                                    <option>GPT-4</option>
                                    <option>Claude</option>
                                    <option>Llama</option>
                                </select>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className={`${pathname == '/' ? "block" : 'hidden'} py-10 flex lg:flex-row flex-col items-center gap-5 relative`}>
                    <img src="../../src/assets/Star 2.png" className='absolute right-60 bottom-5  ' alt="" />
                    <div className='rounded-md p-[2px] lg:max-w-[566px] bg-gradient-to-r from-[#D86F13] from-1% w-full via-[#05AF2B] via-5% to-[#25301f] to-30%'>
                        <div className="flex items-start  bg-[#1c2b1f] rounded-md px-2 py-1 ">
                            {/* Input */}
                            <input
                                type="text"
                                placeholder="Search your needs"
                                className="bg-transparent py-3 text-white placeholder-gray-400 focus:outline-none flex-1"
                            />

                            {/* Dropdown */}
                            <select defaultValue={"Web Developer"} className="bg-transparent p-2 hidden lg:block text-white font-semibold outline-none px-2 appearance-none cursor-pointer">
                                <option className="text-black ">Web Developer</option>
                                <option className="text-black ">Graphic Designer</option>
                                <option className="text-black ">Content Writer</option>
                            </select>

                            {/* Search Button */}
                            <button className="ml-2 bg-green-600 hover:bg-green-500 p-[15px] hover: cursor-pointer rounded-full text-white transition">
                                <IoSearchOutline />
                            </button>
                        </div>
                    </div>
                    <div className='w-full flex justify-center lg:justify-start'>
                        <button className='primary-btn  text-white px-5 h-12'>Advanced search</button>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default NavBar;