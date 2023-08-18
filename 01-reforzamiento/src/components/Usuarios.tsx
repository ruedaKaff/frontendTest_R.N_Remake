import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/ireqRes";

export const Usuarios = () => {

  const [usuario, setUsuarios] = useState<Usuario[]>([]);

  const pagRef = useRef(0);
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
        pagRef.current ++;
    }
    else {
        alert('No hay mas registros') 
    }
    
  }

  const renderItem = ({
    avatar,
    email,
    first_name,
    id,
    last_name,
  }: Usuario) => {
    return (
      <tr key={id.toString()}>
        <td>
          {" "}
          <img
            src={avatar}
            alt="Profile image"
            style={{
              width: 45,
              borderRadius: 100,
            }}
          />
        </td>
        <td>
          {first_name} {last_name}
        </td>
        <td>{email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuarios: </h3>

      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>{usuario.map((usuario) => renderItem(usuario))}</tbody>
      </table>

      <button
      className="btn btn-primary"
      onClick={cargarUsuarios}
      >
        Siguientes
      </button>
    </>
  );
};
