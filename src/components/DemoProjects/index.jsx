import styled from 'styled-components'
import { FiGithub } from 'react-icons/fi'
import { MainList } from '../List/MainList'

export default function DemoProjects() {
  return (
    <>
      {MainList.map((i, index) => (
        <Container key={index}>
          <a href={i.url} target="_blank" rel="noopener noreferrer">
            <img src={i.img} alt={i.title} />
            <div className="content">
              <div className="title">
                <h3>{i.title}</h3>
                <a href={i.github} target="_blank" rel="noopener noreferrer">
                  <FiGithub color="#6B21A8" size={16} />
                </a>
              </div>
              <p>{i.description}</p>
              <div className="tags">
                {i.tags.map((tag, index) => (
                  <h4 key={index} className="icons">
                    {tag}
                  </h4>
                ))}
              </div>
            </div>
          </a>
        </Container>
      ))}
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #fff;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border: 1px solid #fff;
    padding: 8px;
    border-radius: 4px;
  }

  .content {
    padding: 8px;

    p {
      width: 100%;
    }
  }

  .title {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
  }

  .tags {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    margin-top: 12px;

    svg {
      font-size: 24px;
    }
  }
`
