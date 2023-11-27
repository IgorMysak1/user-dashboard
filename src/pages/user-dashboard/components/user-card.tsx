import styled from 'styled-components'
import { User } from '../../../types/user.ts'
import MAN_AVATAR from '../../../assets/images/man.png'
import { RoutesURL } from '../../../types'
import { useNavigate } from 'react-router-dom'
import { breakpoints } from '../../../constants'

interface UserCardProps extends User {
  redirectToUserInfo: VoidFunction
}

export const UserCard = ({ id, email, firstName, gender }: UserCardProps) => {
  const navigate = useNavigate()
  const redirectToUserInfo = () => navigate(RoutesURL.USER.replace(':id', id))

  return (
    <Wrapper onClick={redirectToUserInfo}>
      <Avatar src={MAN_AVATAR} alt='avatar' />
      <TextWrapper>
        <p>{firstName}</p>
        <p>{email}</p>
        <p>{gender}</p>
      </TextWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  background: #d3deff;
  padding: 15px;
  cursor: pointer;
  border-radius: 8px;
  gap: 10px;
  @media (max-width: ${breakpoints.xs}px) {
    padding: 10px;
  }
`
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Avatar = styled.img`
  height: 50px;
  width: 50px;
`
