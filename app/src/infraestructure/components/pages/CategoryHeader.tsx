import Image from "next/image";
import React from "react";
import MariscosImage from "/public/images/mariscos.jpg";
import HamburguesasImage from "/public/images/hamburguesas.jpg";
import EntradasImage from "/public/images/entradas.webp";
import EnsaladaImage from "/public/images/ensalada.jpg";
import SopaImage from "/public/images/sopa.jpg";
import BackButton from "../layouts/BackButton";

interface CategoryHeaderProps {
  title: string;
}

function CategoryHeader({ title }: CategoryHeaderProps) {

  // Aseguramos que todos los elementos tengan el formato de objeto con 'categoryName' y 'imageSrc'
  const categories = [
    { categoryName: "sopas", imageSrc: SopaImage },
    { categoryName: "ensaladas", imageSrc: EnsaladaImage },
    { categoryName: "entradas", imageSrc: EntradasImage },
    { categoryName: "hamburguesas", imageSrc: HamburguesasImage },
    { categoryName: "mariscos", imageSrc: MariscosImage },
  ];

  // Buscar el objeto que coincida con el title
  const category = categories.find(
    (cat) => cat.categoryName === title.toLowerCase()
  );

  // Si no encuentra el título, podemos usar un fallback o una imagen predeterminada
  const HeaderImage = category
    ? category.imageSrc
    : "/public/images/default.jpg";

  return (
    <div className="overflow-hidden bg-red h-[24vh] w-full md:h-[40vh] uppercase">
      <div
        id="TitleContainer"
        className="absolute w-full -top-6  h-full flex justify-center items-center text-center z-10"
      >
        <BackButton/>
        <h1 className="text-sky-50 text-shadow">
          <p className="text-2xl md:text-5xl">{title}</p>
        </h1>
      </div>
      <Image
        src={EntradasImage}
        className=" w-full brightness-75 hover:saturate-100 contrast-125"
        alt={`${title} image`}
      />
    </div>
  );
}

export default CategoryHeader;
