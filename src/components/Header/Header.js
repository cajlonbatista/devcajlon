import React from "react";

import { useLocation, Link } from "react-router-dom";

import { HeaderContainer } from "./styles";
import logo from '../../global/assets/logo.svg';

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
const Header = (props) => {
  const location = useLocation();

  return (
    <HeaderContainer>
      <div>
        <Link to='/'>
          <img src={logo}></img>
          <h1>Francisco Cajlon</h1>
        </Link>
      </div>
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
        <a href='https://docs.google.com/document/d/1hiHmgJcENhDFqHS3Q_ebxFG_C3YlcqazKXXJ9jyBzS8/edit?usp=sharing' target='_blank'>
          Curriculum
        </a>
      </div>
    </HeaderContainer>
  );
};

export default Header;
