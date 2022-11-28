import * as C from './styles'
import { CHtmlCss, CJavascript, CReact, CMobile } from './lista'
import { useState } from 'react'

function Cursos() {
  const [menu, setMenu] = useState(1)

  const action = index => {
    setMenu(index)
  }
  return (
    <C.Cursos>
      <ul>
        <button
          className={`${menu === 1 ? 'active' : ''}`}
          onClick={() => action(1)}
        >
          {' '}
          HTML5 e CSS3
        </button>
        <button
          className={`${menu === 2 ? 'active' : ''}`}
          onClick={() => action(2)}
        >
          {' '}
          JavaScript
        </button>
        <button
          className={`${menu === 3 ? 'active' : ''}`}
          onClick={() => action(3)}
        >
          {' '}
          React
        </button>
        <button
          className={`${menu === 4 ? 'active' : ''}`}
          onClick={() => action(4)}
        >
          {' '}
          Mobile
        </button>
        <button
          className={`${menu === 5 ? 'active' : ''}`}
          onClick={() => action(5)}
        >
          Outros Cursos
        </button>
      </ul>
      <C.Content>
        {menu === 1 && <CursoHtml />}
        {menu === 2 && <CursoJavaScript />}
        {menu === 3 && <CursoReact />}
        {menu === 4 && <CursoMobile />}
      </C.Content>
    </C.Cursos>
  )
}

const CursoHtml = () => {
  return (
    <div>
      {CHtmlCss.map(item => (
        <p>
          {item.nome} - <strong>{item.tempo} Horas</strong>{' '}
          <span>{item.escola}</span>
        </p>
      ))}
    </div>
  )
}

const CursoJavaScript = () => {
  return (
    <div>
      {CJavascript.map(item => (
        <p>
          {item.nome} - <strong>{item.tempo} Horas</strong>{' '}
          <span>{item.escola}</span>
        </p>
      ))}
    </div>
  )
}

const CursoReact = () => {
  return (
    <div>
      {CReact.map(item => (
        <p>
          {item.nome} - <strong>{item.tempo} Horas</strong>{' '}
          <span>{item.escola}</span>
        </p>
      ))}
    </div>
  )
}

const CursoMobile = () => {
  return (
    <div>
      {CMobile.map(item => (
        <p>
          {item.nome} - <strong>{item.tempo} Horas</strong>{' '}
          <span>{item.escola}</span>
        </p>
      ))}
    </div>
  )
}

export default Cursos
