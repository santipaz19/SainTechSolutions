"use client"
import { motion } from "framer-motion";
import { Card } from "@/components/Cards/card";

export default function Services() {
    const services = [
        {
            title: "Desarrollo web",
            description:
                "Creamos sitios y aplicaciones web modernos, escalables y seguros. Nos enfocamos en rendimiento, experiencia de usuario y posicionamiento SEO.",
            imageUrl: "/empresa.svg",
            buttonText: "Saber mas",
        },
        {
            title: "Desarrollo web",
            description:
                "Creamos sitios y aplicaciones web modernos, escalables y seguros. Nos enfocamos en rendimiento, experiencia de usuario y posicionamiento SEO.",
            imageUrl: "/empresa.svg",
            buttonText: "Saber mas",
        },
        {
            title: "Desarrollo web",
            description:
                "Creamos sitios y aplicaciones web modernos, escalables y seguros. Nos enfocamos en rendimiento, experiencia de usuario y posicionamiento SEO.",
            imageUrl: "/empresa.svg",
            buttonText: "Saber mas",
        },
        {
            title: "Desarrollo web",
            description:
                "Creamos sitios y aplicaciones web modernos, escalables y seguros. Nos enfocamos en rendimiento, experiencia de usuario y posicionamiento SEO.",
            imageUrl: "/empresa.svg",
            buttonText: "Saber mas",
        },
    ];

    return (
        <div className="max-w-screen min-h-[80vh] bg-[--background] flex flex-col pb-5 gap-7 pt-15">
            <motion.h1
                initial={{ opacity: 0, y: 300 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white text-4xl sm:text-5xl pb-5 md:pb-10 font-bold leading-14 text-center px-4"
            >
                Nuestros Servicios
            </motion.h1>

            <div className="flex mx-auto flex-wrap items-center justify-center gap-10 xl:gap-15 px-10">
                {services.map((service, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileInView="visible"
                        transition={{ duration: 0.5, delay: 0.2 * i, ease: "easeOut" }}
                    >
                        <Card
                            title={service.title}
                            description={service.description}
                            imageUrl={service.imageUrl}
                            buttonText={service.buttonText}
                            onClick={() => console.log(`Click en ${service.title}`)}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
