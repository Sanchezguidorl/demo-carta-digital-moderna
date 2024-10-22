"use client";
import CategoryItem from "./CategoryItem";
import { CategoryEntity } from "@/app/src/domain/entity/Category.entity";
import Loading from "@/app/loading";
import { useEffect, useState } from "react";
import { useRestaurantContext } from "@/app/src/contexts/RestaurantContextProvider";

function CategoriesList() {
  const { localService } = useRestaurantContext();

  const [showLoading, setShowLoading] = useState<boolean>(true);

  useEffect(() => {
    if (localService) {
      const timer =  setTimeout(() => {
        console.log("se cambia a false")
        setShowLoading(false);
      }, 1500);
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
