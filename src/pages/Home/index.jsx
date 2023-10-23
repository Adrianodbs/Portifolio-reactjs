import * as C from './styles'

import { FaReact, FaJava, FaSass } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import {
  SiTypescript,
  SiStyledcomponents,
  SiTailwindcss,
  SiSpring
} from 'react-icons/si'

function Home() {
  return (
    <C.Container>
      <C.Title>
        <h2>
          Olá <span>^-^</span>
        </h2>
        <h1>
          Me chamo <span>Adriano Alves</span> <br /> Dev.{' '}
          <span>Front-End / Mobile</span>
        </h1>
      </C.Title>
      <C.Links></C.Links>
    </C.Container>
  )
}

export default Home
