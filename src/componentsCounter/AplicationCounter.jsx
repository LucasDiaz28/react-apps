import React from 'react'
import  Btn  from "./Btn";
import PostMessage from "./PostMessage";
import { useState } from "react";

function AplicationCounter() {
    const [counter, setCounter] = useState(0)
  return (
    <div className='shadow-2xl max-w-lg  mx-auto '>
      
      <PostMessage message={counter} />
      
      <div className='grid grid-cols-5 gap-1 mt-4 mb-4'>
       <Btn name = {"Reiniciar"} f = {()=>{setCounter(0)}}/>
        <Btn name = {"Sumar 1"} f = {()=>{setCounter(counter +1)}} />
        <Btn name = {"Sumar 10"} f = {()=>{setCounter(counter +10)}}/>
        <Btn name = {"Restar 1"} f = {()=>{setCounter(counter -1)}}/>
        <Btn name = {"Restar 10"} f = {()=>{setCounter(counter -10)}}/>
      </div>
    </div>
  )
}

export default AplicationCounter