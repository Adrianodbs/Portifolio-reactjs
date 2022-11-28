import styled from 'styled-components'

export const Page = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  min-width: 100%;
  height: 100vh;
`

export const Sidebar = styled.header`
  min-width: 250px;
  height: 100vh;
  position: relative;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  background: rgba(10, 10, 10, 0.65);
  box-shadow: 0 8px 32px rgb(2, 4, 24);
  border-right: 2px solid rgba(255, 255, 255, 0.09);
  transition: 0.4s ease-in-out;
  color: #fff;

  /* hr {
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    margin: 10px 8px;
    border-radius: 10px;
  } */
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
`

export const Logo = styled.img`
  width: 70px;
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
    gap: 10px;
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
  }
`

// export const Contato = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 50px;
//   p {
//     margin-bottom: 15px;
//     font-size: 14px;
//     display: flex;
//     align-items: center;
//     gap: 10px;
//   }
// `

// export const Content = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 0 auto;
//   width: 100%;
// `
