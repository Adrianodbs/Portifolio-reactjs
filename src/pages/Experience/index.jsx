import Skills from '../../components/Skills'
import perfil from '../../img/perfil.jpg'
import * as C from './styles'

export default function Experience() {
  return (
    <C.Container>
      <C.Top>
        <img src={perfil} alt="Foto do perfil" />
        <h2>Desenvolvedor Front-End | Mobile</h2>
        <p>
          Tenho 2 anos de experiência no desenvolvimento web/ mobile e
          atualmente estou cursando duas pós-graduações (Desenvolvimento Full
          Stack e Projetos de Aplicativos Móveis Multiplataforma), além de
          aprimorar meus conhecimentos em React, JavaScript, TypeScript, Java e
          Spring Boot.
        </p>
      </C.Top>
      <Skills />
    </C.Container>
  )
}
