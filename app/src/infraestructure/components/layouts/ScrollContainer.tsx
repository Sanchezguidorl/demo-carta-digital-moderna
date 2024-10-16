import React from 'react'

function ScrollContainer({children}:{children:React.ReactNode}) {
  return (
    <ul className='fade-in h-fit flex w-full flex-col gap-[2px] overflow-auto'>
      {children}
    </ul>
  )
}

export default ScrollContainer
