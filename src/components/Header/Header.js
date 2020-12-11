import React from "react";

import { useLocation, Link } from "react-router-dom";

import { HeaderContainer, Logo } from "./styles";
import { IconButton, List, ListItem, SwipeableDrawer } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

import logo from "../../global/assets/logo.svg";

const menu = [
  {
    path: "/projects",
    title: "Projects",
  },
  {
    path: "/curriculum",
    title: "Curriculum",
  },
  {
    path: "/contact",
    title: "Contact",
  },
];

const useStyles = makeStyles({
  list: {
    width: 250,
    height: "100vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    background: '#322f3d',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  fullList: {
    width: "auto",
  },
  links: {
    color: "#fff",
    textDecoration: "none",
    fontFamily: "Nunito, sans-serif",
  },
});

const Header = (props) => {
  const location = useLocation();
  const classes = useStyles();

  const [anchor, setAnchor] = React.useState(false);

  const toggleDrawer = () => {
    if (anchor === false) {
      setAnchor(true);
    } else {
      setAnchor(false);
    }
  };

  return (
    <HeaderContainer>
      <Logo>
        <Link to='/'>
          <img src={logo} alt='Francisco Cajlon'/>
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
          <Logo style={{ padding: '20px' }}>
            <Link to='/'>
              <img src={logo} style={{ width: 45 }} alt='Francisco Cajlon'/>
              <h1 style={{ fontSize: 18 }}>Francisco Cajlon</h1>
            </Link>
          </Logo>
          <List>
            {menu.map((item) => {
              if (location.pathname === item.path) {
                return (
                  <Link
                    className={classes.links}
                    style={{ background: "#5294E2" }}
                    onClick={toggleDrawer}
                    to={item.path}
                  >
                    <ListItem style={{ background: "#5294E2", fontSize: 14 }} button>{item.title}</ListItem>
                  </Link>
                );
              } else {
                return (
                  <Link
                    className={classes.links}
                    to={item.path}
                    onClick={toggleDrawer}
                  >
                    <ListItem style={{ fontSize: 14 }}  button>{item.title}</ListItem>
                  </Link>
                );
              }
            })}
          </List>
        </div>
      </SwipeableDrawer>
      <div>
        {menu.map((item) => {
          if (location.pathname === item.path) {
            return (
              <Link style={{ background: "#5294E2" }} to={item.path}>
                {item.title}
              </Link>
            );
          } else {
            return <Link to={item.path}>{item.title}</Link>;
          }
        })}
      </div>
    </HeaderContainer>
  );
};

export default Header;
