import styled from 'styled-components'

export const Container = styled.div`
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 220px;
    border-radius: 50%;
    margin: 40px auto;
  }

  h2 {
    color: var(--purple);
    font-size: 36px;
    margin-bottom: 24px;
    text-align: center;
  }

  p {
    color: #fff;
    text-align: center;
    width: 90%;
    max-width: 1000px;
    font-size: 20px;
    margin-bottom: 24px;
  }
`

export const Experience = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;

  h1 {
    color: #fff;
    margin: 40px auto;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    justify-content: center;
    align-items: center;
    gap: 32px;
  }
`
