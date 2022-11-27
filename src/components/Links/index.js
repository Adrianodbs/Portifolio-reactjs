import React from 'react'
import pokeball from '../../img/pokeball.png'
import { Link } from './styles'

function Links({ img, titulo, descricao, url }) {
  return (
    <Link href={url} target="_blank">
      <img src={img} alt={titulo} />
      <h2>{titulo}</h2>
      <p>{descricao}</p>
    </Link>
  )
}

export default Links
