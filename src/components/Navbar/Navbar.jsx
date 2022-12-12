import Logo from '../../assets/logo.png'

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
                    <a className='nav-link active' aria-current='page' href='#'>Inicio</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>Series</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>Películas</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>Originales</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>Recien Añadidos</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>Últimos Días</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>Próximamente</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>En tendencia</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>Disfruta gratis</a>
                  </li>

                </ul>

              </div>
            </div>

            <div>
              <ul className='d-none d-lg-block'>
                <div className='d-flex '>
                  <li className='pr-3'>Peliculas</li>
                  <li>Series</li>
                </div>
              </ul>
            </div>
          </div>

          <a className='navbar-brand' href='#'>
            <div>
              <img className='header__logo' src={Logo} alt='logo' />
            </div>
          </a>

          <div>
            <ul className='d-none d-lg-block '>
              <div className='d-flex '>
                <li className='pr-3'>Iniciar Sesión</li>
                <li>Suscríbete</li>
              </div>
            </ul>
          </div>

        </div>
      </nav>
    </div>

  )
}

export default NavbarOne
