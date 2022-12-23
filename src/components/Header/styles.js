import styled from 'styled-components'

export const Page = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  min-width: 100%;
  height: 100vh;

  @media (max-width: 770px) {
    grid-template-columns: 1fr 8fr;
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`

export const Sidebar = styled.header`
  min-width: 250px;
  max-height: 100vh;
  position: relative;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  background: rgba(10, 10, 10, 0.65);
  box-shadow: 0 8px 32px rgb(2, 4, 24);
  border-right: 2px solid rgba(255, 255, 255, 0.09);
  transition: 0.4s ease-in-out;
  color: #fff;

  @media (max-width: 850px) {
    min-width: 200px;
  }

  @media (max-width: 770px) {
    min-width: 50px;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 20px;
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  @media (max-width: 850px) {
    margin-bottom: 20px;
  }

  @media (max-width: 600px) {
    margin-bottom: 0;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
    @media (max-width: 850px) {
      display: none;
    }
  }
`

export const Logo = styled.img`
  width: 70px;
  margin: 20px auto;
  @media (max-width: 850px) {
    width: 50px;
  }
  @media (max-width: 600px) {
    margin: 0;
    padding: 5px 0;
  }
`
export const UlContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (max-width: 770px) {
      gap: 30px;
      margin-top: 20px;
    }

    @media (max-width: 600px) {
      display: flex;
      flex-direction: row;
      margin-top: 0;
    }
  }

  li {
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 10px;
    transition: all 0.3s;
  }

  li.active {
    background: #ff328e !important;
    border-radius: 5px;
  }

  span {
    font-size: 18px;
    @media (max-width: 850px) {
      font-size: 16px;
    }
    @media (max-width: 770px) {
      display: none;
    }
  }
`

export const Content = styled.div`
  display: flex;
  padding: 10px;
`

export const Redes = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;

  @media (max-width: 850px) {
    svg {
      width: 30px;
    }
  }

  @media (max-width: 770px) {
    display: none;
  }

  @keyframes animate {
    0%,
    100% {
      color: deeppink;
    }

    25% {
      color: deepskyblue;
    }

    50% {
      color: lawngreen;
    }

    75% {
      color: yellow;
    }
  }

  a svg:hover {
    text-shadow: 0 0 15px;
    animation: animate 1.5s infinite linear;
  }
`
