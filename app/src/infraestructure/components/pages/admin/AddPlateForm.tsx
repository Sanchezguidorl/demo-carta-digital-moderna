"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import SaveIcon from "/public/images/saveIcon.png";
import AddIcon from "/public/images/addIcon.png";
import BarIPhoto from "/public/images/barPhoto.jpg";
import { useRestaurantContext } from "@/app/src/contexts/RestaurantContextProvider";
import { saveNewPlate } from "@/app/src/usecases/RestaurantCases";
import { LocalEntity } from "@/app/src/domain/entity/Local.entity";
import { PlateEntity } from "@/app/src/domain/entity/Plate.entity";
import LoadingSpin from './../../layouts/LoadingSpin';
import { CategoryEntity } from "@/app/src/domain/entity/Category.entity";
import BlockActionDemo from "../../layouts/BlockActionDemo";

function AddPlateForm() {
  const [plateName, setPlateName] = useState("");
  const [category, setCategory] = useState("");
  const [branchSelected, setBranchSelected] = useState<LocalEntity|null>(null);
  const [price, setPrice] = useState<number | "">("");
  const [description, setDescription] = useState("");
  const [onPromotion, setOnPromotion] = useState(false); // Booleano para promoción
  const [branches, setBranches] = useState<LocalEntity[]>([]);
  const [categories, setCategories] = useState<CategoryEntity[]>([]); // Estado para las categorías
  const [fileImage, setFileImage] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { restaurantService, refetch } = useRestaurantContext();

  useEffect(() => {
    if (restaurantService) {
      setBranches(restaurantService.getAllLocales());
    }
  }, [restaurantService]);

  // Este efecto se ejecuta cada vez que se selecciona un local para cargar sus categorías
  useEffect(() => {
    if (branchSelected) {
      const branchCategories = branchSelected.getCategories();
      setCategories(branchCategories);
      setCategory(""); // Reiniciar la selección de categoría
    }
  }, [branchSelected, restaurantService]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileImage(file);
      setErrorMessage(null);
    }
  };

  const handleSave = () => {
    if (!plateName.trim()) {
      setErrorMessage("El nombre del plato es obligatorio.");
      return;
    }

    if (!category) {
      setErrorMessage("Debe seleccionar una categoría.");
      return;
    }

    if (!branchSelected) {
      setErrorMessage("Debe seleccionar una sucursal.");
      return;
    }

    if (!price || isNaN(Number(price))) {
      setErrorMessage("Debe ingresar un precio válido.");
      return;
    }

    if (!description.trim()) {
      setErrorMessage("Debe ingresar una descripción.");
      return;
    }

    if (!fileImage) {
      setErrorMessage("Debe agregar una imagen antes de guardar.");
      return;
    }

    const newPlate = {
      id: Date.now().toString(),
      name: plateName,
      category: category, // Guardando la ID de la categoría
      local: branchSelected.getId(),
      price: Number(price),
      description: description,
      score: 10, // Valor por defecto
      imageUrl: "", // Esto se manejará tras subir la imagen
      imagePath: "",
      onPromotion: onPromotion,
    };

    if (restaurantService) {
      setIsLoading(true);
      saveNewPlate(restaurantService.getId(), branchSelected.getId(), new PlateEntity(newPlate), restaurantService, fileImage)
        .then(() => {
          setPlateName("");
          setCategory("");
          setBranchSelected(null);
          setPrice("");
          setDescription("");
          setOnPromotion(false);
          setFileImage(null);
          setErrorMessage(null);
          refetch();
        })
        .catch((error) => {
          console.log("Error al guardar el plato:", error);
          setErrorMessage("Error al guardar el plato. Inténtalo de nuevo.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="py-4 w-full relative">
          <BlockActionDemo/>
      {isLoading && (
        <div className="w-full h-full flex flex-col border justify-center items-center absolute top-0 left-0 bg-white z-30">
          <LoadingSpin />
          <p className="mt-1">Guardando...</p>
        </div>
      )}
      <div className="w-full relative flex flex-col p-6 justify-center items-start gap-2">
        <div className="w-full">
          <label htmlFor="InputName" className="text-sm flex flex-col gap-1">
            <span>Nombre del Plato</span>
            <input
              id="InputName"
              className="border-b text-black border-black outline-none"
              placeholder="Escribe un nombre para el plato"
              type="text"
              value={plateName}
              onChange={(e) => setPlateName(e.target.value)}
            />
          </label>
        </div>

        {/* Select de sucursal */}
        <div className="w-full mt-4">
          <label htmlFor="InputBranch" className="text-sm flex flex-col gap-1">
            <span>Sucursal</span>
            <select
              id="InputBranch"
              className="border-b text-black border-black outline-none"
              value={branchSelected?.getId()}
              onChange={(e) =>{ const local=restaurantService?.getLocalById(e.target.value);
                local?setBranchSelected(local):""}}
            >
              <option value="">Selecciona una sucursal</option>
              {branches.length>0?branches.map((branch) => (
                <option key={branch.getId()} value={branch.getId()}>
                  {branch.getName()}
                </option>
              )):
              <option disabled>Aún no se han agregado locales</option>
              }
            </select>
          </label>
        </div>

        {/* Select de categoría, que se habilita cuando se selecciona una sucursal */}
        <div className="w-full mt-4">
          <label htmlFor="InputCategory" className="text-sm flex flex-col gap-1">
            <span>Categoría</span>
            <select
              id="InputCategory"
              className="border-b text-black border-black outline-none"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              disabled={!branchSelected} // Deshabilitar si no se ha seleccionado una sucursal
            >
              <option value="">Selecciona una categoría</option>
              {categories.length>0?categories.map((category) => 
                <option key={category.getId()} value={category.getId()}>
                  {category.getName()}
                </option>
            ):
            <option disabled>Aún no se han agregado categorias</option>
            }
            </select>
          </label>
        </div>

        {/* Campo de precio */}
        <div className="w-full mt-4">
          <label htmlFor="InputPrice" className="text-sm flex flex-col gap-1">
            <span>Precio</span>
            <input
              id="InputPrice"
              className="border-b text-black border-black outline-none"
              placeholder="Escribe un precio para el plato"
              type="number"
              value={price}
              onChange={(e) => setPrice(parseInt(e.target.value))}
            />
          </label>
        </div>

        {/* Campo de descripción */}
        <div className="w-full mt-4">
          <label htmlFor="InputDescription" className="text-sm flex flex-col gap-1">
            <span>Descripción</span>
            <textarea
              id="InputDescription"
              className="border-b text-black border-black outline-none"
              placeholder="Escribe una descripción para el plato"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>

        {/* Checkbox para promoción */}
        <div className="w-full mt-4 flex items-center gap-2">
          <input
            id="InputPromotion"
            type="checkbox"
            checked={onPromotion}
            onChange={() => setOnPromotion(!onPromotion)}
          />
          <label htmlFor="InputPromotion" className="text-sm">
            ¿Está en promoción?
          </label>
        </div>

        {/* Campo de imagen */}
        <div className="w-full mt-4">
          <p className="text-center mb-4 md:text-lg">Asigna una imagen</p>
          <div className="flex-1 aspect-square w-40 md:w-60 mx-auto rounded-xl flex justify-center items-center overflow-hidden relative bg-slate-900">
            {fileImage ? (
              <Image
                src={URL.createObjectURL(fileImage)}
                alt="Imagen seleccionada"
                width={100}
                height={100}
                className="object-cover w-full h-full brightness-50"
              />
            ) : (
              <Image
                src={BarIPhoto}
                className="object-cover w-full h-full brightness-50"
                alt="Imagen de fondo"
              />
            )}
            <div className="absolute z-10">
              <label htmlFor="InputImage">
                <Image src={AddIcon} className="object-cover w-10 invert" alt="Ícono de añadir" />
              </label>
              <input
                id="InputImage"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
          </div>
        </div>

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

        {errorMessage && (
          <div className="mt-4 w-full bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{errorMessage}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddPlateForm;
