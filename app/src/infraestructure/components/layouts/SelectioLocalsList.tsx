"use client";
import Link from 'next/link';
import { useRestaurantContext } from './../../../contexts/RestaurantContextProvider';
import SitesListEmpty from './SitesListEmpty';

function SelectioLocalsList() {
    const {restaurantService, setSelectedLocal}=useRestaurantContext();
  return (
    <div className=" text-white flex flex-col items-center gap-4">
{restaurantService && restaurantService.getAllLocales().length>0?
restaurantService.getAllLocales().map((local, index)=>
      <Link key={local.getId()} href={`/pages/local/${local.getName()}`} className=" border-2 hover:bg-white hover:bg-opacity-10  z-20 text-shadow transition-all duration-300 border-white w-72 p-1 py-2 rounded-xl puff-in-center" onClick={()=>{setSelectedLocal(local)}} >{local.getName()}{index==0 &&<span className='text-xs'> (contiene platos)</span>}</Link>)
:
restaurantService && <SitesListEmpty/>
}
    </div>
  )

}

export default SelectioLocalsList
