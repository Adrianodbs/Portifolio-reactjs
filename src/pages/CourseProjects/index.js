import { Container, Paginas } from '../../components/Projects/styles'

import { CourseList } from '../../components/List/couserList'

export default function CourseListContainer() {
  return (
    <Container>
      <Paginas>
        <h2
          style={{
            color: '#fff',
            alignSelf: 'center',
            padding: '10px',
            fontSize: '22px'
          }}
        >
          PROJETOS DE CURSOS.
        </h2>
        {CourseList.map((projeto, index) => (
          <div key={index} className="projeto-container">
            <p>{projeto.nome}</p>
            <img src={projeto.img} alt={projeto.nome} />
            <span>{projeto.descricao}</span>
            <div className="tags">
              {projeto.tags.map((tag, index) => (
                <h4 key={index} className="icons">
                  {tag}
                </h4>
              ))}
            </div>
            <div className="repositorio">
              <a href={projeto.url} target="_blank">
                Site
              </a>
              <a href={projeto.github} target="_blank">
                Repositório
              </a>
            </div>
          </div>
        ))}
      </Paginas>
    </Container>
  )
}
