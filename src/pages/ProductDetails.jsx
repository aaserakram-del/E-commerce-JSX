import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import axios from 'axios';

const ProductDetails = ({ cart, setCart }) => {

    const { id } = useParams();

    const [product, setProduct] = useState(null);
    useEffect(() => {

        axios
            .get(`http://localhost:3000/products/${id}`)
            .then((res) => {

                setProduct(res.data);

            })
            .catch((err) => {

                console.log(err);

            });

    }, [id]);

    useEffect(() => {

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    }, []);

    const addToCart = () => {

        const savedCart =
            JSON.parse(
                localStorage.getItem("cart")
            ) || [];


        const existingProduct = savedCart.find((item) => {
            return item.id === product.id;
        });


        if (existingProduct) {

            existingProduct.quantity++;

        } else {

            savedCart.push({
                ...product,
                quantity: 1
            });

        }


        setCart(savedCart);


        localStorage.setItem(
            "cart",
            JSON.stringify(savedCart)
        );

    };

    if (!product) {
        return (
            <h1 className="text-center text-3xl mt-20 font-[Poppins]">
                Loading...
            </h1>
        );
    }

    return (

        <main className="max-w-310 mx-auto px-6 lg:px-0 py-16">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">


                {/* Product Image */}

                <div className="relative">

                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-162.5 object-cover rounded-3xl"
                    />


                </div>





                {/* Product Info */}

                <div className="font-[Poppins]">

                    <h1 className="font-[Archivo_Black] text-4xl lg:text-5xl mb-5 tracking-tight">

                        {product.title}

                    </h1>



                    {/* Rating */}

                    <div className="flex items-center gap-3 mb-6">

                        <div className="flex text-yellow-400 gap-1">

                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />

                        </div>

                        <span className="text-[#707070]">

                            {product.rating}/5

                        </span>

                    </div>





                    {/* Price */}

                    <div className="flex items-center gap-4 mb-6">

                        <span className="text-4xl font-semibold">

                            ${product.price}

                        </span>

                        {product.originalPrice && (

                            <del className="text-2xl text-[#999999]">

                                ${product.originalPrice}

                            </del>

                        )}

                        {product.discountPercentage && (

                            <span className="bg-[#FFECEC] text-[#FF3333] px-4 py-2 rounded-full text-sm">

                                -{product.discountPercentage}%

                            </span>

                        )}

                    </div>





                    {/* Description */}

                    <p className="text-[#707070] text-lg leading-relaxed mb-8">

                        {product.description}

                    </p>

                    <hr className="border-[#E5E5E5] mb-8" />





                    {/* Size */}

                    <div className="mb-8">

                        <h3 className="font-semibold text-xl mb-4">

                            Select Size

                        </h3>

                        <div className="flex gap-4">

                            {["S", "M", "L", "XL"].map((size) => (

                                <button
                                    key={size}
                                    className="w-14 h-12 border border-[#E5E5E5] cursor-pointer rounded-full focus:bg-black focus:text-white transition"
                                >

                                    {size}

                                </button>

                            ))}

                        </div>

                    </div>





                    {/* Quantity + Add To Cart */}

                    <div className="flex flex-col sm:flex-row gap-5">


                        <button onClick={addToCart} className="flex-1 cursor-pointer bg-[#111111] text-white rounded-full h-14 font-semibold hover:bg-[#C89B3C] hover:text-black transition duration-300">

                            Add To Cart

                        </button>

                    </div>

                </div>

            </div>

        </main>

    );

};

export default ProductDetails;