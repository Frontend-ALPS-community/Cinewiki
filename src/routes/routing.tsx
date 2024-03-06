import { createBrowserRouter } from 'react-router-dom'

import Layout from '../components/Layout/layout'
import Home from '../pages/Home'
import Nowplaying from '../pages/Nowplaying'
import Toprated from '../pages/Toprated'
import Upcoming from '../pages/Upcoming'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
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
    ],
  },
])

export default router
