import NavbarOne from './components/Navbar'
import Home from './pages/Home/Home'
import MainRoutes from './routes'

function App () {
  return (
    <div className='fondo'>
      <NavbarOne />
      <MainRoutes />
      <Home />

    </div>
  )
}

export default App
