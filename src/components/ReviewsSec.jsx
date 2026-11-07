

import { FaStar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const SliderTail = "w-12 h-12 rounded-full border border-[#E5E5E5] flex items-center justify-center hover:bg-black hover:text-white transition duration-300";
const CardReviews = "border border-[#E8E8E8] rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2";
const H3Title = "font-bold text-xl";

export default function ReviewsSec() {



    return (


        <section data-aos="fade-left" className="max-w-310 mx-auto py-20 px-6 lg:px-0">

            {/* Title */}
            <div className="flex justify-between items-center mb-12">

                <h2 className="font-[Archivo_Black] text-4xl lg:text-5xl">
                    OUR HAPPY CUSTOMERS
                </h2>

                <div className="flex gap-4">

                    <button className={SliderTail}>
                        ←
                    </button>

                    <button className={SliderTail}>
                        →
                    </button>

                </div>

            </div>



            {/* Reviews */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Card 1 */}

                <div className={CardReviews}>

                    <div className="flex gap-1 text-[#FFC633] mb-5">

                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />

                    </div>

                    <div className="flex items-center gap-2 mb-4">

                        <h3 className={H3Title}>
                            Sarah Johnson
                        </h3>

                        <MdVerified className="text-[#01AB31] text-xl" />

                    </div>

                    <p className="text-[#6B7280] leading-8">
                        I absolutely love the quality of the clothes. Everything fits perfectly and the delivery was incredibly fast.
                    </p>

                </div>



                {/* Card 2 */}

                <div className={CardReviews}>

                    <div className="flex gap-1 text-[#FFC633] mb-5">

                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />

                    </div>

                    <div className="flex items-center gap-2 mb-4">

                        <h3 className={H3Title}>
                            Michael Brown
                        </h3>

                        <MdVerified className="text-[#01AB31] text-xl" />

                    </div>

                    <p className="text-[#6B7280] leading-8">
                        Premium quality, beautiful packaging and exactly the same as the pictures. Highly recommended.
                    </p>

                </div>



                {/* Card 3 */}

                <div className={CardReviews}>

                    <div className="flex gap-1 text-[#FFC633] mb-5">

                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />

                    </div>

                    <div className="flex items-center gap-2 mb-4">

                        <h3 className={H3Title}>
                            Emily Davis
                        </h3>

                        <MdVerified className="text-[#01AB31] text-xl" />

                    </div>

                    <p className="text-[#6B7280] leading-8">
                        One of the best online shopping experiences I've had. Stylish products with excellent customer service.
                    </p>

                </div>

            </div>

        </section>
    )
}