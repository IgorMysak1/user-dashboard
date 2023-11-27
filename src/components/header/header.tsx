import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../../constants'

interface HeaderProps {
  title: string
  icon?: React.ReactNode
}

export const Header = ({ title, icon }: HeaderProps) => {
  return (
    <Wrapper>
      {icon}
      <Title>{title}</Title>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
  @media (max-width: ${breakpoints.sm}px) {
    padding: 10px 0;
  }
`

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
`
