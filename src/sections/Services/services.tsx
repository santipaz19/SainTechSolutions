import Button from "@/components/Buttons/button";
import { Card } from "@/components/Cards/card";
import Image from "next/image";


export default function Services() {
    return (
        <div className="max-w-screen min-h-[80vh] bg-[--background] flex flex-col pb-5  gap-7 pt-15 ">
            <h1 className=" text-white text-5xl pb-10 font-bold leading-14  text-center px-4 ">
                Nuestros Servicios
            </h1>
            <div className=" flex mx-auto flex-wrap items-center justify-center gap-10 xl:gap-15 px-10 ">
                <Card
                    title="Desarrollo web"
                    description="Creamos sitios y aplicaciones web modernos, escalables y seguros. Nos enfocamos en rendimiento, experiencia de usuario y posicionamiento SEO."
                    imageUrl="/empresa.svg"
                    buttonText="Saber mas"
                    onClick={() => console.log("Click en Saber más")}
                />
                <Card
                    title="Desarrollo web"
                    description="Creamos sitios y aplicaciones web modernos, escalables y seguros. Nos enfocamos en rendimiento, experiencia de usuario y posicionamiento SEO."
                    imageUrl="/empresa.svg"
                    buttonText="Saber mas"
                    onClick={() => console.log("Click en Saber más")}
                />
                <Card
                    title="Desarrollo web"
                    description="Creamos sitios y aplicaciones web modernos, escalables y seguros. Nos enfocamos en rendimiento, experiencia de usuario y posicionamiento SEO."
                    imageUrl="/empresa.svg"
                    buttonText="Saber mas"
                    onClick={() => console.log("Click en Saber más")}
                />
                <Card
                    title="Desarrollo web"
                    description="Creamos sitios y aplicaciones web modernos, escalables y seguros. Nos enfocamos en rendimiento, experiencia de usuario y posicionamiento SEO."
                    imageUrl="/empresa.svg"
                    buttonText="Saber mas"
                    onClick={() => console.log("Click en Saber más")}
                />

            </div>


        </div>



    );
}
