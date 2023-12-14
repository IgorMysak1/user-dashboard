import styled from 'styled-components'
import { PageWrapper } from '../../components'

export const NotFoundPage = () => {
  return (
    <PageWrapper>
      <TextStyled>404</TextStyled>
    </PageWrapper>
  )
}

const TextStyled = styled.h1`
  font-size: 200px;
  text-align: center;
  margin: auto;
`
