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
  const [imageSrc, setImageSrc] = useState<string>(""); // Estado para la URL de la imagen

  // useEffect para cargar los platos y la imagen cuando cambie la categoría
  useEffect(() => {
    if (localService && id) {
      // Obtener los platos de la categoría
      const platesByCategory = localService.getAllplatesByCategory(id.toString());
      setCategoryItems(platesByCategory);
      // Obtener la imagen de la categoría
      const category = localService.getCategoryById(id.toString());
      if(category){
      setImageSrc(category.getImage()); // Actualizar el estado con la URL de la imagen
    }
  
  }

  }, [id, localService]); // Actualizar los platos y la imagen cuando cambie el id de la categoría o el servicio local

  return (
    <>
      <header className="fade-in sticky top-0 left-0 z-20">
        <OptionsSucursal />
        <CategoryHeader title={decodeURIComponent(categoryName.toString())} imageSrc={imageSrc} /> {/* Pasar imageSrc al CategoryHeader */}
        <FilterBar platesList={categoryItems} setPlatesList={setCategoryItems} />
      </header>
      <ScrollContainer>
        {categoryItems.length > 0 ? (
          categoryItems.map((plateItem) => (
            <CardPlate key={plateItem.getId()} plateItem={plateItem} /> // Asegúrate de usar un identificador único
          ))
        ) : (
          <p>No hay platos disponibles para esta categoría.</p>
        )}
      </ScrollContainer>
    </>
  );
}

export default CategoryRoute;
