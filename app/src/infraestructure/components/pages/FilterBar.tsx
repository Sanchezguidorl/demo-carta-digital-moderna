import { PlateType } from '@/app/src/domain/category/PlatesTypes'
import React from 'react'

function FilterBar({platesList}:{platesList:PlateType[]}) {
  return (
    <div className=' bg-gray-200 h-12'>
      <p>
        {platesList.length}
        options
        </p>
    </div>
  )
}

export default FilterBar
