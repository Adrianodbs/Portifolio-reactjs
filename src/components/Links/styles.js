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

  img {
    width: 120px;
  }
`
