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

export const PersonalList = [
  {
    nome: 'Super Trunfo',
    img: './img/supertrunfo.png',
    descricao: '(Jogo de super trunfo desenvolvido com React.)',
    url: 'https://supertrunfo-react.vercel.app/',
    tags: ['react', 'styled-components'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/supertrunfo-react'
  },
  {
    nome: 'Mini-projetos JavaScript',
    img: './img/miniprojeto.png',
    descricao: '(Seleção de mini-projetos, utilizando HTML, CSS e JavaScript.)',
    url: 'https://adrianodbs.github.io/Mini-projetos/',
    tags: ['html', 'css', 'javascript'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/Mini-projetos'
  },

  {
    nome: 'Dicionário de inglês',
    descricao:
      '(Aplicação onde você cadastra uma palavra, sua tradução e uma aplicação em frase, também foi incluído um sistema de patentes.)',
    url: 'https://ingles-react.vercel.app/',
    img: './img/ingles.png',
    tags: ['react', 'css', 'firebase'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/ingl-s-react'
  },

  {
    nome: 'Beleza na web (Teste técnico)',
    descricao: '(Teste técnico feito para treinar as habilidades em react.)',
    url: 'https://beleza-na-web-wine.vercel.app/',
    img: './img/beleza-web.png',
    tags: ['react', 'css'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/beleza-na-web'
  },

  {
    nome: 'CRUD CodeLeap (Desafio técnico)',
    descricao:
      '(Desafio técnico proposto pela CodeLeap, onde foi criado um sistema de CRUD, utilizando o ReactJs, para estilização foi utilizado o CSS.)',
    url: 'https://desafio-tecnico-codeleap.vercel.app/',
    img: './img/codeleap.png',
    tags: ['react', 'css'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/desafio-tecnico-codeleap'
  },

  {
    nome: 'Arte no Panno (Em andamento)',
    descricao: '(Site de uma loja de arte.)',
    url: 'https://arte-no-panno-react.vercel.app/',
    img: './img/arte.png',
    tags: ['react', 'styled-components'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/Arte-no-panno-react'
  }
]
