"use client";

import { useState } from "react";
import OptionsIcon from "/public/images/iconoptions.png";
import Image from "next/image";
// Mock de sucursales
const mockSites = ["Sucursal A", "Sucursal B", "Sucursal C", "Sucursal D"];

function OptionsSucursal() {
  // Sucursal activa
  const [activeSite, setActiveSite] = useState("Sucursal A"); // Inicializa con una sucursal
  const [isActive, setIsActive] = useState(false);

  // Filtramos la lista de sucursales para que no muestre la sucursal activa
  const availableSites = mockSites.filter((site) => site !== activeSite);

  return (
    <div className="absolute top-0 w-full flex justify-center z-30">
      <div className="bg-black w-60 pt-4 pb-2 px-8 text-center rounded-b-md bg-opacity-60 backdrop-blur-xs text-[0.5rem]">
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
            <ul className="text-[0.4rem] mt-4">
              {/* Lista de sucursales disponibles */}
              {availableSites.map((site) => (
                <li
                  key={site}
                  onClick={() => {
                    setActiveSite(site); // Cambia la sucursal activa al hacer clic
                    setIsActive(false); // Cierra el menú
                  }}
                  className="hover:bg-slate-600 transition-all duration-200 hover:cursor-pointer py-[2px]"
                >
                  {site}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OptionsSucursal;
