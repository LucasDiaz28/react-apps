import React from 'react'
import TextBox from "./TextBox";
import Btn from "../componentsCounter/Btn";
import { useState } from "react";
import PostMessage from "../componentsCounter/PostMessage";

function TextBoxAplication() {
    const [sentence, setSentence] = useState("")
   function texto(){
      
      if(sentence.includes(" ")){
          return "Error! Escribiste un espacio. Borralo y volve a intentar";
      } else{
          return "Tu palabra tieen " + sentence.length + " letras."
    }
  }
  return (
    <div className='shadow-2xl max-w-lg  mx-auto grid grid-cols-1 gap-3 mt-4 mb-4'>
        <TextBox f={(e)=>(setSentence(e.target.value)) } />
        <PostMessage  message={'Escribi tu palabra sin espacios y toca "empezar"'} />
        <Btn name = {"¿Cuántas letras tiene mi palabra?"} f = {()=>(alert(texto()))} />
    </div>
  )
   
}

export default TextBoxAplication