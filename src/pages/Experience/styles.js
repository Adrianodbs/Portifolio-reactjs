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
    max-width: 800px;
    font-size: 20px;
    margin-bottom: 24px;
  }
`
