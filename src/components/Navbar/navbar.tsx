"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navbarLinks } from '@/constants/navbar';
import Button from '../Buttons/button';
import { useRouter } from 'next/navigation';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    return (
        <nav className="flex items-center justify-between px-6 py-4 border-b border-[--border-color] bg-[#05070e] text-white max-w-screen relative z-50">
            {/* Logo + Nombre */}
            <div onClick={() => router.push("/")} className="flex cursor-pointer gap-2 items-center">
                <Image

                    src="/asaint.png"
                    alt="SaintTech"
                    width={64}
                    height={64}

                />
                <div className="text-xl font-semibold flex flex-col">
                    <div>SainTech Solutions</div>
                    <div></div>
                </div>
            </div>

            {/* Links desktop */}
            <div className="hidden lg:flex items-center  ">
                <ul className="flex items-center text-white mr-5">
                    {navbarLinks.map((link) => (
                        <li key={link.href} className="flex items-center">
                            <Link
                                href={link.href}
                                className="hover:text-[#fd6c9c] transition-all hover:scale-105 duration-200 px-3 py-2 text-xl rounded-md font-normal  leading-7"
                            >
                                {link.name}
                            </Link>
                            <div className="w-0.5 h-8 bg-white border mx-5 xl:mx-10" />
                        </li>
                    ))}
                </ul>
                <Button onClick={() => router.push("/contact")} text="Contáctanos" bgColor="bg-[#cd2e63]" className="font-semibold  text-xl lg:text-2xl hover:bg-white text-white hover:text-[#cd2e63]" />
            </div>

            {/* Botón hamburguesa */}
            <div className="lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-3xl focus:outline-none"
                >
                    {isOpen ? '×' : '≡'}
                </button>
            </div>

            {/* Menú mobile */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-[#05070e] border-t border-gray-700 flex flex-col gap-4 p-4 lg:hidden z-40">
                    {navbarLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-white text-lg hover:text-gray-300 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button
                        onClick={() => {
                            setIsOpen(false); // cierra el menú
                            router.push("/contact");
                        }}
                        text="Contáctanos"
                        bgColor="bg-[#cd2e63]"
                        textColor="text-white"
                        className="w-full text-xl font-semibold mt-2"
                    />
                </div>
            )}
        </nav>
    );
}
