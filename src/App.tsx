import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routing'

const queryCleint = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryCleint}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
