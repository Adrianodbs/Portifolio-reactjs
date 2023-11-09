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

  img {
    width: 460px;
    height: 280px;
    object-fit: contain;
    border: 1px solid var(--gray);
    padding: 8px;
    border-radius: 8px;
  }

  .info {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
  }

  .links {
    display: flex;
    align-items: center;
    gap: 12px;

    a {
      text-decoration: none;
      color: #fff;

      svg {
        font-size: 20px;

        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
`
