import React from 'react'

function PostMessage({message}) {
  return (
    <div className='border-neutral-900 border-2 shadow-2xl p-6 rounded-md bg-blue-200 text-center'>
        <h1 className=' text-3xl font-bold text-red-600'>
            {message}
        </h1>
    </div>
  )
}

export default PostMessage