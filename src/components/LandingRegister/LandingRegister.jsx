import React from 'react'
import { Link } from 'react-router-dom'

const LandingRegister = () => {
  return (
    <div>
      <h3>¡Disfruta de HBO Max!</h3>
      <p>Disfruta de los personajes más icónicos, descubre nuevas historias y emocionantes títulos exclusivos.</p>
      <button type='submit'> Elige un plan</button>
      <Link to='/login'>Incia Sesión con tu cuenta</Link>
    </div>
  )
}

export default LandingRegister
