import styled from 'styled-components'

export default function ButtonLink({ link, children }) {
  return (
    <BtnLink>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </BtnLink>
  )
}

const BtnLink = styled.button`
  border: 1px solid #fff;
  padding: 12px;
  border-radius: 24px;
  cursor: pointer;
  min-width: 148px;
  margin-top: 20px;
  background-color: var(--black);

  &:hover {
    background-color: var(--purple);
    border: none;
  }

  @media (max-width: 620px) {
    padding: 8px;
    min-width: 100px;
  }

  a {
    font-weight: bold;
    font-size: 24px;
    background-color: transparent;
    text-decoration: none;
    color: #fff;

    @media (max-width: 620px) {
      font-size: 20px;
    }
  }
`
