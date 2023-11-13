import * as C from './styles'
import ButtonLink from '../../components/ButtonLink'
import DemoProjects from '../../components/DemoProjects'
import Skills from '../../components/Skills'

import { useLayoutEffect } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Home() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('.skills-item', {
      x: 0,
      opacity: 1,
      rotate: '0deg',

      scrollTrigger: {
        trigger: '.skills',

        start: 'top 300px',
        end: 'bottom 500px',
        scrub: true
      }
    })

    return () => {
      gsap.killTweensOf('.title')
    }
  }, [])
  return (
    <C.Container>
      <div className="item-title">
        <C.Title>
          <h2>
            Olá <span>^-^</span>
          </h2>
          <h1>
            Me chamo <span>Adriano Alves</span> <br /> Dev.{' '}
            <span>Front-End / Mobile</span>
          </h1>
        </C.Title>
      </div>

      <C.Links>
        <ButtonLink link="https://github.com/Adrianodbs">GitHub</ButtonLink>
        <ButtonLink link="https://www.linkedin.com/in/adriano-alves-4294b2168/">
          LinkedIn
        </ButtonLink>
      </C.Links>
      <div className="skills">
        <div className="skills-item">
          <Skills />
        </div>
      </div>

      <C.Projects>
        <h2>Aqui estão alguns dos meus principais projetos...</h2>
        <DemoProjects />
      </C.Projects>
    </C.Container>
  )
}

export default Home
