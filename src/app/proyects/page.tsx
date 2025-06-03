// app/contacto/page.tsx
"use client";

import Button from "@/components/Buttons/button";
import { useState } from "react";


export default function ContactPage() {
    const [form, setForm] = useState({
        nombre: "",
        apellido: "",
        empresa: "",
        email: "",
        consulta: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Enviado:", form);
        // Aquí podrías hacer un fetch a una API o mostrar un mensaje de éxito
    };

    return (
        <main className="min-h-[80vh]  text-white flex items-center relative justify-center   ">
            <img
                src="/desarrollo-apps.jpg"
                alt="SaintTech"
                className="w-full absolute max-h-[90vh]   object-cover blur-xs hidden md:flex -z-10"
            />
            <div className="w-full   max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#05070ef3] p-10 mx-10   z-10 rounded-xl shadow-xl">

                {/* FORMULARIO */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-4xl font-bold text-white border-b pb-1 ">Contacto</h2>
                    <p className="text-sm text-gray-300 mb-6">
                        Completá el formulario y nuestro equipo te contactará lo antes posible.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            name="nombre"
                            type="text"
                            placeholder="Nombre"
                            value={form.nombre}
                            onChange={handleChange}
                            required
                            className="bg-[#171f36] text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 "
                        />
                        <input
                            name="apellido"
                            type="text"
                            placeholder="Apellido"
                            value={form.apellido}
                            onChange={handleChange}
                            required
                            className="bg-[#171f36] text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 "
                        />
                    </div>

                    <input
                        name="empresa"
                        type="text"
                        placeholder="Nombre de empresa"
                        value={form.empresa}
                        onChange={handleChange}
                        className="w-full bg-[#171f36] text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 "
                    />

                    <input
                        name="email"
                        type="email"
                        placeholder="Correo electrónico"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#171f36] text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 "
                    />

                    <textarea
                        name="consulta"
                        placeholder="¿En qué podemos ayudarte?"
                        value={form.consulta}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full bg-[#171f36] text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 "
                    />


                    <Button text="Enviar consulta" bgColor="bg-[#cd2e63]" className="font-semibold   hover:bg-white text-white hover:text-[#cd2e63]" />
                </form>

                {/* REDES SOCIALES */}
                <div className="flex flex-col justify-between">
                    <div>
                        <h3 className="text-3xl font-semibold mb-4">Conectá con nosotros</h3>
                        <p className="text-gray-300 mb-6">
                            También podés encontrarnos en nuestras redes sociales.
                        </p>
                        <div className="flex space-x-6 text-2xl text-[#cd2e63]">
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="/instagram.png"
                                    alt="instagram"
                                    className="w-15"
                                />
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="/linkedin.png"
                                    alt="linkedin"
                                    className="w-15"
                                />
                            </a>
                            <a href="mailto:info@tudominio.com">
                                <img
                                    src="/correo.png"
                                    alt="correo"
                                    className="w-15"
                                />
                            </a>
                        </div>
                    </div>

                    <div className="mt-10 text-sm text-gray-500">
                        © {new Date().getFullYear()} SainTech Solutions. Todos los derechos reservados.
                    </div>
                </div>
            </div>
        </main>
    );
}
