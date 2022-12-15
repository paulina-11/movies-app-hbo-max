import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { Route, Routes } from 'react-router-dom'
import NavbarOne from './components/Navbar'
import AddMovie from './pages/AddMovie/AddMovie'
import Home from './pages/Home/Home'
import Login from './pages/Login'
import Register from './pages/Register'
// import Routes from './routes'

function App () {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:3000/'
  })
  return (
    <ApolloProvider client={client}>
      <div>
        <NavbarOne />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/addmovie' element={<AddMovie />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        {/* <Home /> */}
      </div>
    </ApolloProvider>
  )
}

export default App
