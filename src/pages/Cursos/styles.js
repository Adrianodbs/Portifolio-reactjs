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
  background-color: #ccc;
  margin-top: 40px;
  width: 90%;
  min-height: 70vh;
`
