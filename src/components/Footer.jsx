import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {

    return (

        <footer data-aos="fade-up" className="bg-[#F5F5F5] mt-20 pt-16 pb-8 px-6 lg:px-20">


            <div className="max-w-310 mx-auto">


                {/* Top Footer */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">


                    {/* Logo */}

                    <div className="lg:col-span-2">

                        <h2 className="font-[fangsong] text-[36px] font-bold tracking-[5px] mb-5">
                            VYRO
                        </h2>


                        <p className="text-[#707070] max-w-sm leading-7 font-[Poppins]">
                            Premium clothing designed for modern lifestyles.
                            Discover your own identity with VYRO.
                        </p>


                        {/* Social Icons */}

                        <div className="flex gap-4 mt-6">

                            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#C89B3C] transition duration-300 cursor-pointer">
                                <FaInstagram />
                            </div>


                            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#C89B3C] transition duration-300 cursor-pointer">
                                <FaFacebookF />
                            </div>


                            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#C89B3C] transition duration-300 cursor-pointer">
                                <FaTwitter />
                            </div>


                            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#C89B3C] transition duration-300 cursor-pointer">
                                <FaGithub />
                            </div>


                        </div>


                    </div>



                    {/* Company */}

                    <div>

                        <h3 className="font-semibold text-lg mb-5">
                            COMPANY
                        </h3>

                        <ul className="space-y-4 text-[#707070]">

                            <li className="hover:text-black cursor-pointer">
                                About
                            </li>

                            <li className="hover:text-black cursor-pointer">
                                Features
                            </li>

                            <li className="hover:text-black cursor-pointer">
                                Careers
                            </li>

                            <li className="hover:text-black cursor-pointer">
                                Contact
                            </li>

                        </ul>

                    </div>




                    {/* Help */}

                    <div>

                        <h3 className="font-semibold text-lg mb-5">
                            HELP
                        </h3>


                        <ul className="space-y-4 text-[#707070]">

                            <li className="hover:text-black cursor-pointer">
                                Customer Support
                            </li>

                            <li className="hover:text-black cursor-pointer">
                                Delivery Details
                            </li>

                            <li className="hover:text-black cursor-pointer">
                                Terms & Conditions
                            </li>

                            <li className="hover:text-black cursor-pointer">
                                Privacy Policy
                            </li>

                        </ul>

                    </div>




                    {/* Shop */}

                    <div>

                        <h3 className="font-semibold text-lg mb-5">
                            SHOP
                        </h3>


                        <ul className="space-y-4 text-[#707070]">

                            <li className="hover:text-black cursor-pointer">
                                Men's Clothing
                            </li>

                            <li className="hover:text-black cursor-pointer">
                                Women's Clothing
                            </li>

                            <li className="hover:text-black cursor-pointer">
                                Accessories
                            </li>

                            <li className="hover:text-black cursor-pointer">
                                New Arrivals
                            </li>


                        </ul>


                    </div>



                </div>



                {/* Bottom Footer */}

                <div className="border-t border-[#DDDDDD] mt-12 pt-6 flex flex-col lg:flex-row justify-between items-center gap-5">


                    <p className="text-[#707070] text-sm">
                        © 2026 VYRO. All rights reserved.
                    </p>



                    <div className="flex gap-3">


                        <div className="bg-white border rounded-md px-4 py-2 text-sm font-semibold">
                            VISA
                        </div>


                        <div className="bg-white border rounded-md px-4 py-2 text-sm font-semibold">
                            MasterCard
                        </div>


                        <div className="bg-white border rounded-md px-4 py-2 text-sm font-semibold">
                            PayPal
                        </div>


                    </div>


                </div>



            </div>


        </footer>

    )

}


export default Footer;