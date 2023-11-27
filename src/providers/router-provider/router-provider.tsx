import {
  createBrowserRouter,
  RouterProvider as ReactRouterDomProvider,
} from 'react-router-dom'
import { routes } from './routes.tsx'

export const RouterProvider = () => {
  return <ReactRouterDomProvider router={createBrowserRouter(routes)} />
}
