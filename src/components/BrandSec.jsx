import { SiNike } from "react-icons/si";
import { SiAdidas } from "react-icons/si";
import { SiZara } from "react-icons/si";
import { SiPuma } from "react-icons/si";

export default function BrandSec() {
    return (
        <div data-aos = "fade-up" className="bg-[#000000] px-6 py-12">
            <div
                className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center items-center">
                <div className="flex flex-col items-center group">
                    <SiNike className="text-white text-[55px] md:text-[70px] group-hover:scale-110 duration-300" />
                    <h2 className="text-white font-[Archivo_Black] text-2xl tracking-[2px]">
                        Nike
                    </h2>
                </div>


                <div className="flex flex-col items-center group">
                    <SiAdidas
                        className="text-white text-[55px] md:text-[70px] group-hover:scale-110 duration-300"
                    />

                    <h2 className="text-white font-[Archivo_Black] text-2xl tracking-[2px]">
                        Adidas
                    </h2>
                </div>


                <div className="flex flex-col items-center group">
                    <SiZara
                        className="text-white text-[55px] md:text-[70px] group-hover:scale-110 duration-300" />
                    <h2 className="text-white font-[Archivo_Black] text-2xl tracking-[2px]">
                        Zara
                    </h2>
                </div>
                <div className="flex flex-col items-center group">
                    <SiPuma className="text-white text-[55px] md:text-[70px] group-hover:scale-110 duration-300" />
                    <h2 className="text-white font-[Archivo_Black] text-2xl tracking-[2px] ">
                        Puma
                    </h2>
                </div>
            </div>

        </div>
    )
}