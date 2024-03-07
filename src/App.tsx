import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import router from './routes/routing'

const queryCleint = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryCleint}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
