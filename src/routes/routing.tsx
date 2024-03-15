import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout/layout'
import DetailPage from '../pages/Detail'
import ErrorPage from '../pages/Error/ErrorPage'
import HomePage from '../pages/Home'
import Nowplaying from '../pages/Nowplaying'
import SearchResultPage from '../pages/Search/SearchResult'
import Toprated from '../pages/Toprated'
import Upcoming from '../pages/Upcoming'

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
        path: '/detail/:id',
        element: <DetailPage />,
      },
      {
        path: '/search',
        element: <SearchResultPage />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
])

export default router
