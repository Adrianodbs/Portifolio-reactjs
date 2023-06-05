import * as C from './styles'
import logo from '../../img/programador.png'

//Icons
import {
  AiOutlineHome,
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineDollarCircle
} from 'react-icons/ai'
import { FaReact } from 'react-icons/fa'
import { GoBook } from 'react-icons/go'
import { GiNotebook } from 'react-icons/gi'

//Hooks
import { useState } from 'react'

//Pages
import Home from '../../pages/Home'
import PersonalListContainer from '../../pages/Personal'
import Cursos from '../../pages/Cursos'
import ProfessionalListContainer from '../../pages/Professional'
import CourseListContainer from '../../pages/CourseProjects'

function Header() {
  const [menu, setMenu] = useState(1)

  const action = index => {
    setMenu(index)
  }
  return (
    <C.Page>
      <C.Sidebar>
        <C.Title>
          <C.Logo src={logo} alt="" />
          <h3>Adriano Alves</h3>
          <h3>Desenvolvedor Front-End</h3>
        </C.Title>
        <C.UlContent>
          <ul>
            <li
              className={`${menu === 1 ? 'active' : ''}`}
              onClick={() => action(1)}
            >
              <AiOutlineHome size={25} />
              <span>Home</span>
            </li>

            <li
              className={`${menu === 2 ? 'active' : ''}`}
              onClick={() => action(2)}
            >
              <FaReact size={25} />
              <span>Projetos Pessoais</span>
            </li>
            <li
              className={`${menu === 3 ? 'active' : ''}`}
              onClick={() => action(3)}
            >
              <AiOutlineDollarCircle size={25} />
              <span>Projetos Profissionais</span>
            </li>
            <li
              className={`${menu === 4 ? 'active' : ''}`}
              onClick={() => action(4)}
            >
              <GiNotebook size={25} />
              <span>Projetos de cursos</span>
            </li>
            <li
              className={`${menu === 5 ? 'active' : ''}`}
              onClick={() => action(5)}
            >
              <GoBook size={25} />
              <span>Cursos</span>
            </li>
          </ul>
        </C.UlContent>
        <C.Redes>
          <a href="https://github.com/Adrianodbs" target="_blank">
            <AiFillGithub size={45} color="#fff" />
          </a>
          <a
            href="https://www.linkedin.com/in/adriano-alves-4294b2168/"
            target="_blank"
          >
            <AiFillLinkedin size={45} color="#fff" />
          </a>
          <a href="https://www.instagram.com/_adrianoalvess_/" target="_blank">
            <AiFillInstagram size={45} color="#fff" />
          </a>
        </C.Redes>
      </C.Sidebar>

      <C.Content>
        {menu === 1 && <Home />}
        {menu === 2 && <PersonalListContainer />}
        {menu === 3 && <ProfessionalListContainer />}
        {menu === 4 && <CourseListContainer />}
        {menu === 5 && <Cursos />}
      </C.Content>
    </C.Page>
  )
}

export default Header
