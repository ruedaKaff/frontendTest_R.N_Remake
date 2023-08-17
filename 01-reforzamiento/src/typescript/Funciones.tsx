

const funciones = () => {


    const sumar = (a: number, b:number):number => {
        return a+b;
    }

  return (
    <>
      <h3>Funciones</h3>
      <span> el resultado es: {sumar(1,2)}</span>
      
    </>
  )
}

export default funciones
