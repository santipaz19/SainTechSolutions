"use client"
import Button from "@/components/Buttons/button";
import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ContactUs() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();
    const router = useRouter();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <div
            ref={ref}
            className="bg-[--background] min-h-[82vh] flex items-center flex-col justify-center"
        >
            <div className="flex flex-col justify-center items-center">
                <motion.h1
                    variants={variants}
                    initial="hidden"
                    animate={controls}
                    className="text-white text-5xl font-black leading-12 text-center w-full xl:w-[50vw] px-4"
                >
                    ¿Qué estás esperando para transformar tu negocio?
                </motion.h1>

                <motion.h3
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3, ease: "easeOut" } },
                    }}
                    initial="hidden"
                    animate={controls}
                    className="pt-14 w-full text-[#D1D5DB] text-xl sm:text-2xl font-semibold leading-8 text-center px-4"
                >
                    Es hora de dar el siguiente paso. Te ayudamos a hacerlo posible.
                </motion.h3>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6, ease: "easeOut" } },
                    }}
                    initial="hidden"
                    animate={controls}
                    className="mt-15"
                >
                    <Button
                        text="Solicitar asesoría"
                        bgColor="bg-[#cd2e63]"
                        textColor="text-white"
                        className="font-semibold py-4 text-2xl"
                        onClick={() => router.push("/contact")}
                    />
                </motion.div>
            </div>
        </div>
    );
}
