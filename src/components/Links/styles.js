import styled from 'styled-components'

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  width: 240px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 1000px) {
    width: 90%;
    padding: 10px;
  }

  @media (max-width: 520px) {
    gap: 40px;
  }

  img {
    width: 120px;
    @media (max-width: 1000px) {
      width: 80px;
    }
    @media (max-width: 850px) {
      width: 60px;
    }
  }

  h2 {
    @media (max-width: 850px) {
      font-size: 19px;
    }
  }

  p {
    @media (max-width: 520px) {
      display: none;
    }
  }
`
