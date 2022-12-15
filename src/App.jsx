import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { Route, Routes } from 'react-router-dom'
import NavbarOne from './components/Navbar'
import Home from './pages/Home/Home'
import Login from './pages/Login'
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
        </Routes>
        {/* <Home /> */}
      </div>
    </ApolloProvider>
  )
}

export default App
