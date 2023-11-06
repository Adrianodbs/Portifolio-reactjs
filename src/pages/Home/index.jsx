import * as C from './styles'

import { FaReact, FaJava, FaSass } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import {
  SiTypescript,
  SiStyledcomponents,
  SiTailwindcss,
  SiSpring
} from 'react-icons/si'
import ButtonLink from '../../components/ButtonLink'
import DemoProjects from '../../components/DemoProjects'

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
      <C.Links>
        <ButtonLink link="https://github.com/Adrianodbs">GitHub</ButtonLink>
        <ButtonLink link="https://www.linkedin.com/in/adriano-alves-4294b2168/">
          LinkedIn
        </ButtonLink>
      </C.Links>
      <C.Projects>
        <h2>Aqui estão alguns dos meus principais projetos...</h2>
        <DemoProjects />
      </C.Projects>
    </C.Container>
  )
}

export default Home
