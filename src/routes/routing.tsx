import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import DetailPage from '../pages/Detail'
import HomePage from '../pages/Home'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/detail',
        element: <DetailPage />,
      },
    ],
  },
])

export default router
