import React from 'react'
import Image from 'next/image';
import EmptyIcon from '/public/images/emptyImge.svg';

function CategoryEmpty() {
  return (
    <div className='h-full flex justify-center items-start w-full'>
      <div className=" text-center max-w-72 mt-[40%] text-sm font-light text-red-950">
        <Image className='w-16 mx-auto' src={EmptyIcon} alt=""/>
        Este local aún no ha agregado categorías...</div>
    </div>
  )
}

export default CategoryEmpty
