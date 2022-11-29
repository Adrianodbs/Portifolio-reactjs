import styled from 'styled-components'

export const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;

  img {
    width: 200px;
    border-radius: 50%;
    @media (max-width: 850px) {
      width: 120px;
    }
  }

  p {
    color: #fff;
    width: 60%;
    text-align: center;
    font-size: 22px;
    font-weight: 500;
    @media (max-width: 850px) {
      width: 80%;
      font-size: 19px;
    }
    @media (max-width: 430px) {
      width: 90%;
      font-size: 16px;
    }
  }
`
