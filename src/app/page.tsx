"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import HomeImage from "@/sections/Home/home";

import AboutUs from "@/sections/AboutUs/AboutUs";
import Services from "@/sections/Services/services";
import Information from "@/sections/Info/info";
import WorkWithUs from "@/sections/WorkWithUs.tsx/WorkWithUs";
import ContactUs from "@/sections/ContactUs/ContactUs";

export default function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const infoRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const { scrollYProgress } = useScroll();

  const yHome = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yAbout = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yServices = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yInfo = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const yWork = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const yContact = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div>



      <motion.div ref={homeRef} style={{ y: yHome }}>
        <HomeImage />
      </motion.div>

      <motion.div ref={aboutRef} style={{ y: yAbout }}>
        <AboutUs />
      </motion.div>

      <motion.div ref={servicesRef} style={{ y: yServices }}>
        <Services />
      </motion.div>

      <motion.div ref={infoRef} style={{ y: yInfo }}>
        <Information />
      </motion.div>

      <motion.div ref={workRef} style={{ y: yWork }}>
        <WorkWithUs />
      </motion.div>

      <motion.div ref={contactRef} style={{ y: yContact }}>
        <ContactUs />
      </motion.div>

      {/* Botón arriba */}
      {/* Botón arriba a la derecha fijo */}
      {/* Botón para subir */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 z-50 w-12 h-12 flex items-center cursor-pointer justify-center bg-[#cd2e63] hover:bg-white hover:text-[#cd2e63] text-white rounded-full shadow-lg transition-colors duration-300"
        aria-label="Volver arriba"
      >
        <span className="border-t-2 border-l-2 w-3 h-3 transform rotate-45 mt-1"></span>
      </button>




    </div>
  );
}
