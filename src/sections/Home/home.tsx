import Button from "@/components/Buttons/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomeImage() {

    const router = useRouter();
    return (
        <div className="max-w-screen xl:min-h-screen bg-gradient-to-b from-[#05070e] via-[#101324] to-[#171f36]">
            {/* Wrapper relativo para que todo lo absoluto se posicione respecto a este */}
            <div className="relative w-full h-[80vh] xl:h-screen flex justify-center items-center">

                {/* Textos móviles */}
                <h1 className="absolute block lg:hidden text-white text-4xl md:text-5xl font-black leading-11  top-35 md:text-center px-4 z-10">
                    Soluciones digitales para hacer crecer tu negocio
                </h1>

                <h1 className="absolute block lg:hidden text-white font-black leading-7 top-80 md:text-center px-4 z-10">
                    Desarrollo web, mobile, e-commerce y sistemas a medida
                </h1>

                {/* Textos desktop */}
                <h1 className="absolute hidden lg:block text-white text-5xl font-black leading-14 top-60 left-30 text-center px-4 z-10">
                    Soluciones digitales
                </h1>
                <h1 className="absolute hidden lg:block text-white text-5xl font-black leading-14 top-75 left-30 text-center px-4 z-10">
                    para hacer crecer tu negocio
                </h1>
                <h1 className="absolute hidden lg:block text-white font-black leading-10 top-95 left-30 text-center px-4 z-10">
                    Desarrollo web, mobile, e-commerce y sistemas a medida
                </h1>

                {/* Botón */}
                <Button
                    onClick={() => router.push("/contact")}
                    text="Solicitar cotización"
                    bgColor="bg-[#cd2e63]"
                    className="font-semibold text-2xl absolute bottom-10 xl:bottom-40 hover:bg-white text-white hover:text-[#cd2e63]"
                />

                {/* Imagen de fondo */}
                <img
                    src="/empresaa.png"
                    alt="SaintTech"
                    className="w-full h-full object-cover  "
                />
            </div>
        </div>
    );
}
