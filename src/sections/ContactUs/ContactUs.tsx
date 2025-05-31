import Button from "@/components/Buttons/button";
import InfoCard from "@/components/Cards/InfoCards";
import Image from "next/image";

export default function ContactUs() {
    return (
        <div className="bg-[--background] min-h-[82vh] flex items-center flex-col justify-center">

            <div className="flex flex-col justify-center items-center">

                <h1 className=" text-white text-5xl font-black leading-12 text-center w-full xl:w-[50vw] px-4 ">
                    ¿Qué estás esperando para transformar tu negocio?
                </h1>

                <h3 className="pt-14 w-full text-[#D1D5DB] text-xl sm:text-2xl font-semibold leading-8 text-center px-4 ">
                    Es hora de dar el siguiente paso. Te ayudamos a hacerlo posible.
                </h3>

                <Button text="Solicitar asesoría" bgColor="bg-[#cd2e63]" textColor="text-white" className='font-semibold py-4 text-2xl mt-15' />

            </div>
        </div >
    );
}
