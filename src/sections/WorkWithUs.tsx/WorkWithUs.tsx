import Button from "@/components/Buttons/button";
import InfoCard from "@/components/Cards/InfoCards";
import Image from "next/image";

export default function WorkWithUs() {
    return (
        <div className="bg-white min-h-screen ">
            {/* Imagen de fondo */}
            <img
                src="/poligonwhite.png"
                alt="Fondo"
                className="w-full relative bottom-7 md:bottom-13 2xl:bottom-27"
            />
            <div className="flex flex-col">
                <h1 className=" text-[#101324] text-4xl font-extrabold leading-12 xl:relative  pb-10 xl:pb-0 bottom-20 text-center px-4 ">
                    ¿Por qué trabajar con nosotros?
                </h1>
                <div className="flex gap-10 w-full min-h-[50vh] px-4 flex-wrap lg:flex-nowrap">
                    <div className="w-full lg:w-1/2 justify-center items-center flex flex-col gap-10">
                        <InfoCard
                            title="Enfoque en Resultados"
                            emoji="🚀"
                            description="Trabajamos con un enfoque estratégico orientado a cumplir tus objetivos de negocio, no solo a entregar tecnología."
                        />
                        <InfoCard
                            title="Soluciones a Medida"
                            emoji="🛠️"
                            description="Diseñamos y desarrollamos herramientas específicas para tus necesidades, asegurando que cada proyecto tenga un impacto real."
                        />
                        <InfoCard
                            title="Compromiso con la Calidad"
                            emoji="✅"
                            description="Nos involucramos de principio a fin, garantizando entregas sólidas, eficientes y con altos estándares técnicos y visuales."
                        />
                    </div>

                    <div className="w-full lg:w-1/2 justify-center items-center flex">
                        <Image
                            src="/3.png"
                            alt="Fondo"
                            width={500}
                            height={500}
                        />
                    </div>

                    <div className="w-full lg:w-1/2 justify-center items-center hidden md:flex flex-col gap-10">
                        <InfoCard
                            title="Comunicación Clara y Constante"
                            emoji="💬"
                            description="Mantenemos una relación cercana con vos durante todo el proceso, para que siempre sepas en qué etapa estamos y puedas aportar tu visión."
                        />
                        <InfoCard
                            title="Innovación que Impulsa"
                            emoji="💡"
                            description="Estamos al tanto de las últimas tecnologías y buenas prácticas para ofrecerte soluciones modernas, escalables y competitivas."
                        />
                        <InfoCard
                            title="Tu Éxito es el Nuestro"
                            emoji="🌱"
                            description="Nos importa que crezcas. Por eso, más que un proveedor, buscamos ser un socio estratégico en tu transformación digital."
                        />
                    </div>
                </div>

                {/* Imagen de fondo */}
                <img
                    src="/poligon2.png"
                    alt="Fondo"
                    className="w-full relative top-1"
                />
            </div>








        </div >
    );
}
