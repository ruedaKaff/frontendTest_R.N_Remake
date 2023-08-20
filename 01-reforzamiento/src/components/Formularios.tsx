
import { useForm } from '../hooks/useForm';


export const Formularios = () => {

    const { formulario, email, password, onChange } = useForm({
      email: 'example@some.com',
      password : '123456'
  });

  return (
    <>
        <h3>Formularios</h3>
        <input 
        placeholder="Email"
        type="text" 
        value={ email }
        className="form-control mt-2 mb-2"
        onChange={({target})=> onChange( target.value ,'email')}/>
        <input 
        placeholder="Password"
        type="text" 
        value={ password }
        className="form-control mt-2 mb-2"
        onChange={({target})=> onChange( target.value ,'password')}/>
        
        <code>
            <pre>{JSON.stringify( formulario, null, 2 )}</pre>
        </code>
    </>
  )
}
