import Image from 'next/image'
import SiteEmpty from '/public/images/siteEmpty.svg'
import React from 'react'

function SitesListEmpty() {
  return (
    <div className=' font-light text-xs md:text-sm max-w-80 text-center text-shadow'>
      <Image src={SiteEmpty} className='w-32 sm:w-40 mx-auto' alt=''/>
      <p>En este momento no contamos con locales agregados</p>
    </div>
  )
}

export default SitesListEmpty
