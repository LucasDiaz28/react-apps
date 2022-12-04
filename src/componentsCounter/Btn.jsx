import React from 'react'

function Btn({name, f}) {
  return (
    <button className='border-2 shadow-2xl p-2  rounded-md bg-blue-500 font-bold' onClick={f}>
        {name}
    </button>
  )
}

export default Btn