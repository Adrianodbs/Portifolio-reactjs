import * as C from './styles'
import logo from '../../img/programador.png'

//Icons
import { AiOutlineHome, AiOutlineMobile, AiOutlineMail } from 'react-icons/ai'
import { TbBrandJavascript } from 'react-icons/tb'
import { FaReact } from 'react-icons/fa'
import { GoBook } from 'react-icons/go'

function Header() {
  return (
    <C.Sidebar>
      <C.Title>
        <C.Logo src={logo} alt="" />
        <h3>Adriano Alves</h3>
      </C.Title>
      <C.UlContent>
        <ul>
          <li>
            <AiOutlineHome size={25} />
            <span>Home</span>
          </li>
          <li>
            <TbBrandJavascript size={25} />
            <span>Projetos JavaScript</span>
          </li>
          <li>
            <FaReact size={25} />
            <span>Projetos React</span>
          </li>
          <li>
            <GoBook size={25} />
            <span>Cursos</span>
          </li>
        </ul>
      </C.UlContent>

      <hr />

      <C.Contato>
        <p>
          <AiOutlineMobile size={20} /> <span>(74) 99945-6227</span>
        </p>
        <p>
          <AiOutlineMail size={20} />{' '}
          <span>adriano_alves_2008@hotmail.com</span>
        </p>
      </C.Contato>
    </C.Sidebar>
  )
}

export default Header
