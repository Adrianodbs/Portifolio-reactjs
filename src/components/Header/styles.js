import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 32px 48px;
  color: #fff;

  ul {
    display: flex;
    gap: 20px;

    a {
      text-decoration: none;
      color: #8b8b8c;

      &:hover {
        color: #fff;
      }
    }
  }
`
