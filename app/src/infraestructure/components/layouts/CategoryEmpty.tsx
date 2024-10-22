import Image from 'next/image'
import React from 'react'
import SiteEmpty from '/public/images/emptyImge.svg'

function CategoryEmpty() {
  return (
    <div className='w-full h-96 flex justify-center items-center'>
    <div className=' font-light text-xs md:text-sm max-w-80 text-center text-shadow text-black '>
      <Image src={SiteEmpty} className='w-32 sm:w-40 mx-auto' alt=''/>
      <p>En este momento no contamos con platos agregados</p>
    </div>
    </div>
  )
}

export default CategoryEmpty
