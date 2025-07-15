import { Link } from "react-router"; 
import logo from "../../src/assets/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    const d = new Date(); 

    return (
        <div className="bg-bg-color">
            <footer className="max-w-[1400px] lg:px-2 px-5 mx-auto text-white">
                
                {/* Hero Section */}
                <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-5 sm:grid-cols-1 py-10">
                    <div>
                        <h1 className="text-3xl">
                            Reach Your Requirement Goals Right on <br /> Schedule
                        </h1>
                    </div>
                    <div>
                        <p>
                            Sign up, complete your profile, and start browsing projects.
                            Submit proposals and communicate with clients to get hired.
                        </p>
                        <button className="primary-btn py-2 px-6 mt-6">Get Started</button>
                    </div>
                </div>

                {/* Main Footer Grid */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center border-t-1 border-[#cccccc10]">
                    
                    {/* Logo Section */}
                    <div className="py-10">
                        <Link to="/">
                            <img src={logo} alt="logo" className="pr-24" />
                        </Link>
                    </div>

                    {/* About Links */}
                    <div className="py-10 flex justify-center">
                        <div>
                            <h3 className="font-semibold mb-4">About</h3>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Become Seller</a></li>
                                <li><a href="#">Partnerships</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="border-l border-b-1 py-10 px-10 border-r flex justify-center border-[#cccccc10]">
                        <div>
                            <h3 className="font-semibold mb-4">Categories</h3>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li><a href="#">Design & Creative</a></li>
                                <li><a href="#">Development & IT</a></li>
                                <li><a href="#">Music & Audio</a></li>
                                <li><a href="#">Programming & Tech</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Support Section */}
                    <div className="py-10 border-b-1 border-[#cccccc20] flex justify-center">
                        <div>
                            <h3 className="font-semibold mb-4">Support</h3>
                            <ul className="space-y-2 w-full text-gray-300 text-sm">
                                <li><a href="#">Help & Support</a></li>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Terms & Services</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Area */}
                <div className="relative grid lg:grid-cols-2 grid-cols-1 items-center pb-5">
                    {/* Decorative background circle */}
                    <img src="../../src/assets/Ellipse 21.png" className="absolute -bottom-10 w-80 -left-20" alt="circle" />

                    {/* Social Links */}
                    <div className="flex gap-5 py-20">
                        <Link to="https://www.facebook.com" className="bg-primary-color p-2 hover:cursor-pointer z-50 rounded-full">
                            <FaFacebookF />
                        </Link>
                        <Link to="https://www.instagram.com" className="bg-[#4B4B4B] p-2 hover:cursor-pointer z-50 rounded-full">
                            <FaInstagram />
                        </Link>
                        <Link to="https://www.twitter.com" className="bg-[#4B4B4B] p-2 hover:cursor-pointer z-50 rounded-full">
                            <FaXTwitter />
                        </Link>
                    </div>

                    {/* Popular Posts */}
                    <div>
                        <h1 className="mb-5">Our Popular Post</h1>
                        <div className="flex lg:flex-row flex-col gap-5 justify-between">
                            
                            {/* Post 1 */}
                            <div className="flex gap-2">
                                <img src="../../src/assets/Rectangle 50.png" className="max-w-24 h-16" alt="Post" />
                                <div>
                                    <p className="text-[12px]">
                                        {d.getDate()}/{d.getMonth() + 1}/{d.getFullYear()} {/* ✅ Corrected Date */}
                                    </p>
                                    <p className="text-sm font-semibold">
                                        Unveils the Best Canadian<br /> Cities for Biking
                                    </p>
                                </div>
                            </div>

                            {/* Post 2 */}
                            <div className="flex gap-2 lg:justify-center items-center">
                                <img src="../../src/assets/Rectangle 50.png" className="max-w-24 h-16" alt="Post" />
                                <div>
                                    <p className="text-[12px]">November 7, 2024</p>
                                    <p className="text-sm font-semibold">
                                        Unveils the Best Canadian <br /> Cities for Biking
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <p className="text-center py-8 border-t-[1px] border-[#cccccc20]">© QuantumEdge Software INC. 2025. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Footer;
