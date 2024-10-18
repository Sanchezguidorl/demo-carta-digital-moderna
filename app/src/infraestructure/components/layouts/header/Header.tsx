"use client";
import Image from "next/image";
import HeaderImage from "/public/images/barPhoto.jpg";
import OptionsSucursal from "./OptionsSucursal";
import { useLocalContext } from "@/app/src/contexts/LocalContextProvider";

function Header() {
  const { localService } = useLocalContext();
  return (
    <>
      <OptionsSucursal />
      <header className=" overflow-hidden bg-red h-[24vh] w-full md:h-[40vh] sticky top-0 left-0 z-20 uppercase ">
        <div
          id="TitleContainer"
          className=" absolute w-full text-center top-[20%] z-10"
        >
          <h1 className="  text-white text-shadow brightness-125">
            <p className="text-4xl mt-[2.2rem] md:text-7xl">BIENVENIDOS</p>
            <p className="text-[0.6rem] mt-[0.5rem] md:text-2xl text-gray-200 backdrop-blur-sm brightness-75 font-bold ">
              a una verdadera experiencia gastronómica
            </p>
          </h1>
        </div>
        <div className="m-auto absolute overflow-hidden w-full">
          {localService && (
            <Image
              src={HeaderImage}
              className=" saturate-[45%] w-full"
              alt=""
              loading="eager"
              id="LocalHeaderImage"
            />
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
