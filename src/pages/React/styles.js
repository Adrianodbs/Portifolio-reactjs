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
  height: 80vh;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

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

  .projeto-container {
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
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  h5 {
    font-size: 22px;

    @media (max-width: 520px) {
      font-size: 18px;
    }
  }

  .icons {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    font-size: 30px;
    margin-bottom: 10px;

    color: #ff328e;

    @media (max-width: 520px) {
      font-size: 20px;
    }
  }

  .repositorio {
    text-decoration: none;
    padding: 10px 20px;
    color: #fff;
    font-weight: bold;
    border: 1px solid #fff;
    margin: 20px 0;
    border-radius: 30px;
    background-color: #000;
    transition: all 0.4s;

    &:hover {
      opacity: 0.5;
    }
  }
`
