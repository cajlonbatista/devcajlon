import React from "react";

import { PortifolioContainer } from "./styles";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@material-ui/core";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";

import spacehunter from "../../global/assets/spacehunter.jpg";
import guspad from "../../global/assets/guspad.jpg";
import bethewoman from "../../global/assets/bethewoman.jpg";
import blog from "../../global/assets/blog.jpg";
import cookside from '../../global/assets/cookside.jpg';
import protoes from '../../global/assets/protoes.jpg';


const cards = [
  {
    title: "Space Hunter",
    img: spacehunter,
    description:
      "Plataforma Web pra o compartilhamento de conhecimentos em astronomia. Baseado em infomações de API da NASA, contendo em vídeos, imagens, notícias e busca dinâmica dos mesmos.",
    github: "https://github.com/cajlonbatista/spacehunter",
    deploy: "https://spacehunter.vercel.app/",
  },
  {
    title: "Guspad",
    img: guspad,
    description:
      "Plataforma Web com login integrado, onde os usuário podem criar e deletar notas e lembretes do dia a dia.",
    github: "https://github.com/cajlonbatista/guspad",
    deploy: "https://guspad.vercel.app/",
  },
  {
    title: "Be The Woman",
    img: bethewoman,
    description:
      "Plataforma Web em estilo rede social, exclusivamente para mulheres compartilharem experiências e informações em artigos.",
    github: "https://github.com/JohnnyStein/BeTheWoman",
    deploy: "https://bethewoman.vercel.app/",
  },
  {
    title: "Blog",
    img: blog,
    description:
      "Meu blog pessoal feito para compartilhar meu conhecimentos com as tecnologias de desenvolvimento web.",
    github: "https://github.com/cajlonbatista/blog",
    deploy: "https://cajlonbatista.vercel.app/",
  },
  {
    title: "Cook Side",
    img: cookside,
    description:
      "Plataforma Web simples para cadastro de receitas por um admin e organização de fovoritas pelo usuário",
    github: "https://github.com/cajlonbatista/cookside",
    deploy: "https://cookside.vercel.app/",
  },
  {
    title: "Protoes",
    img: protoes,
    description:
      "Protoes is a simple and beautiful desktop application for task control",
    github: "https://github.com/cajlonbatista/protoes",
    deploy: "",
    readme: "https://github.com/cajlonbatista/protoes/blob/master/README.md",
  }
];

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: '0 auto'
  },
  media: {
    height: 140,
  },
});
const cardtheme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFF",
    },
  },
});

function Portifolio() {
  const classes = useStyles();

  return (
    <PortifolioContainer>
      <section>
        {cards.map((card) => (
          <ThemeProvider theme={cardtheme}>
            <Card className={classes.root} >
              <CardActionArea>
                <CardMedia
                    style={{cursor: 'default'}}
                  className={classes.media}
                  image={card.img}
                  title={card.title}
                />
                <CardContent style={{cursor: 'default'}}>
                  <Typography
                    gutterBottom
                    style={{ color: "#FE3E57" }}
                    variant="h5"
                    component="h2"
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ color: "#303030", fontFamily: "Inter" }}
                    component="p"
                  >
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions style={{ display: "flex", alignItems: "center" }}>
                <a href={card.github} target="_blank">
                  GitHub
                </a>
                {
                  (card.deploy != "")
                  ?
                  <a href={card.deploy} target="_blank">
                    Deploy
                  </a>
                  :
                  <a href={card.readme} target="_blank">
                    Readme
                  </a>
                }
                
              </CardActions>
            </Card>
          </ThemeProvider>
        ))}
      </section>
    </PortifolioContainer>
  );
}

export default Portifolio;
