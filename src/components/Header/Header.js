import React from "react";

import { useLocation, Link } from "react-router-dom";

import { HeaderContainer, Logo } from "./styles";
import { IconButton, List, ListItem, SwipeableDrawer } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

import logo from "../../global/assets/logo.svg";
import treno from "../../global/assets/back.svg";

const menu = [
  {
    path: "/portifolio",
    title: "Portfolio",
  },
  {
    path: "/work",
    title: "Work",
  },
  {
    path: "/about",
    title: "About",
  },
];

const useStyles = makeStyles({
  list: {
    width: 250,
    height: "100vh",
    backgroundImage: `url(${treno})`,
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  fullList: {
    width: "auto",
  },
  links: {
    color: "#101010",
    textDecoration: "none",
    fontFamily: "Nunito Sans, sans-serif",
  },
});

const Header = (props) => {
  const location = useLocation();
  const classes = useStyles();

  const [anchor, setAnchor] = React.useState(false);

  const toggleDrawer = () => {
    if (anchor == false) {
      setAnchor(true);
    } else {
      setAnchor(false);
    }
  };

  return (
    <HeaderContainer>
      <Logo onClick={toggleDrawer}>
        <Link to="/">
          <img src={logo}></img>
          <h1>Francisco Cajlon</h1>
        </Link>
      </Logo>
      <article>
        <IconButton onClick={toggleDrawer}>
          <Menu style={{ color: "#FFFFFF" }}></Menu>
        </IconButton>
      </article>
      <SwipeableDrawer
        anchor="left"
        open={anchor}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <div className={classes.list}>
          <Logo style={{ padding: '20px'}}>
            <Link to="/">
              <img src={logo} style={{ width: 45}}></img>
              <h1 style={{ fontSize: 18}}>Francisco Cajlon</h1>
            </Link>
          </Logo>
          <List>
          <a
                    className={classes.links}
                    onClick={toggleDrawer}
                    href='https://docs.google.com/document/d/1hiHmgJcENhDFqHS3Q_ebxFG_C3YlcqazKXXJ9jyBzS8/edit?usp=sharing'
                  >
                    <ListItem button>Curriculum</ListItem>
                  </a>
            {menu.map((item) => {
              if (location.pathname == item.path) {
                return (
                  <Link
                    className={classes.links}
                    style={{ background: "#fe3e57" }}
                    onClick={toggleDrawer}
                    to={item.path}
                  >
                    <ListItem style={{ background: "#fe3e57", color: 'white' }} button>{item.title}</ListItem>
                  </Link>
                );
              } else {
                return (
                  <Link
                    className={classes.links}
                    to={item.path}
                    onClick={toggleDrawer}
                  >
                    <ListItem button>{item.title}</ListItem>
                  </Link>
                );
              }
            })}
          </List>
        </div>
      </SwipeableDrawer>
      <div>
        {menu.map((item) => {
          if (location.pathname == item.path) {
            return (
              <Link style={{ background: "#fe3e57" }} to={item.path}>
                {item.title}
              </Link>
            );
          } else {
            return <Link to={item.path}>{item.title}</Link>;
          }
        })}
        <a
          href="https://docs.google.com/document/d/1hiHmgJcENhDFqHS3Q_ebxFG_C3YlcqazKXXJ9jyBzS8/edit?usp=sharing"
          target="_blank"
        >
          Curriculum
        </a>
      </div>
    </HeaderContainer>
  );
};

export default Header;
