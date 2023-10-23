import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 32px;

  h2 {
    font-size: 32px;
  }

  h1 {
    font-size: 48px;
    margin-top: 12px;
    text-align: center;
  }

  span {
    color: var(--purple);
  }
`

export const Links = styled.div`
  display: flex;
  padding: 12px;
  gap: 24px;
`

export const Projects = styled.div`
  margin: 24px auto;

  h2 {
    font-size: 32px;
    text-align: center;
    margin-bottom: 24px;
  }
`
