import * as C from './styles'
import { CHtmlCss, CJavascript, CReact, CMobile, COutrosCursos } from './lista'
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
          className={`${menu === 5 ? 'active' : ''} disable`}
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
        {menu === 5 && <OutrosCursos />}
      </C.Content>
    </C.Cursos>
  )
}

const CursoHtml = () => {
  var soma = 0
  for (var i = 0; i < CHtmlCss.length; i++) {
    soma += CHtmlCss[i].tempo
  }
  return (
    <div>
      {CHtmlCss.map(item => (
        <p>
          {item.nome} - <strong>{item.tempo} Horas</strong>{' '}
          <span>{item.escola}</span>
        </p>
      ))}
      <br />
      <p>
        Tempo Total : <strong> {soma} Horas</strong>
      </p>
    </div>
  )
}

const CursoJavaScript = () => {
  var soma = 0
  for (var i = 0; i < CJavascript.length; i++) {
    soma += CJavascript[i].tempo
  }
  return (
    <div>
      {CJavascript.map(item => (
        <p>
          {item.nome} - <strong>{item.tempo} Horas</strong>{' '}
          <span>{item.escola}</span>
        </p>
      ))}
      <br />
      <p>
        Tempo Total : <strong> {soma} Horas</strong>
      </p>
    </div>
  )
}

const CursoReact = () => {
  var soma = 0
  for (var i = 0; i < CReact.length; i++) {
    soma += CReact[i].tempo
  }
  return (
    <div>
      {CReact.map(item => (
        <p>
          {item.nome} - <strong>{item.tempo} Horas</strong>{' '}
          <span>{item.escola}</span>
        </p>
      ))}
      <br />
      <p>
        Tempo Total : <strong> {soma} Horas</strong>
      </p>
    </div>
  )
}

const CursoMobile = () => {
  var soma = 0
  for (var i = 0; i < CMobile.length; i++) {
    soma += CMobile[i].tempo
  }
  return (
    <div>
      {CMobile.map(item => (
        <p>
          {item.nome} - <strong>{item.tempo} Horas</strong>{' '}
          <span>{item.escola}</span>
        </p>
      ))}
      <br />
      <p>
        Tempo Total : <strong> {soma} Horas</strong>
      </p>
    </div>
  )
}

const OutrosCursos = () => {
  var soma = 0
  for (var i = 0; i < COutrosCursos.length; i++) {
    soma += COutrosCursos[i].tempo
  }
  return (
    <div>
      {COutrosCursos.map(item => (
        <p>
          {item.nome} - <strong>{item.tempo} Horas</strong>{' '}
          <span>{item.escola}</span>
        </p>
      ))}
      <br />
      <p>
        Tempo Total : <strong> {soma} Horas</strong>
      </p>
    </div>
  )
}

export default Cursos
