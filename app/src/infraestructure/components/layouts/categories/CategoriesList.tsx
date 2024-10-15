"use client";
import CategoryItem from "./CategoryItem";
import EnsaladaImage from "/public/images/ensalada.jpg";
import { useLocalContext } from "@/app/src/contexts/LocalContextProvider";
import { CategoryEntity } from "@/app/src/domain/entity/Category.entity";
import CategoryEmpty from "../../pages/category/CategoryEmpty";


function CategoriesList() {
  const { localService } = useLocalContext();
  console.log(localService?.getAllCategories())
  return (
    <>
      {localService && localService.getAllCategories().length>0? localService.getAllCategories().map((category: CategoryEntity) => (
        <CategoryItem
            key={category.getId()}
          categoryItemProps={{
            id: category.getId(),
            title: category.getName(),
            image: EnsaladaImage,
          }}
        />
      )):
      <CategoryEmpty/>
      }
    </>
  );
}

export default CategoriesList;
