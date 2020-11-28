import React from 'react';

import { PortifolioContainer } from './styles';

import spacehunter from '../../global/assets/spacehunter.jpg';
import bethewoman from '../../global/assets/bethewoman.jpg';
import blog from '../../global/assets/blog.jpg';
import cookside from '../../global/assets/cookside.jpg';
import protoes from '../../global/assets/protoes.jpg';

const cards = [
  {
    title: 'Space Hunter',
    img: spacehunter,
    description:
      'Plataforma Web pra o compartilhamento de conhecimentos em astronomia. Baseado em infomações de API da NASA, contendo em vídeos, imagens, notícias e busca dinâmica dos mesmos.',
    github: 'https://github.com/cajlonbatista/spacehunter',
    deploy: 'https://spacehunter.vercel.app/',
  },
  {
    title: 'Be The Woman',
    img: bethewoman,
    description:
      'Plataforma Web em estilo rede social, exclusivamente para mulheres compartilharem experiências e informações em artigos.',
    github: 'https://github.com/JohnnyStein/BeTheWoman',
    deploy: 'https://bethewoman.vercel.app/',
  },
  {
    title: 'Blog',
    img: blog,
    description:
      'Meu blog pessoal feito para compartilhar meu conhecimentos com as tecnologias de desenvolvimento web.',
    github: 'https://github.com/cajlonbatista/blog',
    deploy: 'https://cajlonbatista.vercel.app/',
  },
  {
    title: 'Cook Side',
    img: cookside,
    description:
      'Plataforma Web simples para cadastro de receitas por um admin e organização de fovoritas pelo usuário',
    github: 'https://github.com/cajlonbatista/cookside',
    deploy: 'https://cookside.vercel.app/',
  },
  {
    title: 'Protoes',
    img: protoes,
    description:
      'Protoes is a simple and beautiful desktop application for task control',
    github: 'https://github.com/cajlonbatista/protoes',
    deploy: '',
    readme: 'https://github.com/cajlonbatista/protoes/blob/master/README.md',
  },
];

function Portifolio() {
  return (
    <PortifolioContainer>
      <section>
        {cards.map((card) => (
          <section>
            <section>
              <article style={{ cursor: 'default' }}>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </article>
            </section>
            <footer style={{ display: 'flex', alignItems: 'center' }}>
              <a href={card.github} target='_blank'>
                GitHub
              </a>
              {card.deploy != '' ? (
                <a href={card.deploy} target='_blank'>
                  Deploy
                </a>
              ) : (
                <a href={card.readme} target='_blank'>
                  Readme
                </a>
              )}
            </footer>
          </section>
        ))}
      </section>
    </PortifolioContainer>
  );
}

export default Portifolio;
