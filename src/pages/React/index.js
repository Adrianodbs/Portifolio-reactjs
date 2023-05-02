import { Container, Paginas } from './styles'

import { ListaReact } from './listaReact'

function ReactPages() {
  return (
    <Container>
      <Paginas>
        {ListaReact.map(projeto => (
          <a href={projeto.url} target="_blank" className="projeto-container">
            <p>{projeto.nome}</p>
            <img src={projeto.img} alt={projeto.nome} />
            <span>{projeto.descricao}</span>
            <div className="tags">
              <h5>Tecnologias: </h5>
              {projeto.tags.map(tag => (
                <h4 className="icons">{tag}</h4>
              ))}
            </div>
            <a href={projeto.github} target="_blank" className="repositorio">
              Link do repositório
            </a>
          </a>
        ))}
      </Paginas>
    </Container>
  )
}

export default ReactPages
