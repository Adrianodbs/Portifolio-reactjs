import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: var(--black);
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 32px;

  h2 {
    font-size: 32px;

    @media (max-width: 620px) {
      font-size: 26px;
    }
  }

  h1 {
    font-size: 48px;
    margin-top: 12px;
    text-align: center;

    @media (max-width: 620px) {
      font-size: 32px;
    }
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 32px;
    text-align: center;
    margin-bottom: 24px;

    @media (max-width: 500px) {
      font-size: 24px;
    }
  }

  button {
    max-width: 480px;
    width: 90%;
    padding: 12px;
    cursor: pointer;
    color: #fff;
    border: 1px solid #fff;
    font-size: 18px;
    border-radius: 12px;
    background-color: var(--black);

    &:hover {
      background-color: var(--purple);
    }
  }
`
