import React from 'react'
import Image from 'next/image';
;
import { CategoryItemType } from '@/app/src/domain/category/CategoryTypes';
import Link from 'next/link';

function CategoryItem({categoryItemProps}:{categoryItemProps:CategoryItemType}) {
  return (
    <li className='w-full text-shadow' id='CardItem'>
        <Link className=" overflow-hidden relative flex justify-center items-center h-[110px] uppercase brightness-90 hover:brightness-125" href={"/pages/platos"}>
        <Image
          src={categoryItemProps.image}
          className='img-card transition-all duration-700 absolute brightness-50 hover:saturate-100 contrast-125 hover:contrast-125 -top-16'
          alt=''
        />
      <p className=' absolute z-10 text-right bottom-2 right-3 text-xl'>{categoryItemProps.title}</p>
        </Link>
    </li>
  )
}

export default CategoryItem;