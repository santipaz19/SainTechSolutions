import Button from "@/components/Buttons/button";
import Image from "next/image";


export default function HomeImage() {
    return (
        <div className="max-w-screen md:min-h-screen ">
            <div className="w-full h-80% justify-center flex 2xl:pt-10" >
                <h1 className="absolute block lg:hidden text-white  text-4xl md:text-5xl font-black leading-11 md:top-70 top-60 md:text-center px-4 z-10">
                    Soluciones digitales para hacer crecer tu negocio

                </h1>
                <h1 className="absolute block lg:hidden text-white text-normal font-black leading-7 top-105  md:text-center px-4 z-10">
                    Desarrollo web, mobile, e-commerce y sistemas a medida

                </h1>
                <h1 className="absolute hidden lg:block text-white  text-5xl font-black leading-14 top-75 left-30  text-center px-4 z-10">
                    Soluciones digitales
                </h1>
                <h1 className="absolute hidden lg:block text-white text-5xl font-black leading-14 top-90 left-30 text-center px-4 z-10">
                    para hacer crecer tu negocio
                </h1>
                <h1 className="absolute text-white hidden lg:block text-normal font-black leading-10 top-105 left-30 text-center px-4 z-10">
                    Desarrollo web, mobile, e-commerce y sistemas a medida
                </h1>

                <Button text="Solicitar cotizacion" bgColor="bg-[#cd2e63]" textColor="text-white" className='font-semibold text-2xl absolute xl:bottom-38 bottom-25' />
                <img
                    src="/empresaa.png"
                    alt="SaintTech"
                    className="w-full 2xl:max-w-[1700px] 2xl:h-auto h-[80vh] object-cover 2xl:rounded-lg mx-10 "
                />

            </div>
        </div>
    );
}
