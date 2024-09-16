import SaveIcon from "/public/images/saveIcon.png";
import Image from "next/image";

function AddBranchForm() {
  return (
    <div className="py-4 w-full">
      <div className="w-full relative flex flex-col px-4 justify-center items-start">
        <div className="w-full">
          {/* Input para agregar el nombre de la sucursal */}
          <label htmlFor="InputBranchName" className="text-xs flex flex-col gap-1">
            <span>Nombre de la Sucursal</span>
            <input
              id="InputBranchName"
              className="border-b text-black border-black outline-none"
              placeholder="Escribe el nombre de la sucursal"
              type="text"
            />
          </label>
        </div>

        <div className="flex flex-col items-center cursor-pointer hover:brightness-150 mx-auto mt-4">
          <Image className="w-6" src={SaveIcon} alt="Guardar" />
          <p className="text-[8px]">Guardar</p>
        </div>
      </div>
    </div>
  );
}

export default AddBranchForm;
