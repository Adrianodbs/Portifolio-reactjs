import { Container, Paginas } from './styles'

import { ListaReact } from './listaReact'

function ReactPages() {
  return (
    <Container>
      <Paginas>
        {ListaReact.map((projeto, index) => (
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

export default ReactPages
