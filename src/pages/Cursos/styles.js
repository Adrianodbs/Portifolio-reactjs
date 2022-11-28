import styled from 'styled-components'

export const Cursos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  ul {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 60px;
  }

  button {
    color: #000;
    cursor: pointer;
    padding: 10px;
    width: 140px;
    background-color: #fff;
    border-radius: 8px;
    font-weight: bold;
    text-transform: uppercase;
    &:hover {
      opacity: 0.8;
    }
  }
  button.active {
    background: #ff328e !important;
  }
`

export const Content = styled.div`
  background-color: rgba(100, 100, 100, 0.7);
  border-radius: 8px;
  margin-top: 40px;
  width: 90%;
  height: 70vh;
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
  }
  ::-webkit-scrollbar-track-piece {
    background: rgba(0, 0, 0, 0.6);
  }
  ::-webkit-scrollbar-corner {
    background: rgba(0, 0, 0, 0.6);
  }
  padding: 20px;

  p {
    color: #fff;
    font-size: 20px;
    padding: 5px;
    border-bottom: 2px solid rgba(100, 100, 100, 0.9);
    margin-bottom: 10px;
  }

  strong {
    color: rgba(0, 0, 0, 0.6);
  }

  span {
    color: #ff328e;
    font-weight: bold;
  }
`
