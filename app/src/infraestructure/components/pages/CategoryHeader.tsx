import Image from "next/image";
import React from "react";
import BackButton from "../layouts/BackButton";

interface CategoryHeaderProps {
  title: string;
  imageSrc: string; // Agregar la prop para la imagen
}

function CategoryHeader({ title, imageSrc }: CategoryHeaderProps) {
  return (
    <div className="overflow-hidden bg-red h-[24vh] w-full md:h-[40vh] uppercase">
      <div
        id="TitleContainer"
        className="absolute w-full -top-6 h-full flex justify-center items-center text-center z-10"
      >
        <BackButton />
        <h1 className="text-sky-50 text-shadow">
          <p className="text-2xl md:text-5xl">{title}</p>
        </h1>
      </div>
      <Image
        src={imageSrc} // Usar la imagen que llega por props
        className="w-full brightness-75 hover:saturate-100 contrast-125"
        alt={`${title} image`}
        layout="fill" // Si deseas que la imagen ocupe todo el contenedor
        objectFit="cover" // Para que la imagen mantenga su proporción
      />
    </div>
  );
}

export default CategoryHeader;
