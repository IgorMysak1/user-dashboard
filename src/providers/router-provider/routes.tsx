import { RouteObject } from 'react-router-dom'
import { RoutesURL } from '../../types'
import {
  UserDashboardPage,
  UserPage,
  NotFoundPage,
  ProfilePage,
  SignUpPage,
  SignInPage,
  ResetPasswordPage,
} from '../../pages'

export const routes: RouteObject[] = [
  {
    path: RoutesURL.PROFILE,
    element: <ProfilePage />,
  },
  {
    path: RoutesURL.USER_DASHBOARD,
    element: <UserDashboardPage />,
  },
  {
    path: RoutesURL.USER,
    element: <UserPage />,
  },
  {
    path: RoutesURL.NOT_FOUND_PAGE,
    element: <NotFoundPage />,
  },
  {
    path: RoutesURL.SIGN_IN,
    element: <SignInPage />,
  },
  {
    path: RoutesURL.SIGN_UP,
    element: <SignUpPage />,
  },
  {
    path: RoutesURL.RESET_PASSWORD,
    element: <ResetPasswordPage />,
  },
]
