import { Header } from '../../components'
import { DashboardIcon } from '../../assets/icons/dashboard.tsx'
import { Dashboard } from './components/board'

export const UserDashboard = () => {
  return (
    <>
      <Header title={'User Dashboard'} icon={<DashboardIcon />} />
      <Dashboard />
    </>
  )
}
