"use client";
import { motion } from "framer-motion";
import React from "react";

interface InfoCardProps {
    title: string;
    emoji?: string;
    description: string;
}

export default function CardAbout({ title, emoji, description }: InfoCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className=" text-white p-3 rounded-2xl w-full sm:w-[270px] h-[250px] border border-[#1f2937] shadow-lg transition-transform duration-300 transform hover:scale-110 hover:shadow-gray-400"
        >
            {emoji && (
                <div className="w-12 h-12 mb-4 flex items-center justify-center text-3xl rounded-full bg-[#1F2937] border border-[#374151] shadow-inner">
                    {emoji}
                </div>
            )}
            <h2 className="text-lg font-semibold mb-2 border-b ">{title}</h2>
            <p className="text-md leading-relaxed text-gray-300">{description}</p>
        </motion.div>
    );
}
