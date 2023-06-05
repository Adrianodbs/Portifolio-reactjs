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

export const ProfessionalList = [
  {
    nome: 'Centro Espírita',
    descricao:
      '(Sistema integrado com o Firebase, que permite criar e editar posts.)',
    url: 'https://centro-espirita-teles-de-menezes.vercel.app/',
    img: './img/centro.png',
    tags: ['react', 'styled-components', 'firebase'].map(tag =>
      getIconByTag(tag)
    ),
    github: 'https://github.com/Adrianodbs/Centro-espirita-teles-de-menezes'
  }
]
