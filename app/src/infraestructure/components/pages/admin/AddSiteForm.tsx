"use client";
import { useState } from "react";
import SaveIcon from "/public/images/saveIcon.png";
import AddIcon from "/public/images/addIcon.png";
import BgImg from "/public/images/local_large.webp";
import BgImgMedium from "/public/images/local_medium.webp";
import BgImgSmall from "/public/images/local_small.webp";
import Image from "next/image";
import { useRestaurantContext } from "@/app/src/contexts/RestaurantContextProvider";
import { LocalEntity } from "@/app/src/domain/entity/Local.entity";
import { saveNewLocal } from "@/app/src/usecases/RestaurantCases";
import LoadingSpin from "../../layouts/LoadingSpin";
import BlockActionDemo from "../../layouts/BlockActionDemo";

function AddSiteForm() {
  const [branchName, setBranchName] = useState("");
  const [fileImage, setFileImage] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false); // Estado para manejar la carga
  const { restaurantService, refetch } = useRestaurantContext();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileImage(file);
      setErrorMessage(null);
    }
  };

  const handleSave = () => {
    // Validación: Asegurarse de que el nombre de la sucursal no esté vacío
    if (!branchName.trim()) {
      setErrorMessage("El nombre de la sucursal es obligatorio.");
      return;
    }

    // Validación: Asegurarse de que se haya subido una imagen
    if (!fileImage) {
      setErrorMessage("Debe agregar una imagen antes de guardar.");
      return;
    }

    const newLocal = {
      id: Date.now().toString(),
      name: branchName,
      coverImage: "",
      categories: [],
      plates: [],
      imagePath: "",
    };
    if (restaurantService) {
      setIsLoading(true); // Iniciar carga
      saveNewLocal( new LocalEntity(newLocal), restaurantService, fileImage)
        .then(() => {
          // Limpiar campos del formulario
          setBranchName("");
          setFileImage(null);
          setErrorMessage(null);
          refetch();
        })
        .catch((error) => {
          console.log("Failed to update restaurant", error);
          setErrorMessage("Error al guardar la sucursal. Inténtalo de nuevo.");
        })
        .finally(() => {
          setIsLoading(false); // Finalizar carga
        });
    }
  };

  return (
    <div className="py-4 w-full relative">
    <BlockActionDemo/>
      {isLoading && <div className="w-full h-full flex flex-col border justify-center items-center absolute top-0 left-0 bg-white z-30"><LoadingSpin />
        <p className="mt-1">Guardando...</p>
      </div>} {/* Mostrar componente de carga */}
      <div className="w-full relative flex flex-col p-6 justify-center items-start gap-2">
        <div className="w-full">
          <label htmlFor="InputBranchName" className="text-sm flex flex-col gap-1">
            <span>Nombre de la Sucursal</span>
            <input
              id="InputBranchName"
              className="border-b text-black border-black outline-none"
              placeholder="Escribe el nombre de la sucursal"
              type="text"
              value={branchName}
              onChange={(e) => setBranchName(e.target.value)}
            />
          </label>
        </div>

        <div className="w-full">
          <p>Asigna una imagen</p>
          <div className="h-24 md:h-48 md:mt-4 rounded-xl flex justify-center items-center overflow-hidden relative bg-slate-900">
            {fileImage ? (
              <Image
                src={URL.createObjectURL(fileImage)}
                alt="Selected Image"
                layout="fill"
                className="object-cover absolute w-full h-full brightness-50"
              />
            ) : (
              <img
                src={BgImg.src}
                srcSet={`${BgImgSmall} 480w, ${BgImgMedium} 768w, ${BgImg} 1200w`}
                alt="Default Background"
                className="object-cover absolute w-full h-full brightness-50"
              />
            )}
            <div className="absolute z-10">
              <label htmlFor="fileInputLocal" className="cursor-pointer">
                <Image src={AddIcon} className="mx-auto saturate-0 invert w-10" alt="Add Icon" />
                <p className="text-white font-bold text-xs">Subir Imagen</p>
                <input
                  id="fileInputLocal"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </div>
          </div>
        </div>

        {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}

        {/* Botón de guardar */}
        <div className="w-full mt-6">
          <button
            onClick={handleSave}
            className="w-full flex justify-center items-center gap-2 bg-green-500 p-3 rounded-lg text-white font-semibold"
          >
            <Image src={SaveIcon} className="object-cover w-5 invert" alt="Ícono de Guardar" />
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddSiteForm;
