import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";

const Shope = () => {

    const [products, setProducts] = useState([]);

    const [search, setSearch] = useState("")

    const [category, setCategory] = useState("All")

    const [price, setPrice] = useState("All")

    useEffect(() => {

        axios
            .get("http://localhost:3000/products")
            .then((res) => {

                setProducts(res.data);

            })
            .catch((err) => {

                console.log(err);

            });

    }, []);

    const filteredProducts = products.filter((product) => {

        const matchSearch = product.title
            .toLowerCase()
            .includes(search.toLowerCase());


        const matchCategory =
            category === "All"
            || product.category === category;

        const matchPrice =
            price === "All" ||
            (price === "under150" && product.price < 150) ||
            (price === "150to200" && product.price >= 150 && product.price <= 200) ||
            (price === "above200" && product.price > 200);


        return matchSearch && matchCategory && matchPrice;

    });


    // const fucCategory = products.filter((product) => {
    //     return product.catgeroy === catgeroy
    // })

    return (


        <main data-aos="fade-up" className="max-w-310 mx-auto px-6 lg:px-0 py-16">


            {/* Title */}

            <h1 className="font-[Archivo_Black] text-5xl text-center mb-12">

                SHOP

            </h1>


            {/* Search */}

            <div className="mb-12">

                <input

                    type="text"

                    value={search}

                    onChange={(e) => setSearch(e.target.value)}

                    placeholder="Search products..."

                    className="w-full h-14 border border-[#E5E5E5] rounded-full px-6 outline-none font-[Poppins]"

                />

            </div>


            {/* Shop Content */}

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">


                {/* Filter Sidebar */}


                <aside className="lg:col-span-1 border border-[#E5E5E5] rounded-3xl p-6 h-fit">


                    <h2 className="flex justify-between font-[Poppins] font-semibold text-2xl mb-6">

                        Filter

                        <MdKeyboardArrowDown className="cursor-pointer" />

                    </h2>


                    {/* Category */}


                    <div className="mb-8">


                        <h3 className="font-[Poppins] font-semibold mb-4">

                            Category

                        </h3>



                        <div className="space-y-3 font-[Poppins] text-[#707070]">


                            <label className="flex gap-2">

                                <input type="checkbox" className="checkbox" onChange={() => setCategory("All")} />

                                All

                            </label>



                            <label className="flex gap-2">

                                <input type="checkbox" className="checkbox" onChange={() => setCategory("T-Shirts")} />

                                T-Shirts

                            </label>



                            <label className="flex gap-2">

                                <input type="checkbox" className="checkbox" onChange={() => setCategory("Hoodies")} />

                                Hoodies

                            </label>



                            <label className="flex gap-2">

                                <input type="checkbox" className="checkbox" onChange={() => setCategory("Shoes")} />

                                Shoes

                            </label>


                        </div>


                    </div>



                    {/* Price */}


                    <div className="mb-8">



                        <h3 className="font-[Poppins] font-semibold mb-4">

                            Price

                        </h3>



                        <div className="space-y-3 font-[Poppins] text-[#707070]">

                            <label className="flex gap-2">

                                <input type="checkbox" className="checkbox" onChange={() => setPrice("All")} />

                                All

                            </label>

                            <label className="flex gap-2">

                                <input type="checkbox" className="checkbox" onChange={() => setPrice("under150")} />

                                Under $150

                            </label>



                            <label className="flex gap-2">

                                <input type="checkbox" className="checkbox" onChange={() => setPrice("150to200")} />

                                $150 - $200

                            </label>



                            <label className="flex gap-2">

                                <input type="checkbox" className="checkbox" onChange={() => setPrice("above200")} />

                                Above $200

                            </label>


                        </div>


                    </div>


                    {/* Rating */}


                    <div>


                        <h3 className="font-[Poppins] font-semibold mb-4">

                            Rating

                        </h3>


                        <div className="flex text-yellow-400">


                            <FaStar />

                            <FaStar />

                            <FaStar />

                            <FaStar />

                            <FaStar />


                        </div>


                    </div>


                </aside>



                {/* Products */}


                <section className="lg:col-span-3">


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">



                        {
                            filteredProducts.map((el) => (


                                <Link

                                    to={`/product/${el.id}`}

                                    key={el.id}

                                >



                                    <div className="cursor-pointer">





                                        {/* Image */}


                                        <div className="relative overflow-hidden rounded-3xl">


                                            <img

                                                src={el.image}

                                                alt={el.title}

                                                className="w-full h-80 object-cover cursor-pointer transition duration-300 hover:scale-105"

                                            />



                                            {
                                                el.discountPercentage && (


                                                    <span className="absolute top-4 left-4 bg-[#FFECEC] text-[#FF3333] px-4 py-2 rounded-full text-sm font-medium font-[Poppins]">


                                                        -{el.discountPercentage}%


                                                    </span>


                                                )
                                            }



                                        </div>







                                        {/* Title */}


                                        <h2 className="text-[20px] mt-4 mb-2 font-semibold font-[Poppins]">


                                            {el.title}


                                        </h2>








                                        {/* Rating */}


                                        <div className="flex items-center gap-2 mb-3">


                                            <div className="flex gap-1 text-yellow-400">


                                                <FaStar />

                                                <FaStar />

                                                <FaStar />

                                                <FaStar />

                                                <FaStar />


                                            </div>



                                            <span className="text-[#707070] font-[Poppins] text-sm">


                                                {el.rating}/5


                                            </span>


                                        </div>







                                        {/* Price */}


                                        <div className="flex items-center gap-3">


                                            <span className="text-[24px] font-medium font-[Poppins]">


                                                ${el.price}


                                            </span>




                                            {
                                                el.originalPrice && (


                                                    <del className="text-[20px] text-[#999999] font-[Poppins]">


                                                        ${el.originalPrice}


                                                    </del>


                                                )
                                            }



                                        </div>





                                    </div>



                                </Link>



                            ))

                        }



                    </div>



                </section>



            </div>


        </main>


    )


}



export default Shope;