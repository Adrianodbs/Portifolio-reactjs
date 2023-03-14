import styled from 'styled-components'

export const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 60px;
    @media (max-width: 560px) {
      padding: 10px 0;
    }

    .texto {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      h1 {
        color: #fff;
        font-size: 30px;
        margin-bottom: 10px;
        width: 90%;
      }

      p {
        color: #fff;
        width: 60%;
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        @media (max-width: 850px) {
          width: 80%;
          font-size: 19px;
        }
        @media (max-width: 430px) {
          width: 100%;
          font-size: 16px;
        }
      }
    }

    img {
      width: 200px;
      border-radius: 50%;
      margin-bottom: 20px;
      @media (max-width: 850px) {
        width: 120px;
      }
    }
  }

  .button {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    .stacks {
      display: flex;
      gap: 7px;
      margin-left: 12px;
    }

    svg {
      font-size: 26px;
    }
  }
`
