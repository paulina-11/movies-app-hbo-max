import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const NavbarOne = () => {
  return (

    <div>
      <nav className='navbar navbar-dark header '>
        <div className='container-fluid d-flex align-items-center'>
          <div className='d-flex align-items-center'>
            <button className='navbar-toggler' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasDarkNavbar' aria-controls='offcanvasDarkNavbar'>
              <span className='navbar-toggler-icon' />
            </button>
            <div className='offcanvas offcanvas-start text-bg-dark' tabIndex='-1' id='offcanvasDarkNavbar' aria-labelledby='offcanvasDarkNavbarLabel'>
              <div className='offcanvas-header'>
                <button type='button' className='btn-close btn-close-white' data-bs-dismiss='offcanvas' aria-label='Close' />
              </div>
              <div className='offcanvas-body'>
                <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
                  <li className='nav-item'>
                    <Link to='/' className='nav-link active' aria-current='page' href='#'>Inicio</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/' className='nav-link' href='#'>Series</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='addmovie' className='nav-link' href='#'>Agregar películas</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/' className='nav-link' href='#'>Originales</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/' className='nav-link' href='#'>Recien Añadidos</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/' className='nav-link' href='#'>Últimos Días</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/' className='nav-link' href='#'>Próximamente</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/' className='nav-link' href='#'>En tendencia</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/' className='nav-link' href='#'>Disfruta gratis</Link>
                  </li>

                </ul>

              </div>
            </div>

            <div>
              <div className='d-none d-lg-block'>
                <div className='d-flex header__list '>
                  <Link to='addmovie' className='header__item '>
                    <div className='header__item-p'>
                      Agregar películas
                    </div>
                  </Link>
                  <Link to='/' className='header__item'>
                    <div>
                      Series
                    </div>
                  </Link>
                </div>
              </div>
            </div>

          </div>

          <Link className='navbar-brand' to='/'>
            <div>
              <img className='header__logo' src={Logo} alt='logo' />
            </div>
          </Link>

          <div>
            <div className='d-none d-lg-block'>
              <div className='d-flex header__list '>
                <Link to='login' className='header__item '>
                  <div className='header__item-p'>
                    Iniciar Sesión
                  </div>
                </Link>
                <Link to='register' className='header__item'>
                  <div className='header__item-button'>
                    Suscríbete
                  </div>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </nav>
    </div>

  )
}

export default NavbarOne
