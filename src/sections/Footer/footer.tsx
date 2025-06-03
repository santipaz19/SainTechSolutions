import Button from "@/components/Buttons/button";
import InfoCard from "@/components/Cards/InfoCards";
import Image from "next/image";

export default function Footer() {
    return (
        <div className="bg-[#ffffff]  pb-3  ">
            <footer className=" text-[#101324]  pt-10 px-6 ">
                <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
                    <div className=" justify-center  items-center flex-col hidden md:flex" >
                        <div className="flex items-center gap-3 pb-5">
                            <Image
                                src="/software.png"
                                alt="SaintTech"
                                width={64}
                                height={64}
                            />
                            <h3 className="text-2xl  w-1/2 font-bold ">SainTech Solutions</h3>
                        </div>

                        <p className="text-sm">“Tecnología que potencia negocios. Hecha a medida, pensada para vos.”</p>
                    </div>
                    <div >
                        <h4 className="font-semibold mb-2">Enlaces</h4>
                        <ul className="space-y-1 text-sm">
                            <li><a href="/" className="hover:underline">Inicio</a></li>
                            <li><a href="/servicios" className="hover:underline">Servicios</a></li>
                            <li><a href="/contacto" className="hover:underline">Proyectos</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Servicios</h4>
                        <ul className="space-y-1 text-sm">
                            <li><a className="hover:underline">   Desarrollo Web</a></li>
                            <li><a className="hover:underline"> Desarrollo Mobile</a></li>
                            <li><a className="hover:underline">
                                Integraciones y APIs</a></li>
                            <li><a className="hover:underline">

                                Sistemas de gestión y dashboards</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Contacto</h4>
                        <p className="text-sm">info@saintech.com</p>
                        <p className="text-sm">+54 11 1234 5678
                        </p>
                        <p className="text-sm">www.asaintech.com</p>
                    </div>
                    <div className="flex justify-center md:hidden   items-center flex-col" >
                        <div className="flex items-center gap-3 pb-5">
                            <Image
                                src="/software.png"
                                alt="SaintTech"
                                width={64}
                                height={64}
                            />
                            <h3 className="text-2xl  w-1/2 font-bold ">SainTech Solutions</h3>
                        </div>

                        <p className="text-sm">“Tecnología que potencia negocios. Hecha a medida, pensada para vos.”</p>
                    </div>
                </div>
                <div className="mt-8 text-center text-xs text-gray-600">
                    © {new Date().getFullYear()} SainTech Solutions. Todos los derechos reservados.
                </div>
            </footer>


        </div >
    );
}
