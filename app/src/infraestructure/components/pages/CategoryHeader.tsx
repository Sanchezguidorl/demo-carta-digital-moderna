import Image from 'next/image'
import React from 'react'
import HeaderImage from "/public/images/header-image.webp";
import BackIcon from "/public/images/backIcon.png";
import { useRouter } from 'next/navigation';

function CategoryHeader({title}:{title:string}) {
    const navigate= useRouter()
  return (
    <header className="overflow-hidden bg-red h-[30vh] w-full md:h-[40vh] sticky top-0 left-0 z-20 uppercase ">
      <div id="TitleContainer" className=" absolute w-full top-0 h-full flex justify-center items-center text-center  z-10">
        <div onClick={()=>navigate.back()} className=' p-2 pl-4 absolute left-0 top-4 w-14 bg-black rounded-r-lg bg-opacity-[35%] hover:cursor-pointer hover:saturate-150 hover:contrast-150'>
            <Image className='' src={BackIcon} alt=''/>
        </div>
        <h1 className="  text-sky-50 text-shadow">
          <p className="text-3xl md:text-6xl">{title}</p>
        </h1>
      </div>
      <Image src={HeaderImage} className=" contrast-125 saturate-50 w-full  m-auto" alt="" />
    </header>
  )
}

export default CategoryHeader
