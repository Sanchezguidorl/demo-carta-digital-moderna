import SaveIcon from "/public/images/saveIcon.png";
import Image from "next/image";
import BarIPhoto from "/public/images/barPhoto.jpg";
import AddIcon from "/public/images/addIcon.png";

function AddPlateForm() {
  return (
    <div className="py-4 w-full">
      <div className="w-full relative flex flex-col px-4 justify-center items-start">
        <div>
          <label htmlFor="InputName" className="text-xs flex flex-col gap-1">
            <span>Nombre</span>
            <input
              id="InputName"
              className="border-b text-black border-black outline-none"
              placeholder="Escribe un nombre para el plato"
              type="text"
            />
          </label>

          {/* Contenedor flex para los selects de categoría y sucursal */}
          <div className="flex mt-4  gap-2">
            {/* Select de categorías */}
            <label htmlFor="InputCategory" className="text-xs flex-1 flex flex-col w-60 gap-1">
              <span>Categoría</span>
              <select
                id="InputCategory"
                className="border-b text-black border-black outline-none"
              >
                <option value="">Selecciona una categoría</option>
                <option value="ensaladas">Ensaladas</option>
                <option value="platos_principales">Platos principales</option>
                <option value="postres">Postres</option>
                <option value="bebidas">Bebidas</option>
              </select>
            </label>

            {/* Select de sucursales */}
            <label htmlFor="InputBranch" className="text-xs flex-1 flex flex-col gap-1">
              <span>Sucursal</span>
              <select
                id="InputBranch"
                className="border-b text-black border-black outline-none"
              >
                <option value="">Selecciona una sucursal</option>
                <option value="norte">Sucursal Norte</option>
                <option value="sur">Sucursal Sur</option>
                <option value="este">Sucursal Este</option>
                <option value="oeste">Sucursal Oeste</option>
              </select>
            </label>
          </div>
        </div>

        <div className="w-full">
          <p>Asigna una imagen</p>
          <div className="h-24 rounded-xl flex justify-center items-center overflow-hidden relative bg-slate-900">
            <Image
              src={BarIPhoto}
              className="absolute w-full brightness-50"
              alt=""
            />
            <div className="absolute z-10">
              <Image
                src={AddIcon}
                className="mx-auto saturate-0 invert w-10"
                alt=""
              />
              <p className="text-white font-bold text-xs">Subir Imagen</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center cursor-pointer hover:brightness-150 mx-auto">
          <Image className="w-6" src={SaveIcon} alt="" />
          <p className="text-[8px]">Guardar</p>
        </div>
      </div>
    </div>
  );
}

export default AddPlateForm;
