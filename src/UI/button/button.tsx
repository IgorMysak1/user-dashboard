import React from 'react'
import styled from 'styled-components'

type ButtonProps = React.ComponentProps<'button'>
export const Button = ({ children, ...rest }: ButtonProps) => (
  <StyledButton {...rest}>{children}</StyledButton>
)

const StyledButton = styled.button`
  background-color: #b0ced9;
  border: none;
  padding: 6px 10px;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;

  &:disabled {
    opacity: 0.6;
  }
`
