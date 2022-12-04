import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import Subtract from "./Subtract";


function Calendarios() {



  const [value, onValueChange] = useState(new Date());
  

 //console.log(value.getDay())
  return (
    <div className=' calendar_container max-w-lg  mx-auto  mt-7 grid place-items-center' >
      
      <Calendar className="shadow-2xl" 
      value={value} onChange={onValueChange} locale={"es"}
      />
      

      {value && <h3 className="shadow-2xl font-bold m-4" >{"La fecha elegida es " + value.toLocaleDateString("es")}</h3> }
      <Subtract year={value.getFullYear()} month={value.getMonth()} day={value.getDate()} />
    </div>
  )
}

export default Calendarios
