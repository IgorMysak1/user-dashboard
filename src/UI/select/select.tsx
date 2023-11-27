import React from 'react'
import styled from 'styled-components'

export interface SelectItems {
  value?: string | number | null
  label: string | number
}

interface SelectProps extends React.ComponentProps<'select'> {
  items: SelectItems[]
}

export const Select = ({ items, ...props }: SelectProps) => {
  return (
    <StyledSelect {...props}>
      {items.map(({ value, label }) => (
        <option key={value ?? label} value={value ?? label}>
          {label}
        </option>
      ))}
    </StyledSelect>
  )
}

const StyledSelect = styled.select`
  padding: 4px 10px;
  border-radius: 4px;
  background: #e6e9f0;
  border: 1px solid #181863;
  &:disabled {
    opacity: 0.6;
  }
`
