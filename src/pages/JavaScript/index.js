import { Container } from './styles'
import { Paginas } from '../../components/Paginas/styles'

import disney from '../../img/disneyland.png'
import pokeball from '../../img/pokeball.png'
import lampada from '../../img/gerenciamento-de-projetos.png'

import { ListaJavaScript } from './listaJs'

import Links from '../../components/Links'

function ProjetosJavaScript() {
  return (
    <Container>
      <Paginas>
        {ListaJavaScript.map(projeto => (
          <a href={projeto.url} target="_blank">
            <p>{projeto.nome}</p>
            <img src={projeto.img} alt={projeto.nome} />
            <span>{projeto.desrcricao}</span>
          </a>
        ))}
      </Paginas>
    </Container>
  )
}

export default ProjetosJavaScript
