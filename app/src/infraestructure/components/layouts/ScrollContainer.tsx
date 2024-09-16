import React from 'react'

function ScrollContainer({children}:{children:React.ReactNode}) {
  return (
    <ul className='bg-white flex w-full flex-wrap gap-[2px]'>
      {children}
    </ul>
  )
}

export default ScrollContainer
