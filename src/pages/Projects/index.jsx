import * as C from './styles'
import { AllProjects } from '../../components/List/AllProjects'
import ProjectCard from '../../components/ProjectCard'

import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Projects() {
  const el = useRef()

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    AllProjects.forEach((project, index) => {
      const projectCard = el.current.children[index]

      gsap
        .timeline({
          scrollTrigger: {
            trigger: projectCard,
            scrub: true,
            start: 'top 500px',
            end: 'bottom 620px'
          }
        })
        .fromTo(
          projectCard,
          {
            opacity: 0,
            y: 160
          },
          {
            opacity: 1,
            y: 0
          }
        )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [AllProjects])
  return (
    <C.Container>
      <h1>Meus Projetos</h1>
      <p>
        Eu criei aplicativos, explorando uma ampla gama de tecnologias, como
        Node, React e React Native. Abaixo, você encontrará alguns dos meus
        projetos favoritos que representam minha jornada criativa.
      </p>
      <div className="projects" ref={el}>
        {AllProjects.map((project, i) => (
          <ProjectCard
            key={i}
            img={project.img}
            github={project.github}
            title={project.title}
            url={project.url}
            tags={project.tags}
          />
        ))}
      </div>
    </C.Container>
  )
}
