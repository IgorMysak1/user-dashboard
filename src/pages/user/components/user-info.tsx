import styled from 'styled-components'
import { User } from '../../../types/user.ts'
import MAN_AVATAR from '../../../assets/images/man.png'
import { breakpoints } from '../../../constants'

export const UserInfo = ({
  lastName,
  firstName,
  gender,
  postCode,
  state,
  street,
  streetNumber,
  email,
  country,
  city,
}: User) => {
  return (
    <Wrapper>
      <Avatar src={MAN_AVATAR} alt='avatar' />
      <DataWrapper>
        <h1>{`${firstName} ${lastName}`}</h1>
        <Text>Gender: {gender}</Text>
        <Text>Email: {email}</Text>
        <Text>City: {city}</Text>
        <Text>Country: {country}</Text>
        <Text>Street: {street}</Text>
        <Text>State: {state}</Text>
        <Text>Street Number: {streetNumber}</Text>
        <Text>Post Code: {postCode}</Text>
      </DataWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  @media (max-width: ${breakpoints.sm}px) {
    gap: 20px;
    flex-direction: column;
  }
`

const Avatar = styled.img`
  height: 250px;
  width: 250px;
  @media (max-width: ${breakpoints.xs}px) {
    height: 200px;
    width: 200px;
    margin: 0 auto;
  }
`

const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`
const Text = styled.p`
  font-size: 24px;
  @media (max-width: ${breakpoints.xs}px) {
    font-size: 20px;
  }
`
