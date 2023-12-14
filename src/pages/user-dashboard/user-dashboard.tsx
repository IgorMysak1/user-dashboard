import { Header, PageWrapper } from '../../components'
import { DashboardIcon } from '../../assets/icons/dashboard.tsx'
import { Dashboard } from './components/board'

export const UserDashboardPage = () => {
  return (
    <PageWrapper>
      <Header title={'User Dashboard'} icon={<DashboardIcon />} />
      <Dashboard />
    </PageWrapper>
  )
}
