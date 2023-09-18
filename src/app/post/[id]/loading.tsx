import Spinner from '@/components/modules/Spinner'
import React from 'react'

const Loading = () => {
  return (
    <div className='min-h-[90vh] flex justify-center items-center'>
      <Spinner />
    </div>
  )
}

export default Loading