import { useState } from 'react';
import Image from 'next/image';
import { CategoryItemType } from '@/app/src/domain/category/CategoryTypes';
import Link from 'next/link';
import SkeletonDiv from '../SkeletonDiv';

function CategoryItem({ categoryItemProps }: { categoryItemProps: CategoryItemType }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <li className='w-full text-shadow' id='CardItem'>
      <Link
        className="overflow-hidden relative flex justify-center items-center h-[110px] sm:h-[200px] md:h-[240px] uppercase brightness-90 hover:brightness-125"
        href={`/pages/category/${categoryItemProps.title.toLowerCase()}/${categoryItemProps.id}`}>
        
        {!isLoading && <div className='absolute z-30 w-full h-full'><SkeletonDiv /></div>} {/* Mostrar SkeletonDiv mientras se carga */}

        <Image
          src={categoryItemProps.image}
          width={600}
          height={600}
          className={`img-card transition-all duration-700 absolute brightness-50 hover:saturate-100 contrast-125 hover:contrast-125 -top-16  md:-mt-20 w-full`}
          alt={categoryItemProps.title} // Es recomendable usar un alt descriptivo
          onLoad={handleImageLoad} // Manejar la carga de la imagen
        />

        <p className={`absolute z-10 text-right bottom-2 right-3 text-xl transition-opacity duration-300 ${isLoading && "opacity-0"}`}>{categoryItemProps.title}</p>
      </Link>
    </li>
  );
}

export default CategoryItem;
