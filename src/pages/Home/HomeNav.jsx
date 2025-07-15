import { Link, NavLink } from 'react-router';
import logo from '../../../src/assets/logo.png'



const HomeNav = () => {

    const navLinks = <>
    <NavLink to="/seller" className='uppercase px-5'>Become a seller</NavLink>
    <NavLink to="/login" className='uppercase px-5'>Login</NavLink>
    <NavLink to="/registration" className="uppercase px-5">Registration</NavLink>
    </>

    return (
        <div className="bg-[url(/home-bg.png)] bg-no-repeat bg-cover">
            <div className="navbar  text-white shadow-sm lg: max-w-[1400px] mx-auto">
                <div className="navbar-start">
                    
                    <Link className=" hover: indent-0.5  text-xl" to={"/"}><img src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn hidden lg:block">Button</a>
                    <div className="dropdown bg-[#071400]">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#071400] rounded-box z-1 right-0 mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeNav;