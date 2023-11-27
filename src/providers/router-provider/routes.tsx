import { RouteObject } from 'react-router-dom'
import { RoutesURL } from '../../types'
import { UserDashboard, User, NotFoundPage } from '../../pages'
import { PageWrapper } from '../../components'

const routesSetUp = [
  {
    path: RoutesURL.USER_DASHBOARD,
    page: <UserDashboard />,
  },
  {
    path: RoutesURL.USER,
    page: <User />,
  },
  {
    path: RoutesURL.NOT_FOUND_PAGE,
    page: <NotFoundPage />,
  },
]

export const routes: RouteObject[] = routesSetUp.map(({ path, page }) => ({
  path,
  element: <PageWrapper>{page}</PageWrapper>,
}))
