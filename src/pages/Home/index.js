import foto from '../../img/perfil2.jpg'
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
    <C.HomePage>
      <div className="top">
        <img src={foto} alt="foto de perfil" />
        <div className="texto">
          <h1>Desenvolvedor Full Stack | React</h1>
          <p>
            Tenoh 2 anos de experiência no desenvolvimento web e atualmente
            estou cursando duas pós-graduações (Desenvolvimento Full Stack e
            Projetos de Aplicativos Móveis Multiplataforma), além de aprimorar
            meus conhecimentos em React, JavaScript, TypeScript, Java e Spring
            Boot.
          </p>
        </div>
      </div>
      <div className="button">
        <h3>Tech Stack |</h3>
        <div className="stacks">
          <FaReact color="#61DAFB" />
          <IoLogoJavascript color="#EFD81D" />
          <SiTypescript color="#0076C6" />
          <SiStyledcomponents color="#D06EAA" />
          <SiTailwindcss color="#07B0CE" />
          <FaSass color="#C76494" />
          <FaJava color="#F7BA00" />
          <SiSpring color="#6CAE3E" />
        </div>
      </div>
    </C.HomePage>
  )
}

export default Home
