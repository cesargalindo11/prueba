import React, { useEffect, useState } from 'react';
import { auth, store } from '../firebaseconfig';


const Admin = () => {

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [edad, setEdad] = useState('')
  const [peso, setPeso] = useState('')
  const [sexo, setSexo] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  // const [pass, setPass] = useState('')


  const RegistrarUsuario = (e) => {

    e.preventDefault()

    const usuario = {
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      peso: peso,
      sexo: sexo,
      email: email,
      pass: pass
    }

    try {
      store.collection('Registro').add(usuario)
      alert('Usuario Registrado')
    } catch (e) {
      
    }



  }


  return(
    <div className='row mt-5'>

      <div className='col'></div>
      <div className='col'>

        <form onSubmit={RegistrarUsuario} className='form-group'> 
          <div className="input-group mb-3">
            <div className='input-group-prepend'>
              <span className="input-group-text">Nombres</span>
            </div>
            <input 
            onChange={(e) => {setNombre(e.target.value)}}
            className='form-control'
            placeholder='Introduce tu nombre'
            type="text"/>
          </div>

          <div className="input-group mb-3">
            <div className='input-group-prepend'>
              <span className="input-group-text">Apellidos</span>
            </div>
            <input 
            onChange={(e) => {setApellido(e.target.value)}}
            className='form-control'
            placeholder='Introduce tu apellido'
            type="text"/>
          </div>


          <div className="input-group mb-3">
            <div className='input-group-prepend'>
              <span className="input-group-text">Datos</span>
            </div>
            <input 
            onChange={(e) => {setEdad(e.target.value)}}
            className='form-control'
            placeholder='Edad'
            type="number"/>
            <input 
            onChange={(e) => {setPeso(e.target.value)}}
            className='form-control'
            placeholder='Peso'
            type="number"/>

          </div>

          <div className="form-check form-check-inline mb-3">
            <div className='input-group-prepend'>
              <span className="input-group-text ">Sexo</span>
            </div>
            <input 
            onChange={(e) => {setSexo(e.target.value)}}
            className='form-check-input'
            type="radio"/>
            <label className="form-check-label form-check form-check-inline" for="inlineRadio1">Mujer</label>
            <input 
            onChange={(e) => {setSexo(e.target.value)}}
            className='form-check-input'
            type="radio"/>
            <label className="form-check-label form-check form-check-inline" for="inlineRadio2">Hombre</label>

          </div>

          <div className="input-group mb-3">
            <div className='input-group-prepend'>
              <span className="input-group-text"> Correo</span>
            </div>
            <input
            onChange={(e) => {setEmail(e.target.value)}}
            className='form-control'
            placeholder='Introduce tu correo electronico'
            type="email"/>
          </div>

          <div className="input-group mb-3">
            <div className='input-group-prepend'>
              <span className="input-group-text">Contraseña</span>
            </div>
            <input 
            onChange={(e) => {setPass(e.target.value)}}
            className='form-control'
            placeholder='Introduce una contraseña'
            type="password"/>
          </div>

          <input
            className='btn btn-info btn-block mt-4'
            value='Registrar Usuario'
            type="submit"/>

        </form>

      </div>
      <div className='col'></div>
      
    </div>
  )

}

export default Admin