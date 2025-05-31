import Button from "@/components/Buttons/button";
import Image from "next/image";


export default function AboutUs() {
    return (
        <div className="max-w-screen md:max-h-[80vh] h-auto bg-white ">
            <h1 className=" text-[#2F80ED] block pt-8 lg:hidden text-4xl md:text-5xl pb-5 font-black leading-14  text-center px-4 ">
                ¿Quiénes somos?
            </h1>
            <div className="w-full h-80% justify-center flex  gap-7 md:pt-10 md:pb-7" >

                <div className="w-[35%] ml-3 justify-center flex items-center">
                    <Image
                        src="/aboutus.png"
                        alt="AboutUs"
                        width={300}
                        height={318}

                    />
                </div>

                <div className="w-[65%]">
                    <h1 className=" text-[#2F80ED] hidden lg:block text-5xl pb-10 font-black leading-14  text-center px-4 ">
                        ¿Quiénes somos?
                    </h1>
                    <h1 className=" text-[#0D4E9E] text-sm md:text-xl pb-10 font-black leading-6   px-4 ">
                        En AsainTech Solutions, somos un equipo apasionado por la tecnología y el desarrollo de soluciones digitales innovadoras. Ayudamos a empresas y emprendedores a transformar sus ideas en productos reales, escalables y de alto impacto.
                    </h1>
                    <h1 className=" hidden sm:block text-[#61656B] pb-6 text-base font-bold leading-5  px-4">
                        Conformado por desarrolladores, diseñadores y especialistas en tecnología, nuestro objetivo es crear soluciones a medida que mejoren procesos, optimicen resultados y potencien negocios.

                        Nos destacamos por trabajar con metodologías ágiles, una comunicación clara y un compromiso total con la calidad y la innovación.

                    </h1>
                    <h1 className=" hidden md:block text-[#61656B] text-xs sm:text-base font-bold leading-5  px-4">

                        Nos destacamos por trabajar con metodologías ágiles, una comunicación clara y un compromiso total con la calidad y la innovación.

                    </h1>
                </div>

            </div>
            <h1 className=" text-[#61656B] sm:hidden  pt-4  text-base font-bold leading-5  px-4">
                Conformado por desarrolladores, diseñadores y especialistas en tecnología, nuestro objetivo es crear soluciones a medida que mejoren procesos, optimicen resultados y potencien negocios.

                Nos destacamos por trabajar con metodologías ágiles, una comunicación clara y un compromiso total con la calidad y la innovación.

            </h1>
            <h1 className=" text-[#61656B] md:hidden  text-base font-bold leading-5 py-4  px-4">

                Nos destacamos por trabajar con metodologías ágiles, una comunicación clara y un compromiso total con la calidad y la innovación.

            </h1>

        </div>
    );
}
