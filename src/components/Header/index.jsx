import * as C from './styles'

import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'

import { Link } from 'react-router-dom'

function Header() {
  return (
    <C.Header>
      <h2>Adriano Alves</h2>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </ul>
    </C.Header>
  )
}

export default Header
