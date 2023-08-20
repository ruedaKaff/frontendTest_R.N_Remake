import { useEffect, useRef, useState } from "react";
import { ReqResListado, Usuario } from "../interfaces/ireqRes";
import { reqResApi } from "../api/reqRes";


export const useUsuarios = () => {

    const [usuario, setUsuarios] = useState<Usuario[]>([]);

  const pagRef = useRef(1);
  useEffect(() => {
    //llamado al api
   cargarUsuarios();
  }, []);



  const cargarUsuarios = async() =>{
    
    const resp = await reqResApi.get<ReqResListado>('/users', {
        params: {
            page: pagRef.current
        }
    })
    console.log(pagRef);
    
    // pagRef.current =2;
    if (resp.data.data.length > 0) {
        setUsuarios(resp.data.data);
        // pagRef.current ++;
    }
    else {
        pagRef.current --;
        alert('No hay mas registros') 
        
    }
    
  }
  const pagSiguiente=() =>{
    pagRef.current ++;
    cargarUsuarios();
    
  }
  const pagAnterior=() =>{
    if (pagRef.current > 1 ) {
        pagRef.current --;
        cargarUsuarios();
    }
    else {alert('Este es el comienzo de los registros');
    }
}
console.log(pagRef);

  return({

    usuario,
    pagSiguiente,
    pagAnterior,
    cargarUsuarios
  }
 )
 
}
