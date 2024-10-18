"use client";

import { useEffect, useState } from "react";
import OptionsIcon from "/public/images/iconoptions.png";
import Image from "next/image";
import { useRestaurantContext } from "@/app/src/contexts/RestaurantContextProvider";
import Link from "next/link";
function OptionsSucursal() {
  // Sucursal activa
  const { restaurantService, setSelectedLocal, selectedLocal } =
    useRestaurantContext();
  const [activeSite, setActiveSite] = useState<string>("Detectando local ..."); // Inicializa con una sucursal
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (selectedLocal) {
      setActiveSite(selectedLocal.getName());
    }
  }, [selectedLocal]);

  return (
    <div className="fixed top-0 translate-x-1/2 right-1/2 flex justify-center z-30 bg-black w-60 pt-4 pb-2 px-8 text-center rounded-b-md bg-opacity-60 backdrop-blur-xs text-[0.65rem]">
      <div className=" ">
        <div className="relative flex justify-center mx-auto gap-2">
          {/* Muestra la sucursal activa */}
          <p className="text-right">{activeSite}</p>
          <Image
            className=" aspect-square w-3 hover:cursor-pointer hover:brightness-50"
            onClick={() => setIsActive(!isActive)}
            src={OptionsIcon}
            alt=""
          />
        </div>
        <div
          id="OptionsSucursal"
          className={`overflow-hidden transition-all duration-300 ${
            isActive ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <ul className="text-[0.5rem] mt-4 flex flex-col">
            {/* Lista de sucursales disponibles */}
            {restaurantService?.getAllLocales().map((local,index) => (
              <Link href={`/pages/local/${local.getName()}`}
                key={local.getId()+index}
                onClick={() => {
                  setSelectedLocal(local),
                  setActiveSite(local?.getName() || ""); // Cambia la sucursal activa al hacer clic
                  setIsActive(false); // Cierra el menú
                }}
                className="hover:bg-slate-600 transition-all duration-200 hover:cursor-pointer w-full py-[2px] mt-1"
              >
                {local.getName()}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OptionsSucursal;
