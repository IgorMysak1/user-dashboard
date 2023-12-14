import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../../constants'
import { UserSingleIcon } from '../../assets/icons/user/user-single.tsx'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { RoutesURL } from '../../types'

interface HeaderProps {
  title: string
  icon?: React.ReactNode
}

export const Header = ({ title, icon }: HeaderProps) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const gotoHome = () => {
    if (pathname !== RoutesURL.USER_DASHBOARD) {
      navigate(RoutesURL.USER_DASHBOARD)
    }
  }
  return (
    <Wrapper>
      <PageTitle onClick={gotoHome}>
        {icon}
        <Title>{title}</Title>
      </PageTitle>
      <NavLink to={RoutesURL.PROFILE}>
        <UserSingleIcon />
      </NavLink>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 0;
  @media (max-width: ${breakpoints.sm}px) {
    padding: 10px 0;
  }
`

const PageTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
`
