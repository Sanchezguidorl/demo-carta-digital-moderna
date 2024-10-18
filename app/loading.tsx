import React from 'react'
import LoadingSpin from './src/infraestructure/components/layouts/LoadingSpin'

function Loading() {
  return (
    <div className=' top-0 left-0 relative w-[100vw] h-[100vh]  flex justify-center items-center'>
<div>
<LoadingSpin/>
    </div>
</div>
  )
}

export default Loading
