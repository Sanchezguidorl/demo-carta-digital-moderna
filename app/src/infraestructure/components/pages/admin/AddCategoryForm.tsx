import SaveIcon from "/public/images/saveIcon.png";
import Image from "next/image";
import EnsaladaImage from "/public/images/ensalada.jpg";
import AddIcon from "/public/images/addIcon.png";
import { useState, useEffect } from "react";
import { useRestaurantContext } from "@/app/src/contexts/RestaurantContextProvider";
import { CategoryEntity } from "@/app/src/domain/entity/Category.entity";
import { saveNewCategory } from "@/app/src/usecases/RestaurantCases";
import { LocalEntity } from "@/app/src/domain/entity/Local.entity";
import LoadingSpin from "../../layouts/LoadingSpin";
import BlockActionDemo from "../../layouts/BlockActionDemo";

function AddCategoryForm() {
  const [categoryName, setCategoryName] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [localIds, setLocalIds] = useState<string[]>([]);
  const [locals, setLocals] = useState<LocalEntity[]>([]);
  const { restaurantService } = useRestaurantContext();

  const loadLocals = () => {
    if (!restaurantService) {
      return;
    }
    try {
      const fetchedLocals = restaurantService.getAllLocales();
      setLocals(fetchedLocals);
    } catch (err) {
      setError("Error al cargar los locales.");
    }
  };

  useEffect(() => {
    loadLocals();
  }, [restaurantService]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const handleLocalSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setLocalIds(selectedOptions);
  };

  const handleSubmit = async () => {
    if (!categoryName) {
      setError("El nombre de la categoría no puede estar vacío.");
      return;
    }

    if (localIds.length === 0) {
      setError("Debe seleccionar al menos un local.");
      return;
    }

    if (!image) {
      setError("Debe cargar una imagen.");
      return;
    }

    if (!restaurantService) {
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const newCategoryEntity = new CategoryEntity({
        id: `category-${Date.now()}`,
        name: categoryName.toLowerCase(),
        image: "",
        imagePath: "",
        locals: localIds,
      });

      for (const localId of localIds) {
        await saveNewCategory(
          restaurantService.getId(),
          localId,
          newCategoryEntity,
          restaurantService,
          image
        );
      }

      alert("Categoría agregada exitosamente.");
      setCategoryName("");
      setImage(null);
      setLocalIds([]);
    } catch (error) {
      console.error("Error al agregar la categoría:", error);
      setError("Error al agregar la categoría.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-4 w-full relative">
      <BlockActionDemo />
      {loading && (
        <div className="w-full h-full flex flex-col border justify-center items-center absolute top-0 left-0 bg-white z-30">
          <LoadingSpin />
          <p className="mt-1">Guardando...</p>
        </div>
      )}{" "}
      {/* Mostrar componente de carga */}
      <div className="w-full relative flex flex-col p-6 justify-center items-start gap-2">
        {error && <p className="text-red-500">{error}</p>}

        <label
          htmlFor="InputCategory"
          className="text-sm flex flex-col w-full gap-1"
        >
          <span>Nombre</span>
          <input
            id="InputCategory"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="border-b text-black border-black outline-none"
            placeholder="Escribe un nombre para la nueva categoría"
            type="text"
          />
        </label>

        <label
          htmlFor="SelectLocals"
          className="text-sm flex flex-col w-full gap-1"
        >
          <span>Selecciona Locales</span>
          <select
            id="SelectLocals"
            multiple
            value={localIds}
            onChange={handleLocalSelection}
            className="border-b text-black border-black outline-none"
          >
            <option value="" disabled>
              Selecciona un local
            </option>{" "}
            {/* Opción vacía */}
            {locals.map((local) => (
              <option key={local.getId()} value={local.getId()}>
                {local.getName()}
              </option>
            ))}
          </select>
        </label>

        <div className="w-full">
          <p>Asigna una imagen</p>
          <div className="h-24 md:h-48 md:mt-4 rounded-xl flex justify-center items-center overflow-hidden relative bg-slate-900">
            {image ? (
              <Image
                src={URL.createObjectURL(image)}
                alt="Selected Image"
                layout="fill"
                className="object-cover absolute w-full h-full brightness-50"
              />
            ) : (
              <Image
                src={EnsaladaImage}
                alt="Default Background"
                layout="fill"
                className="object-cover absolute w-full h-full brightness-50"
              />
            )}
            <div className="absolute z-10">
              <label htmlFor="fileInput" className="cursor-pointer">
                <Image
                  src={AddIcon}
                  className="mx-auto saturate-0 invert w-10"
                  alt="Add Icon"
                />
                <p className="text-white font-bold text-xs">Subir Imagen</p>
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </div>
          </div>
        </div>

        {/* Botón de guardar */}
        <div className="w-full mt-6">
          <button
            onClick={handleSubmit}
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

export default AddCategoryForm;
