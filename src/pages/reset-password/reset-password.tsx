import { PageWrapper } from '../../components'
import { Button, Input } from '../../UI'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { RoutesURL } from '../../types'
import styled from 'styled-components'

export const ResetPasswordPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  return (
    <PageWrapper>
      <Wrapper>
        <Title>Reset Password</Title>
        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          placeholder={'Enter name'}
        />
        <Button onClick={() => navigate(RoutesURL.USER_DASHBOARD)}>
          Reset Password
        </Button>
        <Links>
          <NavLink to={RoutesURL.SIGN_IN}>Sign in</NavLink>
          <span>|</span>
          <NavLink to={RoutesURL.SIGN_UP}>Sign up</NavLink>
        </Links>
      </Wrapper>
    </PageWrapper>
  )
}

const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Title = styled.h1`
  font-size: 24px;
`

const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`
