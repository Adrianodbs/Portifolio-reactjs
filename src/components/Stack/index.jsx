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
  width: 80px;

  img {
    width: 48px;
  }
  span {
    color: var(--gray);
    font-size: 14px;
    text-align: center;
  }
`
