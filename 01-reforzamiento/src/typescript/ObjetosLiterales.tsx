
interface Persona  {

    nombreCompleto: string;
    edad: number;
    direccion: Direccion;

}
interface Direccion {
    pais: string;
    casaNo: string;
}

const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'persona',
        edad : 12,
        direccion: {
            pais: 'canada',
            casaNo: 'lsdl23'

        }
    }
    
  return (
    <>
        <h3>Objetos literales</h3>
        <code>
            <pre>
            {JSON.stringify(persona, null, 2)  }
            </pre>
        </code>
       

    </>
  )
}

export default ObjetosLiterales
