import { FaStar } from "react-icons/fa";
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

let BtnViewALL = "border border-[#111111] text-[#111111] text-[16px] font-[Poppins] font-medium w-55 h-13 rounded-full transition-all duration-300 hover:bg-[#111111] px-20 py-5 hover:text-white hover:scale-105"

let titleCard = "font-[Archivo_Black] font-black leading-tight text-center tracking-[-2px] pb-8 text-4xl lg:text-[48px]"

let delprice = "text-[18px] lg:text-[20px] font-semibold font-[Poppins] text-[#999999]"

let pricestyle = "text-[22px] lg:text-[24px] pr-2.5 font-medium font-[Poppins]"

let styleStars = "text-yellow-400"

let imgStyle = "mb-4 hover:cursor-pointer w-full h-87.5 object-cover rounded-3xl transition duration-300 hover:scale-105"



export default function CardSec() {

    const [products, setProducts] = useState([]);


    useEffect(() => {

        let url = "/public/products.json"

        axios.get(url)

            .then((res) => {

                setProducts(res.data.products);

            })

            .catch((err) => {

                console.log(err)

            })

    }, [])



    return (

        <>


            {/* New Arrivals Section */}

            <div data-aos="fade-up" className="mb-8.75 mt-16 px-4">


                <p className={titleCard}>
                    NEW ARRIVALS
                </p>



                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 lg:px-20">


                    {
                        products.slice(0, 4).map((el) => {


                            return (


                                <Link
                                    to={`/product/${el.id}`}
                                    key={el.id}
                                >


                                    <div className="cursor-pointer">


                                        <img
                                            className={imgStyle}
                                            src={el.image}
                                            alt={el.title}
                                        />



                                        <h2 className="text-[18px] lg:text-[20px] mb-2 font-semibold font-[Poppins]">

                                            {el.title}

                                        </h2>





                                        {/* Stars Rating */}

                                        <div className="mb-2 flex items-center gap-2">


                                            <div className="flex gap-1.5">

                                                <FaStar className={styleStars} />
                                                <FaStar className={styleStars} />
                                                <FaStar className={styleStars} />
                                                <FaStar className={styleStars} />
                                                <FaStar className={styleStars} />

                                            </div>



                                            <div>

                                                <span className="font-[Poppins] font-light">

                                                    {el.rating}

                                                </span>


                                                <span className="font-[Poppins] font-light text-[#707070]">

                                                    /5

                                                </span>


                                            </div>


                                        </div>






                                        {/* Price */}


                                        <span className={pricestyle}>

                                            ${el.price}

                                        </span>




                                        {
                                            el.originalPrice && (


                                                <del className={delprice}>

                                                    ${el.originalPrice}

                                                </del>


                                            )
                                        }



                                    </div>


                                </Link>


                            )


                        })
                    }


                </div>


            </div>







            {/* View All Button */}


            <div className="text-center mt-10">


                <Link
                    to="/shop"
                    className={BtnViewALL}
                >

                    View All

                </Link>


            </div>








            <hr className="my-16 border border-[#e6e6e6] mx-6 lg:m-24.75" />








            {/* Top Selling Section */}


            <div data-aos="fade-up" className="mb-8.75 px-4">


                <p className={titleCard}>

                    TOP SELLING

                </p>





                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 lg:px-20">



                    {
                        products.slice(4, 8).map((el) => {



                            return (



                                <Link
                                    to={`/product/${el.id}`}
                                    key={el.id}
                                >



                                    <div className="cursor-pointer">



                                        <img
                                            className={imgStyle}
                                            src={el.image}
                                            alt={el.title}
                                        />




                                        <h2 className="text-[18px] lg:text-[20px] mb-2 font-semibold font-[Poppins]">

                                            {el.title}

                                        </h2>





                                        {/* Stars */}


                                        <div className="mb-2 flex items-center gap-2">


                                            <div className="flex gap-1.5">


                                                <FaStar className={styleStars} />
                                                <FaStar className={styleStars} />
                                                <FaStar className={styleStars} />
                                                <FaStar className={styleStars} />
                                                <FaStar className={styleStars} />

                                            </div>




                                            <div>


                                                <span className="font-[Poppins] font-light">

                                                    {el.rating}

                                                </span>


                                                <span className="font-[Poppins] font-light text-[#707070]">

                                                    /5

                                                </span>


                                            </div>


                                        </div>






                                        <span className={pricestyle}>

                                            ${el.price}

                                        </span>




                                        {
                                            el.originalPrice && (


                                                <del className={delprice}>

                                                    ${el.originalPrice}

                                                </del>


                                            )
                                        }




                                    </div>



                                </Link>


                            )


                        })
                    }



                </div>



            </div>


            {/* View All Button */}


            <div className="text-center mt-10">


                <Link
                    to="/shop"
                    className={BtnViewALL}
                >

                    View All

                </Link>


            </div>



        </>

    )

}