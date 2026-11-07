import Casual from '../assets/casual.jpg';
import Formal from '../assets/Formal.jpg';
import Gym from '../assets/Gym.jpg';
import Accessories from '../assets/Accessories.jpg'

export default function CategoriesSec() {
    return (
        <section data-aos = "zoom-in" className="max-w-310 mx-auto bg-[#F5F5F5] rounded-[40px] py-16 px-6 lg:px-16 mt-20 mb-20">

            <h2 className="text-center font-[Archivo_Black] text-4xl lg:text-5xl mb-14">
                BROWSE BY STYLE
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Casual */}
                <div className="relative h-65 rounded-3xl overflow-hidden group cursor-pointer">
                    <img src={Casual} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/25"></div>
                    <h3 className="absolute top-8 left-8 text-white text-4xl font-bold font-[Archivo_Black]">
                        Casual
                    </h3>
                </div>

                {/* Formal */}
                <div className="relative h-65 rounded-3xl overflow-hidden group cursor-pointer">
                    <img src={Formal} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/25"></div>
                    <h3 className="absolute top-8 left-8 text-white text-4xl font-bold font-[Archivo_Black]">
                        Formal
                    </h3>
                </div>

                {/* Gym */}
                <div className="relative h-65 rounded-3xl overflow-hidden group cursor-pointer">
                    <img src={Gym} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/25"></div>
                    <h3 className="absolute top-8 left-8 text-white text-4xl font-bold font-[Archivo_Black]">
                        Gym Wear
                    </h3>
                </div>

                {/* Accessories */}
                <div className="relative h-65 rounded-3xl overflow-hidden group cursor-pointer">
                    <img src={Accessories} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/25"></div>
                    <h3 className="absolute top-8 left-8 text-white text-4xl font-bold font-[Archivo_Black]">
                        Accessories
                    </h3>
                </div>

            </div>

        </section>
    )
}