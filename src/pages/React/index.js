import React from 'react'
import Links from '../../components/Links'
import imgReact from '../../img/react.png'
import { Container } from './styles'

function ReactPages() {
  return (
    <Container>
      <Links
        url="https://adrianodbs.github.io/P-ginas-React/"
        titulo="Páginas React"
        img={imgReact}
        descricao="Todas as páginas desenvolvidas com React podem ser encontradas através desse link"
      />
    </Container>
  )
}

export default ReactPages
