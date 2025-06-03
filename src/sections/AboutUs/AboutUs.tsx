"use client"
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
    return (
        <div className="max-w-screen md:max-h-[80vh] h-auto bg-white ">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-[#2F80ED] block pt-8 lg:hidden text-4xl md:text-5xl pb-5 font-black leading-14 text-center px-4"
            >
                ¿Quiénes somos?
            </motion.h1>

            <div className="w-full h-80% justify-center flex gap-7 md:pt-10 md:pb-7">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="w-[35%] ml-3 justify-center flex items-center"
                >
                    <Image src="/aboutus.png" alt="AboutUs" width={300} height={318} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    className="w-[65%]"
                >
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        className="text-[#2F80ED] hidden lg:block text-5xl pb-10 font-black leading-14 text-center px-4"
                    >
                        ¿Quiénes somos?
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="text-[#0D4E9E] text-base md:text-xl pb-0 sm:pb-10 font-black leading-6 px-4"
                    >
                        En AsainTech Solutions, somos un equipo apasionado por la tecnología y el
                        desarrollo de soluciones digitales innovadoras. Ayudamos a empresas y
                        emprendedores a transformar sus ideas en productos reales, escalables y
                        de alto impacto.
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.5 }}
                        className="hidden sm:block text-[#61656B] pb-6 text-base font-bold leading-5 px-4"
                    >
                        Conformado por desarrolladores, diseñadores y especialistas en tecnología,
                        nuestro objetivo es crear soluciones a medida que mejoren procesos,
                        optimicen resultados y potencien negocios.
                        <br />

                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.8 }}
                        className="hidden md:block text-[#61656B] text-xs sm:text-base font-bold leading-5 px-4"
                    >
                        Nos destacamos por trabajar con metodologías ágiles, una comunicación clara
                        y un compromiso total con la calidad y la innovación.
                    </motion.h1>
                </motion.div>
            </div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.1, ease: "easeOut" }}
                className="text-[#61656B] sm:hidden pt-4 text-base font-semibold leading-5 px-4"
            >
                Conformado por desarrolladores, diseñadores y especialistas en tecnología,
                nuestro objetivo es crear soluciones a medida que mejoren procesos, optimicen
                resultados y potencien negocios.
                <br />

            </motion.h1>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.4, ease: "easeOut" }}
                className="text-[#61656B] md:hidden text-base font-semibold leading-5 py-4 px-4"
            >
                Nos destacamos por trabajar con metodologías ágiles, una comunicación clara y
                un compromiso total con la calidad y la innovación.
            </motion.h1>
        </div>
    );
}
