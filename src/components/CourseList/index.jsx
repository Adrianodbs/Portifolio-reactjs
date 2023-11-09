import styled from 'styled-components'
import {
  CBackEnd,
  CHtmlCss,
  CJavascript,
  CMobile,
  COutrosCursos,
  CReact
} from '../List/CourseList'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  p {
    text-transform: uppercase;
  }

  strong {
    color: var(--gray);
  }

  span {
    color: var(--purple);
  }
`

const calculateTotalHours = courses => {
  return courses.reduce((total, course) => total + course.time, 0)
}

const Curso = ({ courses }) => {
  const totalHours = calculateTotalHours(courses)

  return (
    <Container>
      {courses.map((item, index) => (
        <p key={index}>
          {item.title} - <strong>{item.time} Horas</strong>{' '}
          <span>{item.school}</span>
        </p>
      ))}
      <br />
      <p>
        Tempo Total : <strong> {totalHours} Horas</strong>
      </p>
    </Container>
  )
}

export const CursoHtml = () => <Curso courses={CHtmlCss} />
export const CursoJavaScript = () => <Curso courses={CJavascript} />
export const CursoReact = () => <Curso courses={CReact} />
export const CursoMobile = () => <Curso courses={CMobile} />
export const CursoBackEnd = () => <Curso courses={CBackEnd} />
export const OutrosCursos = () => <Curso courses={COutrosCursos} />
