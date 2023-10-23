import { FiGithub } from 'react-icons/fi'
import { MainList } from '../List/MainList'
import * as C from './style'

export default function DemoProjects() {
  return (
    <C.Container>
      {MainList.map((i, index) => (
        <C.Content key={index}>
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
        </C.Content>
      ))}
    </C.Container>
  )
}
