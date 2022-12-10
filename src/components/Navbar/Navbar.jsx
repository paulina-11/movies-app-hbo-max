// import React, { useState } from 'react'
// import { Navbar } from 'flowbite-react'
// import Logo from '../../assets/logo.png'

const NavbarOne = () => {
  // const [navBarOpen, setNavBarOpen] = useState(false)
  return (
  // <nav className='p-3 border-gray-200 rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-700'>
  //   <div className='container flex flex-wrap items-center justify-between mx-auto'>

  //     <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
  //       <ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
  //         <li>
  //           <a href='#' className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white' aria-current='page'>Películas</a>
  //         </li>
  //         <li>
  //           <a href='#' className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Series</a>
  //         </li>

  //       </ul>
  //     </div>
  //     <a href='#' className='flex items-center'>
  //       <img src={Logo} className='h-6 mr-3 sm:h-10' alt='Flowbite Logo' />
  //     </a>
  //     <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
  //       <a href='#' className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white' aria-current='page'>
  //         <div>
  //           Iniciar Sesión
  //         </div>
  //       </a>
  //       <a href='#' className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
  //         <div>
  //           Suscríbete
  //         </div>
  //       </a>

  //     </div>

  //     <button
  //       onClick={() => setNavBarOpen(!navBarOpen)}
  //       data-collapse-toggle='navbar-hamburger'
  //       type='button'
  //       className=' inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
  //       aria-controls='navbar-hamburger'
  //       aria-expanded='false'
  //     >
  //       {navBarOpen
  //         ? (
  //           <svg
  //             xmlns='http://www.w3.org/2000/svg'
  //             className='w-6 h-6 text-gray-500'
  //             viewBox='0 0 20 20'
  //             fill='currentColor'
  //           >
  //             <path
  //               fillRule='evenodd'
  //               d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
  //               clipRule='evenodd'
  //             />
  //           </svg>
  //           )
  //         : (
  //           <svg
  //             xmlns='http://www.w3.org/2000/svg'
  //             className='w-6 h-6 text-gray-500'
  //             fill='none'
  //             viewBox='0 0 24 24'
  //             stroke='currentColor'
  //             strokeWidth={2}
  //           >
  //             <path
  //               strokeLinecap='round'
  //               strokeLinejoin='round'
  //               d='M4 6h16M4 12h16M4 18h16'
  //             />
  //           </svg>
  //           )}
  //     </button>
  //     <div
  //       id='navbar-hamburger' className={`w-full ${navBarOpen ? 'block' : 'hidden'
  //         }`}
  //     >
  //       <ul className='flex flex-col mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700'>
  //         <li>
  //           <a href='#' className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded dark:bg-blue-600' aria-current='page'>Inicio</a>
  //         </li>
  //         <li>
  //           <a href='#' className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>Series</a>
  //         </li>
  //         <li>
  //           <a href='#' className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white'>Películas</a>
  //         </li>
  //         <li>
  //           <a href='#' className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>Originales</a>
  //         </li>
  //         <li>
  //           <a href='#' className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>Recien Añadidos</a>
  //         </li>
  //         <li>
  //           <a href='#' className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>Últimos días</a>
  //         </li>
  //         <li>
  //           <a href='#' className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>Próximamente</a>
  //         </li>
  //         <li>
  //           <a href='#' className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>En tendencia</a>
  //         </li>
  //         <li>
  //           <a href='#' className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>Disfruta gratis</a>
  //         </li>
  //       </ul>
  //     </div>

  //   </div>

    // </nav>
    <div>
      <header class='header'>
        <div class='container'>
          <div class='btn-menu'>
            <label for='btn-menu'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 text-gray-500'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </label>
          </div>
          <div class='logo'>
            <h1>Logotipo</h1>
          </div>
          <nav class='menu'>
            <a href='#'>Inicio</a>
            <a href='#'>Nosotros</a>
            <a href='#'>Blog</a>
            <a href='#'>Contacto</a>
          </nav>
        </div>
      </header>
      <div class='capa' />
      <input type='checkbox' id='btn-menu' />
      <div class='container-menu'>
        <div class='cont-menu'>
          <nav>
            <a href='#'>Portafolio</a>
            <a href='#'>Servicios</a>
            <a href='#'>Suscribirse</a>
            <a href='#'>Facebook</a>
            <a href='#'>Youtube</a>
            <a href='#'>Instagram</a>
          </nav>
          <label for='btn-menu'>✖️</label>
        </div>
      </div>

    </div>

  )
}

export default NavbarOne
