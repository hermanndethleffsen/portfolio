import React from 'react';
import logo from '../images/logo.png';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { colors } from './styles';

const LogoImage = styled.img`
  width: 136px;
  height: 58px;
`;

const Nav = styled.nav`
  background: white;
  display: flex;
  justify-content: space-between;
  z-index: 12;
  padding: 41px 92px 41px 92px;
`;

const NavLink = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: Monte Med;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 29px;
  &.active {
    color: ${colors.primary};
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  white-space: nowrap;
`;

const Header = () => {
  return (
    <Nav>
      <LogoImage src={logo} />
      <NavMenu>
        <NavLink to="/portfolio" activeStyle>
          Über mich
        </NavLink>
        <NavLink to="/portfolio/quote" activeStyle>
          Zitat
        </NavLink>
        <NavLink to="/portfolio/work" activeStyle>
          Werke
        </NavLink>
        <NavLink to="/portfolio/skills" activeStyle>
          Kenntnisse
        </NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Header;
