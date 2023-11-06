import * as C from './styles'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { FaCode } from 'react-icons/fa'

import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'

import { Link } from 'react-router-dom'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <C.Header>
      <C.Title>
        <Link to="/">
          <h2>
            Adriano Alves <FaCode />
          </h2>
        </Link>
      </C.Title>

      <C.MenuToggle onClick={handleMenuClick}>
        {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
      </C.MenuToggle>

      <C.Menu open={menuOpen}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projetos</Link>
        <Link to="/experience">Experiência</Link>
        <C.Redes>
          <a href="https://github.com/Adrianodbs" target="_blank">
            <AiFillGithub size={24} color="#fff" />
          </a>
          <a
            href="https://www.linkedin.com/in/adriano-alves-4294b2168/"
            target="_blank"
          >
            <AiFillLinkedin size={24} color="#fff" />
          </a>
          <a href="https://www.instagram.com/_adrianoalvess_/" target="_blank">
            <AiFillInstagram size={24} color="#fff" />
          </a>
        </C.Redes>
      </C.Menu>
    </C.Header>
  )
}

export default Header
