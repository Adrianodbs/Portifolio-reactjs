import styled from 'styled-components'

export default function ExperienceCard({ img, title, duration }) {
  return (
    <Container>
      <img src={img} alt={title} />
      <div className="info">
        <h4>{title}</h4>
        <span>{duration}</span>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 90%;
  max-width: 480px;
  border: 1px solid var(--purple);
  padding: 10px;
  border-radius: 8px;
  gap: 24px;

  img {
    width: 60px;
    object-fit: contain;
  }

  h4 {
    font-size: 20px;
    color: #fff;
    margin-bottom: 8px;

    @media (max-width: 500px) {
      font-size: 16px;
    }
  }

  span {
    color: var(--gray);
    @media (max-width: 500px) {
      font-size: 14px;
    }
  }
`
