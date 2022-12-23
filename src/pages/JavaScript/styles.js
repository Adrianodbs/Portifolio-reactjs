import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  /* background-color: rgba(0, 0, 0, 0.8); */
  margin: auto;
  min-width: 100%;

  border-radius: 8px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  @media (max-width: 600px) {
    max-height: 80vh;
  }
`
