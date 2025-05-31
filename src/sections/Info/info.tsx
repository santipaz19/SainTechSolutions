import Button from "@/components/Buttons/button";
import Image from "next/image";

export default function Information() {
    return (
        <div className="relative w-full min-h-[75vh] flex items-center justify-center overflow-hidden">
            {/* Imagen de fondo */}
            <Image
                src="/desarrollador.jpg"
                alt="Fondo"
                layout="fill"
                objectFit="cover"
                className="z-0 h-[55vh]"
                priority
            />



            {/* Contenido */}
            <div className="relative z-20 flex w-full max-w-screen px-8">
                <div className="w-1/2 hidden xl:flex" />
                <div className="xl:w-1/2 w-full ">
                    <h1 className="text-white text-4xl  sm:text-5xl font-black leading-14 ">
                        Desarrollamos tu idea.
                    </h1>
                    <h1 className="text-white text-4xl sm:text-5xl font-black leading-14 ">
                        A tu estilo.
                    </h1>
                    <h1 className="text-white text-4xl sm:text-5xl font-black leading-14 ">
                        Con nuestra tecnología.
                    </h1>
                    <h3 className="text-white pb-6 text-base sm:text-xl font-normal leading-8 ">
                        Creamos sitios web únicos, diseñados especialmente para reflejar la identidad de tu marca.
                        Nos enfocamos en que tu presencia online no solo se vea bien, sino que también funcione de forma rápida, segura y escalable.
                    </h3>

                </div>
            </div>
        </div>
    );
}
