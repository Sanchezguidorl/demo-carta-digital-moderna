import React from 'react'
import Image from 'next/image';
import MariscosImage from "/public/images/mariscos.jpg";
import { CategoryItemType } from '@/app/src/domain/category/CategoryTypes';
import Link from 'next/link';

function CategoryItem({categoryItemProps}:{categoryItemProps:CategoryItemType}) {
  return (
    <li className='w-full text-shadow' id='CardItem'>
  <Link
    className="overflow-hidden relative flex justify-center items-center h-[110px] sm:h-[200px] md:h-[240px] uppercase brightness-90 hover:brightness-125"
    href={`/pages/category/${categoryItemProps.title.toLowerCase()}/${categoryItemProps.id}`}>
        <Image
          src={MariscosImage}
          className='img-card transition-all duration-700 absolute brightness-50 hover:saturate-100 contrast-125 hover:contrast-125 -top-16 w-full md:-mt-20'
          alt=''
        />
      <p className=' absolute z-10 text-right bottom-2 right-3 text-xl'>{categoryItemProps.title}</p>
        </Link>
    </li>
  )
}

export default CategoryItem;
