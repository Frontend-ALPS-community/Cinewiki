import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import HomePage from '../pages/Home'
import ErrorPage from '../pages/Error/ErrorPage'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
])

export default router
