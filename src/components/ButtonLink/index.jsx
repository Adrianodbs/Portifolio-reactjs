import styled from 'styled-components'

export default function ButtonLink({ link, children, ...props }) {
  return (
    <BtnLink {...props}>
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

  &:hover {
    background-color: var(--purple);
    border: none;
  }

  a {
    font-weight: bold;
    font-size: 24px;
    background-color: transparent;
    text-decoration: none;
  }
`
