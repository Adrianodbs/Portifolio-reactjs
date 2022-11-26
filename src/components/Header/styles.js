import styled from 'styled-components'

export const Sidebar = styled.header`
  width: 300px;
  height: 100vh;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  background: rgba(10, 10, 10, 0.65);
  box-shadow: 0 8px 32px rgb(2, 4, 24);
  border-right: 2px solid rgba(255, 255, 255, 0.09);
  transition: 0.4s ease-in-out;
  color: #fff;

  hr {
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    margin: 20px 8px;
    border-radius: 10px;
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 22px;
    margin-bottom: 50px;
  }
`

export const Logo = styled.img`
  width: 80px;
  margin: 20px auto;
`
export const UlContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  li {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  span {
    font-size: 18px;
  }
`

export const Contato = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  p {
    margin-bottom: 15px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`
