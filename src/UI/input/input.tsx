import React from 'react'
import styled from 'styled-components'

type ButtonProps = React.ComponentProps<'input'>
export const Input = ({ children, ...rest }: ButtonProps) => (
  <StyledInput {...rest}>{children}</StyledInput>
)

const StyledInput = styled.input`
  background-color: #f3f3f3;
  border: none;
  padding: 6px 10px;
  cursor: pointer;
  border-radius: 5px;

  &:disabled {
    opacity: 0.6;
  }
`
