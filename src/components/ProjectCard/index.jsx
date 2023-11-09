import styled from 'styled-components'
import { FiGithub } from 'react-icons/fi'
import { BsBoxArrowUpRight } from 'react-icons/bs'

export default function ProjectCard({ img, title, github, url }) {
  return (
    <Container>
      <img src={img} alt={title} />
      <div className="info">
        <p>{title}</p>
        <div className="links">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FiGithub />
          </a>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <BsBoxArrowUpRight />
          </a>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 460px;
    height: 280px;
    object-fit: contain;
    border: 1px solid var(--gray);
    padding: 8px;
    border-radius: 8px;

    @media (max-width: 500px) {
      width: 280px;
      height: 140px;
    }
  }

  .info {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
    gap: 12px;
    width: 100%;
  }

  p {
    text-align: left;
    @media (max-width: 500px) {
      font-size: 14px;
    }
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 20px;

    a {
      text-decoration: none;
      color: #fff;

      svg {
        font-size: 20px;

        @media (max-width: 500px) {
          font-size: 16px;
        }

        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
`
