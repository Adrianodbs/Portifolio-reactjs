import axiosImg from '../../img/axios-icon.svg'
import css from '../../img/css3-original.svg'
import git from '../../img/git-original.svg'
import html from '../../img/html5-original.svg'
import javascript from '../../img/javascript-original.svg'
import next from '../../img/nextjs-original-wordmark.svg'
import node from '../../img/nodejs-original.svg'
import react from '../../img/react-original.svg'
import sass from '../../img/sass-original.svg'
import tailwind from '../../img/tailwindcss-plain.svg'
import typescript from '../../img/typescript-original.svg'
import java from '../../img/java.svg'
import spring from '../../img/spring.svg'
import styledComponent from '../../img/styled.png'
import Stack from '../Stack'
import styled from 'styled-components'

export default function Skills() {
  return (
    <Container>
      <h2>Principais tecnologias</h2>
      <div className="stacks">
        <Stack img={html} title="HTML" />
        <Stack img={css} title="CSS" />
        <Stack img={javascript} title="JavaScript" />
        <Stack img={typescript} title="TypeScript" />
        <Stack img={react} title="React" />
        <Stack img={next} title="Next" />
        <Stack img={node} title="NodeJS" />
        <Stack img={sass} title="Sass" />
        <Stack img={tailwind} title="TailwindCSS" />
        <Stack img={styledComponent} title="Styled-Components" />
        <Stack img={git} title="Git" />
        <Stack img={axiosImg} title="Axios" />
        <Stack img={java} title="Java" />
        <Stack img={spring} title="Spring Boot" />
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px dashed var(--purple);
  border-radius: 8px;
  margin: 12px auto;

  h2 {
    color: #fff;
    margin: 24px auto;
    text-transform: uppercase;
  }

  .stacks {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 90%;
    max-width: 800px;
    gap: 16px;
  }
`
