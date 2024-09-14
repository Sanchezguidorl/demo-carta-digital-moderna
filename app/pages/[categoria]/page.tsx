"use client"
import { PlateType } from "@/app/src/domain/category/PlatesTypes";
import { menuItems } from "@/app/src/domain/DatabaseMock";
import ScrollContainer from "@/app/src/infraestructure/components/layouts/ScrollContainer";
import CategoryHeader from "@/app/src/infraestructure/components/pages/CategoryHeader";
import CategoryPage from "@/app/src/infraestructure/components/pages/CategoryPage";
import FilterBar from "@/app/src/infraestructure/components/pages/FilterBar";
import { useParams } from "next/navigation";
import React, { useState } from "react";


function CategoryRoute() {
  const {categoria}=useParams();
const [categoryItems,setCategoryItems]=useState<PlateType[]>(menuItems.filter((item)=>item.category!==categoria));
  return (
    <>
    <CategoryHeader title={categoria.toString()}/>
    <FilterBar platesList={categoryItems}/>
    <ScrollContainer>
      <CategoryPage />
    </ScrollContainer>
    </>
  );
}
export default CategoryRoute;
