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
      'Resultado de um projeto freelancer realizado para o Centro Espírita Teles de Menezes. O projeto inclui um sistema integrado com o Firebase, oferecendo ao administrador a capacidade de criar, excluir e editar posts diretamente de um painel de controle intuitivo. Através desse projeto, tentei ao máximo aprimorar o meus conhecimentos em rotas privadas e banco de dados',
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
      'Projeto realizado em um teste técnico, onde foi preciso consumir uma API, criando também uma página com os detalhes de cada prato, uma parte para pesquisar a receita por nome, por letra e por ingrediente.',
    url: 'https://food-recipes-blond.vercel.app/',
    tags: ['react', 'styled-components', 'typescript'].map(tag =>
      getIconByTag(tag)
    ),
    github: 'https://github.com/Adrianodbs/Food-recipes'
  },

  {
    title: 'Dicionário de inglês',
    description:
      'Aplicação criada para melhorar o apredizado em inglês, onde você cadastra uma palavra, sua tradução e uma aplicação em frase, também foi incluído um sistema de patentes, que vai aumentando na medida em que você acrescenta novas palavras. Para esse projeto foi utilizado o firebase, tanto no login do usuário, quanto no banco de dados, onde as palavras registradas serão armazenadas.',
    url: 'https://ingles-react.vercel.app/',
    img: './img/ingles.png',
    tags: ['react', 'css', 'firebase'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/ingl-s-react'
  },
  {
    title: 'Burguer Redux',
    description:
      'Projeto realizado em um teste técnico, onde foi preciso utilizar o Redux para gerenciar os produtos e o carrinho de compras.',
    url: 'https://teste-21-06-24.vercel.app/',
    img: './img/burguer.png',
    tags: ['react', 'redux', 'typescript', 'styled-components'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/teste_21_06_24'
  }
]
