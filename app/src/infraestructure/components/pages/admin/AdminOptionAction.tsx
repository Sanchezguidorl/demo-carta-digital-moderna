"use client";
import Image from "next/image";
import AddIcon from "/public/images/addIcon.png";
import { useState, useEffect, useRef } from "react";

type AdminOptionActionProps = {
  children: React.ReactNode;
  title: string;
};

function AdminOptionAction({ children, title }: AdminOptionActionProps) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Verifica si el clic es fuera del contenedor
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    }

    // Agrega el event listener al hacer clic en cualquier parte del documento
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Limpia el event listener cuando el componente se desmonte
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className="font-sans border-b-2 border-orange-900 pt-2">
      <div onClick={() => setIsActive(!isActive)} className="cursor-pointer pb-6">
        <Image className="aspect-square w-8 mx-auto md:w-16" src={AddIcon} alt="" />
        <h2 className="text-center uppercase text-xs sm:text-xl mt-1">{title}</h2>
      </div>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isActive ? "max-h-[1200px] overflow-auto" : "max-h-0 overflow-hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default AdminOptionAction;
