

const BasicTypes = () => {

    const nombre: string  = 'Jhan';
    const edad : number = 35;
    const estaActivo:boolean = true;

    const poderes: string[] = ['velocity', 'fliying', 'breath under water']
    
    return (
    <>
      <h3>Tipos basicos</h3>
      { nombre }, { edad }, { (estaActivo)? 'activo ' : 'inactivo '}
      {poderes.join(' - ')}
    </>

  )
}

export default BasicTypes
