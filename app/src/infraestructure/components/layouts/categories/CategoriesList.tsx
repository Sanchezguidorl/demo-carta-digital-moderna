import CategoryItem from "./CategoryItem"
import MariscosImage from "/public/images/mariscos.jpg"
import HamburguesasImage from "/public/images/hamburguesas.jpg"
import EntradasImage from "/public/images/entradas.webp"
import EnsaladaImage from "/public/images/ensalada.jpg"
import SopaImage from "/public/images/sopa.jpg"

function CategoriesList() {
  return (
<>
<CategoryItem categoryItemProps={{title:"Ensaladas",image:EnsaladaImage}}/>
<CategoryItem categoryItemProps={{title:"HAMBURGUESAS",image:HamburguesasImage}}/>
<CategoryItem categoryItemProps={{title:"ENTRADAS",image:EntradasImage}}/>
<CategoryItem categoryItemProps={{title:"MARISCOS",image:MariscosImage}}/>
<CategoryItem categoryItemProps={{title:"SOPAS",image:SopaImage}}/>
</>
  )
}

export default CategoriesList
