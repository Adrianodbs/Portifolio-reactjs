import styled from 'styled-components'

export default function Stack({ img, title }) {
  return (
    <Container>
      <img src={img} alt={title} />
      <span>{title}</span>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px;

  img {
    width: 60px;
  }
  span {
    color: var(--gray);
  }
`
