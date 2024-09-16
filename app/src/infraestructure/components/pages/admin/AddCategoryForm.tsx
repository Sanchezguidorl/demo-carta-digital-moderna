import SaveIcon from "/public/images/saveIcon.png";
import Image from "next/image";
import EnsaladaImage from "/public/images/ensalada.jpg";
import AddIcon from "/public/images/addIcon.png";

function AddCategoryForm() {
  return (
    <div className=" py-4 w-full">
      <div className=" w-full relative flex flex-col px-4 justify-center items-start gap-2 ">
        <label
          htmlFor="InputCategory"
          className=" text-xs flex flex-col w-60 gap-1"
        >
          <span>Nombre</span>
          <input
            id=" InputCategory"
            className="border-b text-black border-black outline-none"
            placeholder="Escribe un nombre para la nueva categoría"
            type="text"
          />
        </label>
        <div className="w-full">
          <p>Asigna una imagen</p>
          <div className=" h-24 rounded-xl flex justify-center items-center overflow-hidden relative bg-slate-900">
            <Image
              src={EnsaladaImage}
              className="absolute w-full brightness-50"
              alt=""
            />
            <div className=" absolute z-10 ">
              <Image
                src={AddIcon}
                className=" mx-auto saturate-0 invert w-10"
                alt=""
              />
              <p className="text-white font-bold text-xs">Subir Imagen</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center cursor-pointer hover:brightness-150 mx-auto">
          <Image className=" w-6" src={SaveIcon} alt="" />
          <p className="text-[8px]">Guardar</p>
        </div>
      </div>
    </div>
  );
}

export default AddCategoryForm;
