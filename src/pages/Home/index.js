import foto from '../../img/pp.jpg'
import * as C from './styles'

function Home() {
  return (
    <C.HomePage>
      <img src={foto} alt="foto de perfil" />
      <p>
        Oi, me chamo Adriano Alves, tenho 29 anos, sou graduado em geografia e
        mestre em planejamento territorial, e atualmente busco a transição de
        carreira para área do desenvolvimento Front End. Venho buscando
        desenvolver as minhas habilidades em HTML, CSS, JavaScript e React,
        principalmente com o auxílio dos cursos oferecidos pela plataforma de
        ensino Alura.
      </p>
    </C.HomePage>
  )
}

export default Home
