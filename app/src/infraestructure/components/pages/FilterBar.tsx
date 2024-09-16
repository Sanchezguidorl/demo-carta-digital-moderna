import { PlateType } from "@/app/src/domain/category/PlatesTypes";
import OrderIcon from "/public/images/orderIcon.png";
import Image from "next/image";
import { useState } from "react";

function FilterBar({
  platesList,
  setPlatesList,
}: {
  platesList: PlateType[];
  setPlatesList: (plates: PlateType[]) => void;
}) {
  const [orderBy, setOrderBy] = useState<string>("asc"); // Estado para manejar el tipo de orden

  const handleOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const order = event.target.value;
    setOrderBy(order);

    // Ordenamos los platos según el valor seleccionado
    const sortedPlates = [...platesList].sort((a, b) => {
      if (order === "asc") return a.price - b.price;
      if (order === "desc") return b.price - a.price;
      return 0;
    });

    setPlatesList(sortedPlates);
  };

  return (
    <div className="bg-gray-200 h-10 text-black w-full flex justify-between items-center text-[0.60rem]">
      <p className="flex gap-1 justify-center w-fit ml-4">
        <span>{platesList.length}</span>
        opciones disponibles
      </p>
      
      {/* Contenedor de ordenar */}
      <div className="flex items-center gap-2">
        
        {/* Select para elegir el orden */}
        <select
          value={orderBy}
          onChange={handleOrderChange}
          className="border border-gray-300 border-none text-black text-xs px-2 py-1 rounded"
        >
          <option value="asc">Menor a mayor precio</option>
          <option value="desc">Mayor a menor precio</option>
        </select>
      </div>
    </div>
  );
}

export default FilterBar;
