import React from 'react'
import { Link } from 'react-router-dom'

const FormLogin = () => {
  return (
    <div className='containerForm'>
      <p className='containerForm__title'>Iniciar Sesión</p>
      <div>
        <form
          className='form'

        >
          <div>¿Tienes una cuenta de HBO MAX?</div>
          {/* <label htmlFor='email'>e-mail</label> */}
          <input
            placeholder='Dirección de e-mail'
            className='form__input'
            type='text'

          />

          {/* <label htmlFor='description'>Contraseña:</label> */}
          <input
            placeholder='Contraseña'
            className='form__input'
            type='text'

          />

          <div className='form__display'>
            <button className='form__button' type='submit'>Iniciar Sesión</button>
            <Link to='#' className='form__texto'>¿Olvidaste tú contraseña?</Link>
          </div>
          <div>
            <p>
              ¿Tienes HBO Max a través de otra empresa, como proveedor de TV, de telefonía móvil o Internet?
            </p>
            <button className='form__button' type='submit'>Iniciar Sesión con un proveedor</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default FormLogin
