import { useState } from 'react'

import * as C from './styles'
import {
  CursoBackEnd,
  CursoHtml,
  CursoJavaScript,
  CursoMobile,
  CursoReact,
  OutrosCursos
} from '../CourseList'

export default function Courses() {
  const [menu, setMenu] = useState(1)

  const handleSelectChange = event => {
    setMenu(parseInt(event.target.value, 10))
  }

  const action = index => {
    setMenu(index)
  }
  return (
    <C.Container>
      <select value={menu} onChange={handleSelectChange}>
        <option value={1}>HTML5 e CSS3</option>
        <option value={2}>JavaScript</option>
        <option value={3}>React</option>
        <option value={4}>Mobile</option>
        <option value={5}>Outros Cursos</option>
        <option value={6}>Back-End</option>
      </select>
      <C.Content>
        {menu === 1 && <CursoHtml />}
        {menu === 2 && <CursoJavaScript />}
        {menu === 3 && <CursoReact />}
        {menu === 4 && <CursoMobile />}
        {menu === 5 && <OutrosCursos />}
        {menu === 6 && <CursoBackEnd />}
      </C.Content>
    </C.Container>
  )
}
