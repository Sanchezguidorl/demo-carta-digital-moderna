"use client";
import CategoryItem from "./CategoryItem";
import { useLocalContext } from "@/app/src/contexts/LocalContextProvider";
import { CategoryEntity } from "@/app/src/domain/entity/Category.entity";
import Loading from "@/app/loading";
import { useEffect, useState } from "react";

function CategoriesList() {
  const { localService } = useLocalContext();

  const [showLoading, setShowLoading] = useState<boolean>(true);

  useEffect(() => {
    if (localService) {
      const timer =  setTimeout(() => {
        console.log("se cambia a false")
        setShowLoading(false);
      }, 900);
      return () => clearTimeout(timer); // Limpiar el timeout en caso de desmontaje
      
    };
  }, [localService]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 z-40 w-full h-full bg-white ${
          !showLoading ? "hidden" : ""
        }`}
      >
        <Loading />
      </div>
      {localService &&
        localService.getAllCategories().length > 0 &&
        localService.getAllCategories().map((category: CategoryEntity) => (
          <CategoryItem
            key={category.getId()}
            categoryItemProps={{
              id: category.getId(),
              title: category.getName(),
              image: category.getImage(),
            }}
          />
        ))}
    </>
  );
}

export default CategoriesList;
