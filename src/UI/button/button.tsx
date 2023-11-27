import React from 'react'
import styled from 'styled-components'

type ButtonProps = React.ComponentProps<'button'>
export const Button = ({ children, ...rest }: ButtonProps) => (
  <StyledButton {...rest}>{children}</StyledButton>
)

const StyledButton = styled.button`
  background-color: #ffb84d;
  border: none;
  padding: 5px 10px;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  &:disabled {
    opacity: 0.6;
  }
`
