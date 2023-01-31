import styled from 'styled-components'
import { NAV_BAR_HEIGHT } from '@/components/styles/NavBar.styled'

// Main Containers
export const MainContainer = styled.div`
  height: calc(100vh - ${NAV_BAR_HEIGHT});
  overflow: hidden;
`

export const InformationMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  margin: 3rem auto;
  max-width: 70rem;
  padding: 0 3rem;
`
