import ExperienceCard from '../../components/ExperienceCard'
import Skills from '../../components/Skills'
import perfil from '../../img/perfil.jpg'
import * as C from './styles'
import professor from '../../img/professor.png'
import freelancer from '../../img/trabalho-freelance.png'
import video4me from '../../img/video4me.jpg'
import temvagamestre from '../../img/vaga-mestre.png'
import Courses from '../../components/Courses'

export default function Experience() {
  return (
    <C.Container>
      <C.Top>
        <img src={perfil} alt="Foto do perfil" />
        <h2>Desenvolvedor Front-End | Mobile</h2>
        <p>
          Olá, me chamo Adriano, tenho 2 anos de experiência sólida em React e
          React Native, e estou comprometido com o constante aprimoramento dos
          meus conhecimentos em TypeScript, Java e NodeJS. <br /> <br />{' '}
          Atualmente, estou enriquecendo minha formação com a pós-graduação em
          Desenvolvimento Full Stack, focando especialmente no aprofundamento do
          meu conhecimento em back-end, abrangendo áreas como gerenciamento de
          bancos de dados, JWT, entre outros. <br /> <br /> Além disso, sou
          ativamente envolvido em dois projetos voluntários como desenvolvedor
          mobile, colaborando com profissionais de diversas áreas. Nesse papel,
          sou responsável por elaborar as interfaces, implementar
          funcionalidades avançadas e garantir uma perfeita integração com o
          back-end. <br /> <br /> Uma das minhas paixões é desenvolver projetos
          pessoais diariamente, com o objetivo de acelerar minha aprendizagem e
          me manter atualizado com as últimas tendências tecnológicas. Acredito
          que a prática constante e a busca pela excelência são essenciais para
          o meu crescimento profissional.
        </p>
      </C.Top>
      <Skills />
      <C.Experience>
        <h1>Experiências profissionais</h1>
        <div className="cards">
          <ExperienceCard
            img={professor}
            title="Professor (Governo do Estado)"
            duration="AGO 2019 / FEV 2023 "
          />
          <ExperienceCard
            img={freelancer}
            title="Freelancer"
            duration="OUT 2021 (Atual) "
          />
          <ExperienceCard
            img={video4me}
            title="Video4Me (Dev. Mobile)"
            duration="MAR 2023 (Atual - Voluntário) "
          />
          <ExperienceCard
            img={temvagamestre}
            title="Tem vaga mestre? (Dev. Mobile)"
            duration="JUN 2023 (Atual - Voluntário) "
          />
        </div>
      </C.Experience>
      <C.CourseList>
        <h2>Cursos Realizados</h2>
        <Courses />
      </C.CourseList>
    </C.Container>
  )
}
