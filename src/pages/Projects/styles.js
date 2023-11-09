import styled from 'styled-components'

export const Container = styled.div`
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

  h1 {
    font-size: 60px;
    text-align: center;
  }

  p {
    width: 90%;
    text-align: center;
    margin-top: 16px;
    font-size: 24px;
  }

  .projects {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
    flex-wrap: wrap;
    margin-top: 20px;
  }
`
