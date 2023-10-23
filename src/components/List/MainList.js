import { FaReact, FaCss3Alt, FaSass } from 'react-icons/fa'
import {
  SiFirebase,
  SiRedux,
  SiTypescript,
  SiStyledcomponents,
  SiHtml5
} from 'react-icons/si'
import { TbBrandNextjs, TbBrandJavascript } from 'react-icons/tb'

const iconsByTag = {
  react: <FaReact color="#61DAFB" />,
  css: <FaCss3Alt color="#0070B8" />,
  firebase: <SiFirebase color="#F7A213" />,
  html: <SiHtml5 color="#DD4B25" />,
  javascript: <TbBrandJavascript color="#EFD81D" />,
  redux: <SiRedux color="#7749BD" />,
  typescript: <SiTypescript color="#0076C6" />,
  'styled-components': <SiStyledcomponents color="#D06EAA" />,
  sass: <FaSass color="#C76494" />,
  nextjs: <TbBrandNextjs color="#000" />
}

const getIconByTag = tag => iconsByTag[tag] || null

export const MainList = [
  {
    title: 'Centro Espírita',
    description:
      '(Sistema integrado com o Firebase, que permite criar e editar posts.)',
    url: 'https://centro-espirita-teles-de-menezes.vercel.app/',
    img: './img/centro.png',
    tags: ['react', 'styled-components', 'firebase'].map(tag =>
      getIconByTag(tag)
    ),
    github: 'https://github.com/Adrianodbs/Centro-espirita-teles-de-menezes'
  },
  {
    title: 'YouFood',
    img: './img/youfood.png',
    description:
      '(Projeto realizado em um teste técnico, onde foi preciso consumir uma API.)',
    url: 'https://food-recipes-blond.vercel.app/',
    tags: ['react', 'styled-components', 'typescript'].map(tag =>
      getIconByTag(tag)
    ),
    github: 'https://github.com/Adrianodbs/Food-recipes'
  },
  {
    title: 'Super Trunfo',
    img: './img/supertrunfo.png',
    description: '(Jogo de super trunfo desenvolvido com React.)',
    url: 'https://supertrunfo-react.vercel.app/',
    tags: ['react', 'styled-components'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/supertrunfo-react'
  },
  {
    title: 'Mini-projetos JavaScript',
    img: './img/miniprojeto.png',
    description:
      '(Seleção de mini-projetos, utilizando HTML, CSS e JavaScript.)',
    url: 'https://adrianodbs.github.io/Mini-projetos/',
    tags: ['html', 'css', 'javascript'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/Mini-projetos'
  },

  {
    title: 'Dicionário de inglês',
    description:
      '(Aplicação onde você cadastra uma palavra, sua tradução e uma aplicação em frase, também foi incluído um sistema de patentes.)',
    url: 'https://ingles-react.vercel.app/',
    img: './img/ingles.png',
    tags: ['react', 'css', 'firebase'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/ingl-s-react'
  },
  {
    title: 'Clone da página da Disney +',
    img: './img/disney.png',
    description:
      '(Um clone da página da Disney + realizada com o auxílio do canal no Youtube "Hello Codes".)',
    url: 'https://adrianodbs.github.io/Clone-Disney/',
    tags: ['html', 'css', 'javascript'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/Clone-Disney'
  }
]
