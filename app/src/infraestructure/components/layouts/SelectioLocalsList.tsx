"use client";
import Link from 'next/link';
import { useRestaurantContext } from './../../../contexts/RestaurantContextProvider';
import SitesListEmpty from './SitesListEmpty';

function SelectioLocalsList() {
    const {restaurantService, setSelectedLocal}=useRestaurantContext();
  return (
    <div className=" text-white flex flex-col items-center gap-4">
{restaurantService && restaurantService.getAllLocales().length>0?
restaurantService.getAllLocales().map((local)=>
      <Link key={local.getId()} href={`/pages/local/${local.getName()}`} className=" border-2 hover:bg-white hover:bg-opacity-10  z-20 text-shadow transition-all duration-300 border-white w-64 p-1 py-2 rounded-xl puff-in-center" onClick={()=>{setSelectedLocal(local)}} >{local.getName()}</Link>)
:
restaurantService && <SitesListEmpty/>
}
    </div>
  )

}

export default SelectioLocalsList
