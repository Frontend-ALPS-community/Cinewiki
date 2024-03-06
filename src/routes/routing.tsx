import { createBrowserRouter } from 'react-router-dom'
import Upcoming from '../pages/UpComing'
import Toprated from '../pages/TopRated'
import ErrorPage from '../pages/Error/ErrorPage'
import Nowplaying from '../pages/Nowplaying'
import HomePage from '../pages/Home'
import Layout from '../components/Layout/layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: '/nowplaying',
        element: <Nowplaying />,
      },
      {
        path: '/upcoming',
        element: <Upcoming />,
      },
      {
        path: '/toprated',
        element: <Toprated />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
])

export default router
