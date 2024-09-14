import React from "react";
import Image from "next/image";
import HeaderImage from "/public/images/header-image.webp";

function Header() {
  return (
    <header className="overflow-hidden bg-red h-[30vh] w-full md:h-[40vh] sticky top-0 left-0 z-20 uppercase ">
      <div id="TitleContainer" className=" absolute w-full text-center top-16 z-10">
        <h1 className="  text-sky-50 text-shadow">
          <p className=" text-xs md:text-3xl">BIENVENIDOS</p>
          <p className="text-4xl md:text-7xl">QUERIDOS</p>
          <p className=" -m-1 md:text-4xl">COMENZALES</p>
        </h1>
      </div>
      <Image src={HeaderImage} className=" contrast-125 saturate-50 w-full  m-auto" alt="" />
    </header>
  );
}

export default Header;
