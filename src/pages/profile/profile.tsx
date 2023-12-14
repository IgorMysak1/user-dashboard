import { ProfileData, ProfileSkills } from './components'
import { Header, PageWrapper } from '../../components'
import { DashboardIcon } from '../../assets/icons/dashboard.tsx'

interface ProfileProps {}

export const ProfilePage = ({}: ProfileProps) => {
  return (
    <PageWrapper>
      <Header title={'Profile'} icon={<DashboardIcon />} />
      <ProfileData />
      <ProfileSkills />
    </PageWrapper>
  )
}
