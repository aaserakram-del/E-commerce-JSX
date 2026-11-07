import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";

const Header = ({ cart }) => {

    const [openMenu, setOpenMenu] = useState(false);


    const HoverLink = "cursor-pointer duration-200 hover:pl-3";

    const BtnSign = "bg-[#111111] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#C89B3C] cursor-pointer hover:text-black transition duration-300";


    return (

        <header className="flex items-center justify-between py-6 px-6 mb-11.5 lg:px-20 border-b-2 border-[#eeeeeb]">


            {/* Logo */}

            <Link to="/">
                <h1 className="font-[fangsong] text-[32px] font-bold tracking-[5px] cursor-pointer">
                    VYRO
                </h1>
            </Link>



            {/* Links */}

            <nav className="hidden lg:flex gap-8 font-[Poppins]">

                <Link to="/shop" className="flex items-center">
                    Shop
                </Link>

                <Link to="/shop">
                    On Sale
                </Link>

                <Link to="/shop">
                    New Arrivals
                </Link>

                <Link to="/shop">
                    Brands
                </Link>

            </nav>





            {/* Buttons */}

            <div className="flex items-center gap-5">


                {/* Cart */}

                <div className="relative">

                    <Link to="/cart">

                        <CgShoppingCart className="text-2xl cursor-pointer" />

                    </Link>


                    {
                        cart.length > 0 && (

                            <span className="absolute -top-2 -right-2 bg-black text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">

                                {cart.length}

                            </span>

                        )
                    }

                </div>





                <button className={BtnSign}>
                    Sign Up
                </button>






                {/* Burger Menu */}

                <div className="relative lg:hidden">


                    <FiMenu
                        className="w-7 h-7 cursor-pointer"
                        onClick={() => setOpenMenu(!openMenu)}
                    />



                    {
                        openMenu && (

                            <div className="absolute right-0 top-10 w-52 bg-white shadow-xl rounded-xl p-5 z-50">


                                <div className="flex flex-col gap-5 font-[Poppins]">


                                    <Link 
                                        to="/shop" 
                                        className={HoverLink}
                                        onClick={() => setOpenMenu(false)}
                                    >
                                        Shop
                                    </Link>


                                    <Link 
                                        to="/shop" 
                                        className={HoverLink}
                                        onClick={() => setOpenMenu(false)}
                                    >
                                        On Sale
                                    </Link>


                                    <Link 
                                        to="/shop" 
                                        className={HoverLink}
                                        onClick={() => setOpenMenu(false)}
                                    >
                                        New Arrivals
                                    </Link>


                                    <Link 
                                        to="/shop" 
                                        className={HoverLink}
                                        onClick={() => setOpenMenu(false)}
                                    >
                                        Brands
                                    </Link>


                                </div>


                            </div>

                        )
                    }



                </div>



            </div>



        </header>

    );

};


export default Header;