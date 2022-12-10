import styled from 'styled-components'

export const Paginas = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 95vh;

  overflow: scroll;
  ::-webkit-scrollbar-track {
    display: none;
  }
  ::-webkit-scrollbar {
    background: rgba(0, 0, 0, 0.6);
  }
  ::-webkit-scrollbar-thumb {
    background: #ff328e90;
    border-radius: 10px;
    width: 50px;
  }
  ::-webkit-scrollbar-track-piece {
    background: rgba(0, 0, 0, 0.6);
  }
  ::-webkit-scrollbar-corner {
    background: rgba(0, 0, 0, 0.6);
  }
  padding: 20px;

  a {
    text-decoration: none;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 8px;
  }

  p {
    text-transform: uppercase;
    font-size: 30px;
    font-weight: bold;
    padding: 20px;
    @media (max-width: 520px) {
      font-size: 18px;
      padding: 15px;
    }
  }

  img {
    width: 80%;
    border-radius: 8px;
    margin-bottom: 15px;
  }

  span {
    width: 60%;
    text-align: center;
    font-size: 22px;
    margin-bottom: 15px;
    @media (max-width: 520px) {
      font-size: 16px;
      width: 80%;
    }
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  h4 {
    font-size: 16px;
    margin-bottom: 10px;
    border: 1px solid #fff;
    padding: 6px 12px;
    border-radius: 20px;
    @media (max-width: 520px) {
      font-size: 13px;
    }
  }
`
