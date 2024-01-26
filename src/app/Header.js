import React from 'react';
import logo from '../images/logo.png';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
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

const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <Nav>
      <LogoImage src={logo} />
      <NavMenu>
        <NavLink to="/" activeStyle>
          Über mich
        </NavLink>
        <NavLink to="/quote" activeStyle>
          Zitat
        </NavLink>
        <NavLink to="/portfolio" activeStyle>
          Werke
        </NavLink>
        <NavLink to="/skills" activeStyle>
          Kenntnisse
        </NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Header;
