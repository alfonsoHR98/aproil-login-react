import './App.scss'
import Login from './Components/Login/Login'
import Dashboard from './Components/Dashboard/Dashboard'

// Import React router dom
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

// Lets create a router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
