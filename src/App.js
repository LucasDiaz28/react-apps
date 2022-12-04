import AplicationCounter from "./componentsCounter/AplicationCounter";
import TextBoxAplication from "./aplicationSentences/TextBoxAplication";
import Calendarios from "./date/Calendario";



function App() {

  
  

  return (

    <div className="pt-3 h-screen bg-gradient-to-r from-slate-500 to-indigo-300" >
      
      <AplicationCounter/>

      <TextBoxAplication/>
      <Calendarios/>


    </div>
  );
}

export default App;
