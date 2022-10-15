import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './Comonent/Layout/Main'
import LoginPage from './Comonent/LoginPage/LoginPage'
import RegisterPage from './Comonent/RegisterPage/RegisterPage'

const router = createBrowserRouter([
  {path: '/', element: <Main/>, children: [
    {path: '/', element: <RegisterPage/>},
    {path: '/register', element: <RegisterPage/>},
    {path: '/login', element: <LoginPage/>}
  ]}
])

function App() {

  return (
    <div className="App">
      <h1>hello fancy login</h1>
    </div>
  )
}

export default App
