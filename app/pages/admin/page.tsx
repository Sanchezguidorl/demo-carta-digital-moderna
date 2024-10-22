"use client";
import { useState } from "react";
import ScrollContainer from "@/app/src/infraestructure/components/layouts/ScrollContainer";
import AdminHeader from "@/app/src/infraestructure/components/pages/admin/AdminHeader";
import CardPlate from "@/app/src/infraestructure/components/pages/category/plates/CardPlate";
import Image from 'next/image';
import EditIcon from '/public/images/editIcon.png';
import { useRestaurantContext } from "@/app/src/contexts/RestaurantContextProvider";

function AdminPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const {localService}=useRestaurantContext();
  // Filtrar los items según la categoría seleccionada
  const filteredMenuItems = selectedCategory
    ? localService?.getAllplatesByCategory(selectedCategory) || []: localService?.getAllPlates() || [];

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
     <div className="sticky z-30 top-0">
       <AdminHeader />
      {/* Encabezado con "Carta general" y "Filtrar" 
      <div className="flex justify-between items-center p-3 bg-neutral-500">
        <h1 className="text-xs font-bold">Carta general</h1>
        <div className="flex items-center gap-2 font-sans">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            defaultValue={""}
            className="border px-1 bg-white rounded text-black text-sm p-1"
            >
            <option value="">Todas</option>
            <option value="ensaladas">Ensaladas</option>
            <option value="platos_principales">Platos principales</option>
            <option value="postres">Postres</option>
            <option value="bebidas">Bebidas</option>
          </select>
        </div>
      </div>
            </div>

      <ScrollContainer>
        <div className="flex flex-col gap-4 mt-1 text-white cursor-pointer w-full items-center justify-center">
          {filteredMenuItems.map((item, index) => (
            <div key={index} className="bg-gray-100 h-24 relative w-full">
              <div className="p-1 absolute left-0 bg-orange-950 text-xs font-sans px-4 rounded-r-xl card-plates-admin">
                <Image src={EditIcon} className=" w-8" alt=""/>
                Editar
              </div>
              <CardPlate plateItem={item} />
            </div>
          ))}
          </ScrollContainer>
          */}
          </div>
        </>
  );
}

export default AdminPage;
