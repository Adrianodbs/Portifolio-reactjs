import Links from '../../components/Links'
import { Container } from './styles'
import casa from '../../img/casa.png'

function HtmlCss() {
  return (
    <Container>
      <Links
        url="https://adrianodbs.github.io/colecao_de_paginas/"
        titulo="Coleção de páginas"
        img={casa}
        descricao="Um agrupamento de páginas que desenvolvi como forma de treinamento dos meus estudos."
      />
    </Container>
  )
}

export default HtmlCss
