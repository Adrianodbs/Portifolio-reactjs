import { FaReact, FaCss3Alt, FaSass } from 'react-icons/fa'
import {
  SiFirebase,
  SiRedux,
  SiTypescript,
  SiStyledcomponents,
  SiHtml5,
  SiTailwindcss
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
  nextjs: <TbBrandNextjs color="#000" />,
  tailwind: <SiTailwindcss color="#35bef8" />
}

const getIconByTag = tag => iconsByTag[tag] || null

export const AllProjects = [
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
    title: 'To do List daily',
    img: './img/todolistdaily.png',
    description:
      '(To-do-list, utilizando React e Tailwind, onde é possivel monitorar a tarefas realizadas, e atribuir um rank relacionado a quantidade de tarefas realizadas. As tarefas também são separadas por data.)',
    url: 'https://to-do-list-daily.vercel.app/',
    tags: ['react', 'tailwind', 'typescript'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/To-do-List-daily'
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
  },
  {
    title: 'Sistema de Chamados',
    description:
      '(Sistema integrado com o Firebase, que permite cadastrar usuários, criar e editar chamados.)',
    url: 'https://sistema-de-chamados-six.vercel.app/dashboard',
    img: './img/sistema-de-chamados.png',
    tags: ['react', 'css', 'firebase'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/sistema-de-chamados'
  },
  {
    title: 'Prime-Flix',
    description: '(Uso de API em React.)',
    url: 'https://prime-flix-three.vercel.app/',
    img: './img/prime_flix.png',
    tags: ['react', 'css'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/prime-flix'
  },
  {
    title: 'Controle de finanças',
    description:
      '(Aplicação para calcular recebimento e despesas ao longo de um determindo período.)',
    url: 'https://controle-de-finan-as-react.vercel.app/',
    img: './img/controle-financas.png',
    tags: ['react', 'css'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/controle-de-finan-as-react'
  },
  {
    title: 'Clone da página da Disney +',
    img: './img/disney.png',
    description:
      '(Um clone da página da Disney + realizada com o auxílio do canal no Youtube "Hello Codes".)',
    url: 'https://adrianodbs.github.io/Clone-Disney/',
    tags: ['html', 'css', 'javascript'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/Clone-Disney'
  },
  {
    title: 'Games Slide',
    img: './img/slide-games.png',
    description: '(Slide de games infinito)',
    url: 'https://slide-games.vercel.app/',
    tags: ['html', 'css', 'javascript'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/Slide-Games'
  },
  {
    title: 'Mini Blog',
    description: '(Aplicação utilizando ReactJs e Firebase.)',
    url: 'https://miniblog-kohl.vercel.app/',
    img: './img/miniblog.png',
    tags: ['react', 'css', 'firebase'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/MiniBlog-react'
  },
  {
    title: 'Palavra Secreta',
    description: '(Adivinhe a palavra secreta.)',
    url: 'https://palavra-secreta-react.vercel.app/',
    img: './img/palavra-secreta.png',
    tags: ['react', 'css'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/Palavra-secreta-react'
  },
  {
    title: 'Trato Tech',
    description: '(Aplicação utilizando React Redux.)',
    url: 'https://react-gerenciamento-de-estados-globais-com-redux-z3e9.vercel.app/',
    img: './img/trato-tech.png',
    tags: ['react', 'css', 'redux'].map(tag => getIconByTag(tag)),
    github:
      'https://github.com/Adrianodbs/React-gerenciamento-de-estados-globais-com-Redux'
  },
  {
    title: 'TODO list com typescript',
    description: '(Projeto simples para desenvolver habilidades em typescript)',
    url: 'https://todo-typescript-tan.vercel.app/',
    img: './img/todo-type.png',
    tags: ['react', 'css', 'typescript'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/Todo-typescript'
  },
  {
    title: 'Bubble Coffee',
    description: '(Página de uma cafeteria utilizando o Next.Js.)',
    url: 'https://bubble-coffee.vercel.app/',
    img: './img/bubble.png',
    tags: ['react', 'sass', 'nextjs'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/bubble-coffee'
  },
  {
    title: 'Tarefas com comentários',
    description:
      '(CRUD onde é necessário logar com conta do google para adicionar tarefas e ver as tarefas públicas.)',
    url: 'https://tarefas-next.vercel.app/',
    img: './img/tarefas.png',
    tags: ['nextjs', 'typescript', 'firebase'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/Tarefas-Next'
  },
  {
    title: 'Reserva de viagens',
    description:
      '(Aplicação onde foi utilizado o redux para a solicitação de reservas de viagem.)',
    url: 'https://reservas-com-redux.vercel.app/',
    img: './img/reservas.png',
    tags: ['react', 'css', 'redux'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/Reservas-com-redux'
  },

  {
    title: 'Arte no Panno (Em andamento)',
    description: '(Site de uma loja de arte.)',
    url: 'https://arte-no-panno-react.vercel.app/',
    img: './img/arte.png',
    tags: ['react', 'styled-components'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/Arte-no-panno-react'
  }
]
