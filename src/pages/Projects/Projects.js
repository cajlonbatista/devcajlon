import React from 'react';

import { ProjectsContainer } from './styles';

const cards = [
  {
    title: 'Space Hunter',
    description:
      'Plataforma Web pra o compartilhamento de conhecimentos em astronomia. Baseado em infomações de API da NASA, contendo em vídeos, imagens, notícias e busca dinâmica dos mesmos.',
    github: 'https://github.com/cajlonbatista/spacehunter',
    deploy: 'https://spacehunter.vercel.app/',
  },
  {
    title: 'Be The Woman',
    description:
      'Plataforma Web em estilo rede social, exclusivamente para mulheres compartilharem experiências e informações em artigos.',
    github: 'https://github.com/JohnnyStein/BeTheWoman',
    deploy: 'https://bethewoman.vercel.app/',
  },
  {
    title: 'Blog',
    description:
      'Meu blog pessoal feito para compartilhar meu conhecimentos com as tecnologias de desenvolvimento web.',
    github: 'https://github.com/cajlonbatista/blog',
    deploy: 'https://cajlonbatista.vercel.app/',
  },
  {
    title: 'Cook Side',
    description:
      'Plataforma Web simples para cadastro de receitas por um admin e organização de fovoritas pelo usuário',
    github: 'https://github.com/cajlonbatista/cookside',
    deploy: 'https://cookside.vercel.app/',
  },
  {
    title: 'Protoes',
    description:
      'Protoes is a simple and beautiful desktop application for task control',
    github: 'https://github.com/cajlonbatista/protoes',
    deploy: '',
    readme: 'https://github.com/cajlonbatista/protoes/blob/master/README.md',
  },
];


const Projects = () => {
  return (
    <ProjectsContainer>
      {
        cards.map(card => (
          <section>
            <header>
              <h1>{card.title}</h1>
              <p>{card.description}</p>
            </header>
            <footer>
              {
                (card.deploy === '')
                  ?
                  <a href={card.readme} target='_blank' rel='noreferrer'>Readme</a>
                  :
                  <a href={card.deploy} target='_blank' rel='noreferrer'>Deploy</a>
              }
              <a href={card.github} >GitHub</a>
            </footer>
          </section>
        ))
      }
    </ProjectsContainer>
  );
};

export default Projects;