import React from "react";
import Image from "next/image";
import HeaderImage from "/public/images/header-image.webp";
import OptionsSucursal from "./OptionsSucursal";

function Header() {
  return (
    <header className="overflow-hidden bg-red h-[30vh] sticky top-0 z-20 uppercase">
      <OptionsSucursal />
      <div id="TitleContainer" className=" absolute w-full text-center top-16 z-10">
        <h1 className="  text-sky-50 text-shadow">
          <p className=" text-xs">BIENVENIDOS</p>
          <p className="text-4xl">QUERIDOS</p>
          <p className=" -m-1">COMENZALES</p>
        </h1>
      </div>
      <Image src={HeaderImage} className=" contrast-125 saturate-50" alt="" />
    </header>
  );
}

export default Header;
