import * as C from './styles'
import { AllProjects } from '../../components/List/AllProjects'
import ProjectCard from '../../components/ProjectCard'

export default function Projects() {
  return (
    <C.Container>
      <h1>Meus Projetos</h1>
      <p>
        Eu criei aplicativos, explorando uma ampla gama de tecnologias, como
        Node, React e React Native. Abaixo, você encontrará alguns dos meus
        projetos favoritos que representam minha jornada criativa.
      </p>
      <div className="projects">
        {AllProjects.map((project, i) => (
          <ProjectCard
            key={i}
            img={project.img}
            github={project.github}
            title={project.title}
            url={project.url}
          />
        ))}
      </div>
    </C.Container>
  )
}
