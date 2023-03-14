import { Container } from './styles'
import { Paginas } from '../../components/Paginas/styles'

import { ListaJavaScript } from './listaJs'

function ProjetosJavaScript() {
  return (
    <Container>
      <Paginas>
        {ListaJavaScript.map(projeto => (
          <a href={projeto.url} target="_blank" className="projeto-container">
            <p>{projeto.nome}</p>
            <img src={projeto.img} alt={projeto.nome} />
            <span>{projeto.desrcricao}</span>
            <div className="tags">
              {projeto.tags.map(tag => (
                <h4>{tag}</h4>
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

export default ProjetosJavaScript
