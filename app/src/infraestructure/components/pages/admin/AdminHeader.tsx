import BackButton from "../../layouts/BackButton"
import AddCategoryForm from "./AddCategoryForm"
import AddPlateForm from "./AddPlateForm"
import AddSiteForm from "./AddSiteForm"
import AdminOptionAction from "./AdminOptionAction"

function AdminHeader() {
  return (
    <header className=" text-orange-900 bg-white">
      <BackButton/>
      <h1 className=" text-center bg-orange-950 p-3 text-white">Administrar Carta Digital</h1>
      <AdminOptionAction title={"Agregar categoría"}>
      <AddCategoryForm/>
      </AdminOptionAction>
      <AdminOptionAction title={"Agregar Plato"}>
      <AddPlateForm/>
      </AdminOptionAction>
      <AdminOptionAction title={"Agregar sucursal"}>
      <AddSiteForm/>
      </AdminOptionAction>
    </header>
  )
}

export default AdminHeader
