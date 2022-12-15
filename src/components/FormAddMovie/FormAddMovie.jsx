import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useNavigate, useLocation } from 'react-router-dom'
import { CREATE_MOVIE } from '../../graphql/Mutation'

const FormAddMovie = () => {
  const navigate = useNavigate()
  const location = useLocation()
  // const [_id, setIid] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [date, setDate] = useState('')

  const getStateObj = location.state
  // // const idMovie = location.state && getStateObj._id !== undefined ? location.state._id : ''
  // const titleMovie = location.state && getStateObj._id !== undefined ? location.state.title : ''
  // const descriptionMovie = location.state && getStateObj._id !== undefined ? location.state.description : ''
  // const imageMovie = location.state && getStateObj._id !== undefined ? location.state.image : ''
  // const dateMovie = location.state && getStateObj._id !== undefined ? location.state.date : ''

  // useEffect(() => {
  //   if (getStateObj) {
  //     setTitle(titleMovie)
  //     setDescription(descriptionMovie)
  //     setImage(imageMovie)
  //     setDate(dateMovie)
  //   }
  // }, [])
  const [createMovie] = useMutation(CREATE_MOVIE, {})
  return (
    <div className='containerForm'>
      <p className='containerForm__title'>Agregar películas</p>
      <div>
        <form
          className='form'
          onSubmit={async (e) => {
            e.preventDefault()
            if (getStateObj) {
              await createMovie({
                variables: { title, description, image, date }
              })
            }
            navigate('/')
          }}
        >
          <label htmlFor='title'>Titulo:</label>
          <input
            placeholder='Escribe el titulo'
            className='form__input'
            type='text'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />

          <label htmlFor='description'>Descripción:</label>
          <input
            placeholder='Escribe la descripción'
            className='form__input'
            type='textarea'
            value={description}
            onChange={(e) => {
              setDescription(e.target.value)
            }}
          />

          <label htmlFor='image'>URL de la imagen:</label>
          <input
            placeholder='Pega la URL'
            className='form__input'
            type='text'
            value={image}
            onChange={(e) => {
              setImage(e.target.value)
            }}
          />

          <label htmlFor='date'>Fecha de estreno:</label>
          <input
            className='form__input'
            type='text'
            value={date}
            onChange={(e) => {
              setDate(e.target.value)
            }} placeholder='Escribe la fecha de estreno'
          />

          <button className='form__button' type='submit'>Agregar</button>
        </form>
      </div>

    </div>
  )
}

export default FormAddMovie
