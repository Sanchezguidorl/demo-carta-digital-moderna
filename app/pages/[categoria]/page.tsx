"use client";
import { PlateType } from "@/app/src/domain/category/PlatesTypes";
import { menuItems } from "@/app/src/domain/DatabaseMock";
import ScrollContainer from "@/app/src/infraestructure/components/layouts/ScrollContainer";
import CategoryHeader from "@/app/src/infraestructure/components/pages/CategoryHeader";
import FilterBar from "@/app/src/infraestructure/components/pages/FilterBar";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import CardPlate from "./../../src/infraestructure/components/layouts/plates/CardPlate";
import OptionsSucursal from "./../../src/infraestructure/components/layouts/header/OptionsSucursal";

function CategoryRoute() {
  const { categoria } = useParams();
  const [categoryItems, setCategoryItems] = useState<PlateType[]>(
    menuItems.filter((item) => item.category === categoria)
  );
  return (
    <>
      <header className="sticky top-0 left-0 z-20">
        <OptionsSucursal />
        <CategoryHeader title={categoria.toString()} />
        <FilterBar platesList={categoryItems} setPlatesList={setCategoryItems}/>
      </header>
      <ScrollContainer>
        {categoryItems.map((plateItem, index) => (
          <CardPlate key={index} plateItem={plateItem} />
        ))}
      </ScrollContainer>
    </>
  );
}
export default CategoryRoute;
