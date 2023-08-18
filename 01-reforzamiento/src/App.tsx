import { useEffect, useReducer } from "react";
import { Login } from "./components/Login";



const App = () => {

  

  return (
    <div className="mt-2">
      <h1>Introduccion a TS -React</h1>
      <hr />
      {/* <BasicTypes></BasicTypes> */}
      {/* <ObjetosLiterales/> */}
      {/* <Funciones></Funciones> */}
      {/* <Contador/> */}
      {/* <ContadorConHook/> */}
      <Login />
    </div>
  );
};

export default App;
