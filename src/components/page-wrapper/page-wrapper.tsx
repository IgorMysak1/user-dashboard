import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { breakpoints } from '../../constants'
export const PageWrapper = ({ children }: PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
  min-height: 100vh;
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 20px 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: ${breakpoints.sm}px) {
    padding: 0 16px 16px;
    gap: 10px;
  }
`
