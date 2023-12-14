import { PageWrapper } from '../../components'
import { Button, Input } from '../../UI'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { RoutesURL } from '../../types'
import styled from 'styled-components'

export const SignInPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <PageWrapper>
      <Wrapper>
        <Title>Sign in</Title>
        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          placeholder={'Enter email'}
        />
        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          placeholder={'Enter password'}
        />
        <Button onClick={() => navigate(RoutesURL.USER_DASHBOARD)}>
          Sign In
        </Button>
        <Links>
          <NavLink to={RoutesURL.RESET_PASSWORD}>Reset Password</NavLink>
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
