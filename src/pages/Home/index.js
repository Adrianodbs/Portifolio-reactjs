import foto from '../../img/perfil2.jpg'
import * as C from './styles'

import { FaReact, FaHtml5, FaCss3Alt, FaSass } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiTypescript, SiStyledcomponents, SiTailwindcss } from 'react-icons/si'

function Home() {
  return (
    <C.HomePage>
      <div className="top">
        <img src={foto} alt="foto de perfil" />
        <div className="texto">
          <h1>Desenvolvedor Front-End | React</h1>
          <p>
            Oi, me chamo Adriano Alves, tenho 29 anos, estudo programação desde
            Outubro de 2021 e atualmente busco a transição de carreira para área
            do desenvolvimento Front-End. Venho buscando desenvolver as minhas
            habilidades em JavaScript, TypeScript e React.
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
        </div>
      </div>
    </C.HomePage>
  )
}

export default Home
