"use client";
import { useLocalContext } from "@/app/src/contexts/LocalContextProvider";
import { PlateEntity } from "@/app/src/domain/entity/Plate.entity";
import OptionsSucursal from "@/app/src/infraestructure/components/layouts/header/OptionsSucursal";
import ScrollContainer from "@/app/src/infraestructure/components/layouts/ScrollContainer";
import CardPlate from "@/app/src/infraestructure/components/pages/category/plates/CardPlate";
import CategoryHeader from "@/app/src/infraestructure/components/pages/CategoryHeader";
import FilterBar from "@/app/src/infraestructure/components/pages/FilterBar";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

function CategoryRoute() {
  const { id, categoryName } = useParams(); // Obtener los parámetros de la ruta
  const { localService } = useLocalContext(); // Obtener el servicio local
  const [categoryItems, setCategoryItems] = useState<PlateEntity[]>([]); // Estado para almacenar los platos

  // useEffect para cargar los platos cuando cambie la categoría
  useEffect(() => {
    if (localService && id) {
      const platesByCategory = localService.getAllplatesByCategory(id.toString());
      setCategoryItems(platesByCategory); // Actualizar el estado con los platos de la categoría
    }
  }, [id, localService]); // Actualizar los platos cuando cambie el id de la categoría o el servicio local

  return (
    <>
      <header className="fade-in sticky top-0 left-0 z-20">
        <OptionsSucursal />
        <CategoryHeader title={decodeURIComponent(categoryName.toString())} />
        <FilterBar platesList={categoryItems} setPlatesList={setCategoryItems} />
      </header>
      <ScrollContainer>
        {categoryItems.length > 0 ? (
          categoryItems.map((plateItem) => (
            <CardPlate key={plateItem.getId()} plateItem={plateItem} /> // Asegúrate de usar un identificador único en lugar de index
          ))
        ) : (
          <p>No hay platos disponibles para esta categoría.</p>
        )}
      </ScrollContainer>
    </>
  );
}

export default CategoryRoute;
