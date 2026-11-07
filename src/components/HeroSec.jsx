import HeroImg from "../assets/Heroimg.png"
import CountUp from "./CountUp"
import { Link } from "react-router-dom";



export default function HerSec() {

    return (
        <section data-aos="fade-right" className="bg-[#FAFAF8] min-h-[calc(100vh-90px)] flex items-center mb-16">

            <div className="max-w-362.5 mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-28 items-center">

                {/* Content */}
                <div className="text-center lg:text-left">

                    <h1 className="font-[Archivo_Black] text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#111111]">
                        WEAR YOUR
                        <br />
                        OWN IDENTITY
                    </h1>

                    <p className="mt-6 text-[#737373] text-base sm:text-lg max-w-130 mx-auto lg:mx-0 leading-8">
                        Premium clothing designed for those who want comfort,
                        confidence and timeless style. Discover pieces crafted
                        for every season and every moment.
                    </p>


                    {/* Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-5">

                        <Link to="/shop" className="bg-[#111111] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-[#C89B3C] hover:text-black hover:scale-105">
                            Shop Now →
                        </Link>

                        <Link to="/shop" className="border border-[#111111] px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-[#111111] hover:text-white">
                            Explore Collection
                        </Link>

                    </div>


                    {/* Stats */}
                    <div className="mt-14 flex flex-wrap justify-center lg:justify-start">

                        <div className="px-6">
                            <h3 className="text-3xl font-bold">
                                <CountUp number={1000}/>+
                            </h3>
                            <p className="text-[#777] mt-1">
                                Happy Customers
                            </p>
                        </div>


                        <div className="hidden sm:block w-px bg-gray-300"></div>

                        <div className="px-6">
                            <h3 className="text-3xl font-bold">
                                <CountUp number={200} />+
                            </h3>
                            <p className="text-[#777] mt-1">
                                Premium Products
                            </p>
                        </div>


                        <div className="hidden sm:block w-px bg-gray-300"></div>


                        <div className="px-6">
                            <h3 className="text-3xl font-bold">
                                <CountUp number={50} />+
                            </h3>
                            <p className="text-[#777] mt-1">
                                Fashion Brands
                            </p>
                        </div>

                    </div>

                </div>



                {/* Image */}
                <div data-aos="fade-rghit" className="relative flex justify-end lg:pl-12">

                    <img
                        
                        src={HeroImg}
                        alt="Fashion Model"
                        className="w-full max-w-[320px] sm:max-w-107.5 lg:max-w-135 rounded-4xl object-cover"
                    />


                    {/* Floating Card */}
                    <div className="absolute top-8 left-0 lg:left-8 bg-white shadow-xl rounded-2xl px-5 py-4">

                        <p className="font-semibold">
                            New Collection
                        </p>

                        <span className="text-[#777] text-sm">
                            Spring / Summer 2026
                        </span>

                    </div>

                </div>


            </div>

        </section>
    )
}