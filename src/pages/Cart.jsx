import { FaTrash } from "react-icons/fa";


const Cart = ({ cart, setCart }) => {


    const increaseQuantity = (id) => {

        const updatedCart = cart.map((item) => {

            if (item.id === id) {

                return {
                    ...item,
                    quantity: item.quantity + 1
                };

            }

            return item;

        });


        setCart(updatedCart);

        localStorage.setItem(
            "cart",
            JSON.stringify(updatedCart)
        );

    };





    const decreaseQuantity = (id) => {

        const updatedCart = cart.map((item) => {

            if (item.id === id && item.quantity > 1) {

                return {
                    ...item,
                    quantity: item.quantity - 1
                };

            }

            return item;

        });


        setCart(updatedCart);

        localStorage.setItem(
            "cart",
            JSON.stringify(updatedCart)
        );

    };





    const removeProduct = (id) => {

        const updatedCart = cart.filter((item) => {

            return item.id !== id;

        });


        setCart(updatedCart);


        localStorage.setItem(
            "cart",
            JSON.stringify(updatedCart)
        );

    };





    const totalPrice = cart.reduce((total, item) => {

        return total + (item.price * item.quantity);

    }, 0);





    return (

        <main className="max-w-310 mx-auto px-6 lg:px-0 py-16 font-[Poppins]">


            <h1 className="font-[Archivo_Black] text-4xl mb-10">
                Your Cart
            </h1>



            {
                cart.length === 0 ? (

                    <div className="text-center py-20">

                        <h2 className="text-2xl text-[#707070]">
                            Your Cart is Empty
                        </h2>

                    </div>


                ) : (


                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">


                        <div className="lg:col-span-2 space-y-5">


                            {
                                cart.map((item) => (


                                    <div key={item.id} className="flex items-center justify-between border border-[#E5E5E5] rounded-3xl p-5">


                                        <div className="flex gap-5 items-center">


                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-28 h-28 object-cover rounded-2xl"
                                            />



                                            <div>


                                                <h2 className="font-semibold text-xl">
                                                    {item.title}
                                                </h2>



                                                <p className="text-[#707070] mt-2">
                                                    ${item.price}
                                                </p>




                                                <div className="flex items-center gap-4 mt-4">


                                                    <button
                                                        onClick={() => decreaseQuantity(item.id)}
                                                        className="w-8 h-8 rounded-full border cursor-pointer"
                                                    >
                                                        -
                                                    </button>



                                                    <span>
                                                        {item.quantity}
                                                    </span>



                                                    <button
                                                        onClick={() => increaseQuantity(item.id)}
                                                        className="w-8 h-8 rounded-full border cursor-pointer"
                                                    >
                                                        +
                                                    </button>



                                                </div>


                                            </div>


                                        </div>





                                        <button
                                            onClick={() => removeProduct(item.id)}
                                            className="text-red-500 cursor-pointer hover:scale-110 transition"
                                        >

                                            <FaTrash />

                                        </button>



                                    </div>


                                ))
                            }



                        </div>







                        <div className="border border-[#E5E5E5] rounded-3xl p-8 h-fit">


                            <h2 className="text-2xl font-semibold mb-6">
                                Order Summary
                            </h2>




                            <div className="flex justify-between mb-4">

                                <span className="text-[#707070]">
                                    Subtotal
                                </span>


                                <span>
                                    ${totalPrice}
                                </span>


                            </div>




                            <hr className="border-[#E5E5E5] my-5" />




                            <div className="flex justify-between text-xl font-semibold">


                                <span>
                                    Total
                                </span>


                                <span>
                                    ${totalPrice}
                                </span>


                            </div>





                            <button className="w-full mt-8 bg-black text-white h-14 rounded-full font-semibold hover:bg-[#C89B3C] hover:text-black transition cursor-pointer">

                                Checkout

                            </button>



                        </div>




                    </div>


                )
            }



        </main>

    );

};



export default Cart;