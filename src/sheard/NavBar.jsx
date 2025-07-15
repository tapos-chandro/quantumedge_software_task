import { Link, NavLink } from 'react-router';
import logo from '../../src/assets/logo.png'
import { useLocation } from 'react-router';



const NavBar = () => {

    const {pathname} = useLocation()

    const navLinks = <>
        <NavLink to="/seller" className='uppercase px-5'>Become a seller</NavLink>
        <NavLink to="/login" className='uppercase px-5'>Login</NavLink>
        <NavLink to="/signup" className="uppercase px-5 btn primary-btn"><button className='text-white outline-0 border-0 hover:cursor-pointer'>Registration</button></NavLink>
    </>

console.log(pathname)

    return (
        <div className={`${pathname == '/'? 'bg-[url(/home-bg.png)]': 'bg-bg-color py-3'} bg-no-repeat bg-cover`}>
            <div className='lg: max-w-[1400px] mx-auto'>
                <div className="navbar  text-white shadow-sm ">
                    <div className="navbar-start">

                        <Link className=" hover: indent-0.5  text-xl" to={"/"}><img src={logo} alt="" /></Link>
                        <button className='category-btn hidden lg:block ml-5'>Categories</button>
                    </div>
                    <div className="navbar-center w-1/4  bg-[#1f2b19] hidden p-1 rounded  lg:flex">

                        <select defaultValue="Pick an AI Model" className="select select-error w-1/2 p-2 bg-[#364032] focus:outline-0 text-white border-none ">
                            <option disabled={true} className='w-20'>Freelancer</option>
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
                <div className={`${pathname == '/' ? "block": 'hidden' }`}>
                    <div className={ `border-t-2 border-[#cccccc22] py-20 lg:flex justify-center lg:justify-start  gap-3.5 `}>
                    <div className='w-1/4'>
                        <input type="text" className='h-12 w-full  border-2 rounded-lg' />
                    </div>
                    <button className='primary-btn p-2 text-white px-5'>Advanced Search </button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;