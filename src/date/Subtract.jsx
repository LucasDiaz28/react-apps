import React from 'react'

function Subtract(year, month, day) {
    let today = new Date();
    let currentYear = today.getFullYear();
    let currentMonth = 1 + today.getMonth();
    let currentDay = today.getDate();
    let age = 0;


    function ageCalculator(){

        if (year.month + 1 > currentMonth){
            age =  currentYear - year.year - 1;
        } else if (year.month + 1 < currentMonth){
            age = currentYear - year.year;
        } else {
            if(year.day > currentDay){
                age = currentYear - year.year - 1;
            } else {
                age = currentYear - year.year;
            } 
        }
        return "La edad es " + age + " año/s." ;
        
    }
    


  return (
    <div>
        
        <button className=" rounded-md font-bold bg-blue-500 mx-auto p-3 border-2 shadow-2xl" onClick={()=>(alert(ageCalculator()))}>Calcular edad</button>
        
    </div>
  )
}

export default Subtract;