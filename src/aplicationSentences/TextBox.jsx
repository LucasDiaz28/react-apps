import React from 'react'

function TextBox({f}) {
  return (
    <div className='max-w-lg border-neutral-900 mx-auto border-2 mt-7'>
        <input onChange={f} className='p-3 w-96  text-center' type="text" placeholder='Escribí aca una palabra(sin espacios)'/>
    </div>
  )
}

export default TextBox