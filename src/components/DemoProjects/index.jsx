import { FiGithub } from 'react-icons/fi'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { MainList } from '../List/MainList'
import * as C from './style'
import { useNavigate } from 'react-router-dom'

import { useLayoutEffect, useRef } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function DemoProjects() {
  const navigate = useNavigate()
  const el = useRef()

  const handleProjectsClick = () => {
    navigate('/projects')
  }

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    MainList.forEach((item, index) => {
      const contentItem = el.current.children[index]

      const animation = gsap.timeline({
        scrollTrigger: {
          trigger: contentItem,
          scrub: true,
          start: 'top 300px',
          end: 'bottom 620px'
        }
      })

      animation.fromTo(
        contentItem,
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
  }, [MainList])

  return (
    <C.Container ref={el}>
      {MainList.map((i, index) => (
        <C.Content key={index}>
          <div className="top">
            <div className="text">
              <h2>{i.title}</h2>
              <p>{i.description}</p>
            </div>
            <div>
              <img src={i.img} alt={i.title} />
            </div>
          </div>
          <div className="bottom">
            <span>Tecnologias utilizadas:</span>
            <div className="tags">
              {i.tags.map((tag, index) => (
                <div>
                  <h4 key={index} className="icons">
                    {tag}
                  </h4>
                </div>
              ))}
            </div>
            <div className="btn">
              <a href={i.github} target="_blank" rel="noopener noreferrer">
                <p>Ver no GitHub</p> <FiGithub />
              </a>
              <a href={i.url} target="_blank" rel="noopener noreferrer">
                <p>Visitar o site</p> <BsBoxArrowUpRight />
              </a>
            </div>
          </div>
        </C.Content>
      ))}
      <button onClick={handleProjectsClick}>Ver todos os projetos</button>
    </C.Container>
  )
}
