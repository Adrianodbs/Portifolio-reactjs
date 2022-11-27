import { Container } from './styles'

import disney from '../../img/disneyland.png'
import pokeball from '../../img/pokeball.png'
import lampada from '../../img/gerenciamento-de-projetos.png'

import Links from '../../components/Links'

function ProjetosJavaScript() {
  return (
    <Container>
      <Links
        img={lampada}
        titulo="Mini-projetos"
        descricao="Seleção de mini-projetos, utilizando Html, css e JavaScript."
        url="https://adrianodbs.github.io/Mini-projetos/"
      />
      <Links
        img={pokeball}
        titulo="Pokedex"
        descricao='Projeto realizado com o auxílio do canal do Youtube "Dev em dobro", onde foi elaborado uma pokedex, utilizando HTML, CSS e JavaScript.'
        url="https://adrianodbs.github.io/Pokedex/"
      />
      <Links
        img={disney}
        titulo="Clone da página da Disney +"
        descricao='Um clone da página da Disney + realizada com o auxílio do canal no Youtube "Hello Codes".'
        url="https://adrianodbs.github.io/Clone-Disney/"
      />
    </Container>
  )
}

export default ProjetosJavaScript
