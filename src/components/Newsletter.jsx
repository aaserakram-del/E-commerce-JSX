import { MdOutlineEmail } from "react-icons/md";


export default function Newsletter() {
    return (
        <section data-aos="fade-up" className="max-w-310 mx-auto bg-black rounded-4xl py-12 px-6 lg:px-16 mt-24 relative z-10">

            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">

                {/* Content */}

                <div className="max-w-137.5">

                    <h2 className="font-[Archivo_Black] text-white text-3xl lg:text-5xl leading-tight mb-4">
                        STAY UP TO DATE ABOUT OUR LATEST OFFERS
                    </h2>

                    <p className="text-[#BDBDBD] text-lg">
                        Subscribe now and get exclusive discounts, new arrivals and special offers directly in your inbox.
                    </p>

                </div>


                {/* Form */}

                <div className="w-full lg:w-105 flex flex-col gap-4">

                    <div className="relative">

                        <MdOutlineEmail className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl text-gray-400" />

                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full h-14 rounded-full pl-14 pr-5 outline-none bg-white font-[Poppins]"
                        />

                    </div>


                    <button className="w-full h-14 rounded-full bg-white text-black font-semibold hover:bg-[#C89B3C] transition-all duration-300 hover:scale-105">
                        Subscribe
                    </button>

                </div>

            </div>

        </section>
    )
}