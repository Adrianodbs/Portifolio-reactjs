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

export const ListaReact = [
  {
    nome: 'Sistema de Chamados',
    descricao:
      '(Sistema integrado com o Firebase, que permite cadastrar usuários, criar e editar chamados.)',
    url: 'https://sistema-de-chamados-six.vercel.app/dashboard',
    img: './img/sistema-de-chamados.png',
    tags: ['react', 'css', 'firebase'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/sistema-de-chamados'
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
    nome: 'Prime-Flix',
    descricao: '(Uso de API em React.)',
    url: 'https://prime-flix-three.vercel.app/',
    img: './img/prime_flix.png',
    tags: ['react', 'css'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/prime-flix'
  },
  {
    nome: 'Controle de finanças',
    descricao:
      '(Aplicação para calcular recebimento e despesas ao longo de um determindo período.)',
    url: 'https://controle-de-finan-as-react.vercel.app/',
    img: './img/controle-financas.png',
    tags: ['react', 'css'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/controle-de-finan-as-react'
  },
  {
    nome: 'Clone da página da Disney +',
    img: './img/disney.png',
    descricao:
      '(Um clone da página da Disney + realizada com o auxílio do canal no Youtube "Hello Codes".)',
    url: 'https://adrianodbs.github.io/Clone-Disney/',
    tags: ['html', 'css', 'javascript'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/Clone-Disney'
  },
  {
    nome: 'Games Slide',
    img: './img/slide-games.png',
    descricao: '(Slide de games infinito)',
    url: 'https://slide-games.vercel.app/',
    tags: ['html', 'css', 'javascript'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/Slide-Games'
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
    nome: 'Mini Blog',
    descricao: '(Aplicação utilizando ReactJs e Firebase.)',
    url: 'https://miniblog-kohl.vercel.app/',
    img: './img/miniblog.png',
    tags: ['react', 'css', 'firebase'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/MiniBlog-react'
  },
  {
    nome: 'Palavra Secreta',
    descricao: '(Adivinhe a palavra secreta.)',
    url: 'https://palavra-secreta-react.vercel.app/',
    img: './img/palavra-secreta.png',
    tags: ['react', 'css'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/Palavra-secreta-react'
  },
  {
    nome: 'Trato Tech',
    descricao: '(Aplicação utilizando React Redux.)',
    url: 'https://react-gerenciamento-de-estados-globais-com-redux-z3e9.vercel.app/',
    img: './img/trato-tech.png',
    tags: ['react', 'css', 'redux'].map(tag => getIconByTag(tag)),
    github:
      'https://github.com/Adrianodbs/React-gerenciamento-de-estados-globais-com-Redux'
  },
  {
    nome: 'Villa dos bolos',
    descricao: '(Projeto pessoal.)',
    url: 'https://villa-dos-bolos.vercel.app/',
    img: './img/Vila-dos-bolos.png',
    tags: ['react', 'css'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/Prejeto-react-agosto'
  },
  {
    nome: 'TODO list com typescript',
    descricao: '(Projeto simples para desenvolver habilidades em typescript)',
    url: 'https://todo-typescript-tan.vercel.app/',
    img: './img/todo-type.png',
    tags: ['react', 'css', 'typescript'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/Todo-typescript'
  },
  {
    nome: 'API com destinos de viagem',
    descricao:
      '(Página com uma breve descrição de locais, onde foi implimentada a função de Show More e de delete, todos os dados foram retirados de uma API)',
    url: 'https://react-resgatando-dados-de-api.vercel.app/',
    img: './img/locais-api.png',
    tags: ['react', 'css'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/react-resgatando-dados-de-API-'
  },
  {
    nome: 'Minha carteira',
    descricao:
      '(Sistema de controles de finanças, com dashboard utilizando gráficos para demonstrar as entradas e as saídas.)',
    url: 'https://minha-carteira-pi.vercel.app/',
    img: './img/minha-carteira.png',
    tags: ['react', 'styled-components', 'typescript'].map(tag =>
      getIconByTag(tag)
    ),
    github: 'https://github.com/Adrianodbs/Minha-carteira'
  },
  {
    nome: 'Buscador de repositórios',
    descricao:
      '(Aplicação utilizando a API do GitHub, onde é possível encontrar repositórios.)',
    url: 'https://buscador-de-reposit-rios.vercel.app/',
    img: './img/repos.png',
    tags: ['react', 'styled-components'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/Buscador-de-reposit-rios'
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
    nome: 'Bubble Coffee',
    descricao: '(Página de uma cafeteria utilizando o Next.Js.)',
    url: 'https://bubble-coffee.vercel.app/',
    img: './img/bubble.png',
    tags: ['react', 'sass', 'nextjs'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/bubble-coffee'
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
    nome: 'Tarefas com comentários',
    descricao:
      '(CRUD onde é necessário logar com conta do google para adicionar tarefas e ver as tarefas públicas.)',
    url: 'https://tarefas-next.vercel.app/',
    img: './img/tarefas.png',
    tags: ['nextjs', 'typescript', 'firebase'].map(tag => getIconByTag(tag)),
    github: 'https://github.com/Adrianodbs/Tarefas-Next'
  }
]
