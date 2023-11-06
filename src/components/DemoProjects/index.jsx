import { FiGithub } from 'react-icons/fi'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { MainList } from '../List/MainList'
import * as C from './style'
import { useNavigate } from 'react-router-dom'

export default function DemoProjects() {
  const navigate = useNavigate()

  const handleProjectsClick = () => {
    navigate('/projects')
  }
  return (
    <C.Container>
      {MainList.map((i, index) => (
        <C.Content key={index}>
          <div className="top">
            <div className="text">
              <h2>{i.title}</h2>
              <p>{i.description}</p>
            </div>
            <div>
              <img src={i.img} alt={i.title} />
            </div>
          </div>
          <div className="bottom">
            <span>Tecnologias utilizadas:</span>
            <div className="tags">
              {i.tags.map((tag, index) => (
                <div>
                  <h4 key={index} className="icons">
                    {tag}
                  </h4>
                </div>
              ))}
            </div>
            <div className="btn">
              <a href={i.github} target="_blank" rel="noopener noreferrer">
                Ver no GitHub <FiGithub />
              </a>
              <a href={i.url} target="_blank" rel="noopener noreferrer">
                Visitar o site <BsBoxArrowUpRight />
              </a>
            </div>
          </div>
        </C.Content>
      ))}
      <button onClick={handleProjectsClick}>Ver todos os projetos</button>
    </C.Container>
  )
}
