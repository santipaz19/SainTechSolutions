'use client';



import CardAbout from '@/components/Cards/cardAboutUs';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutUs() {
    return (
        <div className="relative min-h-screen  text-white overflow-hidden">
            {/* Imagen de fondo con blur */}
            <div className="absolute inset-0  ">
                <Image
                    src="/codigo.jpg"
                    alt="SaintTech"
                    fill
                    className="object-cover w-full h-full   opacity-30"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}

            >
                <div className='z-10 relative bg-[#05070ee8] md:px-10 px-5  py-6 lg:py-15  w-full '>
                    <h1 className="text-4xl font-extrabold text-center xl:text-start text-white pb-10 z-50">Sobre Nosotros</h1>

                    <div className='flex flex-wrap  items-center w-full text-justify md:text-start justify-center xl:justify-start gap-10'>


                        <p className="text-lg mb-6 leading-relaxed text-white  xl:w-[60%]">
                            En <span className="font-semibold text-start text-white ">SainTech Solutions</span>,creemos que la tecnología no solo resuelve problemas, sino que también transforma realidades. Nos especializamos en desarrollar soluciones digitales innovadoras que ayudan a empresas y emprendedores a optimizar sus procesos, mejorar su presencia online y alcanzar sus objetivos con eficiencia y creatividad.

                            Nuestra misión es construir herramientas tecnológicas que generen un impacto real y positivo. Lo hacemos combinando experiencia técnica, diseño centrado en el usuario y un enfoque estratégico orientado a resultados.
                        </p>
                        <Image
                            src="/sistema.png"
                            alt="SaintTech"
                            height={400}
                            width={400}
                            className=''
                        />

                    </div>

                    <h2 className="text-2xl font-bold mt-10 mb-4 text-white ">Nuestra Historia</h2>
                    <p className="text-base text-gray-200 leading-relaxed w-full text-justify">
                        Fundada en 2023, SainTech nació con la visión de ofrecer servicios tecnológicos de alta calidad accesibles para todos. Desde nuestros inicios, hemos trabajado con startups, pymes y organizaciones para desarrollar plataformas eficientes, escalables y seguras.
                    </p>
                    <div className='flex py-5  gap-10 flex-wrap justify-center md:justify-start'>

                        <CardAbout
                            title="Enfoque en Resultados"
                            emoji="🚀"
                            description="Trabajamos con un enfoque estratégico orientado a cumplir tus objetivos de negocio, no solo a entregar tecnología."
                        />
                        <CardAbout
                            title="Enfoque en Resultados"
                            emoji="🚀"
                            description="Trabajamos con un enfoque estratégico orientado a cumplir tus objetivos de negocio, no solo a entregar tecnología."
                        />  <CardAbout
                            title="Enfoque en Resultados"
                            emoji="🚀"
                            description="Trabajamos con un enfoque estratégico orientado a cumplir tus objetivos de negocio, no solo a entregar tecnología."
                        />  <CardAbout
                            title="Enfoque en Resultados"
                            emoji="🚀"
                            description="Trabajamos con un enfoque estratégico orientado a cumplir tus objetivos de negocio, no solo a entregar tecnología."
                        />
                    </div>
                    <h2 className="text-2xl font-bold mt-10 mb-4 text-white">Nuestros Valores</h2>
                    <ul className="list-disc list-inside text-gray-200 text-base leading-relaxed space-y-2 w-full">
                        <li><span className="text-white font-semibold">Innovación:</span> buscamos siempre soluciones creativas.</li>
                        <li><span className="text-white font-semibold">Transparencia:</span> construimos relaciones basadas en la confianza.</li>
                        <li><span className="text-white font-semibold">Compromiso:</span> nos esforzamos al máximo en cada proyecto.</li>
                        <li><span className="text-white font-semibold">Crecimiento continuo:</span> aprendemos y evolucionamos constantemente.</li>
                    </ul>
                </div>
            </motion.div>
        </div>
    );
}
