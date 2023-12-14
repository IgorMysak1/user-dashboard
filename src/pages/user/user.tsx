import { Header, PageWrapper } from '../../components'
import { UserDoubleIcon } from '../../assets/icons/user/user-double.tsx'
import { useNavigate, useParams } from 'react-router-dom'
import { UserInfo } from './components/user-info.tsx'
import styled from 'styled-components'
import { Button } from '../../UI'
import USERS from '../../data/customers.json'

const LOADING = false // request simulation
export const UserPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const userData = USERS.find((user) => user.id === id)

  return (
    <PageWrapper>
      <Header title={'User'} icon={<UserDoubleIcon />} />
      <GoBackButton onClick={() => navigate(-1)}>Go back to list</GoBackButton>
      {LOADING && <Notification>Loading...</Notification>}
      {userData && !LOADING && <UserInfo {...userData} />}
      {!userData && !LOADING && (
        <Notification>Current user does not exist</Notification>
      )}
    </PageWrapper>
  )
}

const Notification = styled.p`
  text-align: center;
  font-size: 24px;
  padding: 30px 0;
`

const GoBackButton = styled(Button)`
  margin: 0 auto 20px 0;
  font-size: 16px;
`
