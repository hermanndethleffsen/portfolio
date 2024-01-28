import React, { useState, useEffect, useRef, useCallback } from 'react';
import logo from '../images/logo.png';
import styled from 'styled-components';
import { NavLink as Link, useLocation } from 'react-router-dom';
import { colors } from './styles';
import { MdMenu } from 'react-icons/md';

const LogoImage = styled.img`
  width: 136px;
  height: 58px;
`;

const Nav = styled.nav`
  background: white;
  position: relative;
  display: flex;
  justify-content: space-between;
  z-index: 12;
  padding: 41px 92px 41px 92px;
  @media screen and (max-width: 1080px) {
    padding: 30px;
  }
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
  @media screen and (max-width: 835px) {
    margin: 5px 0;
  }
`;

const MenuButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 835px) {
    display: block;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  white-space: nowrap;
  background: white;
  @media screen and (max-width: 835px) {
    position: absolute;
    flex-direction: column;
    top: 90px;
    right: 30px;
    z-index: 800;
    border-radius: 5px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;

const useCompareWithPrev = (value, callback, initialValue) => {
  const previousVal = useRef(initialValue);
  useEffect(() => {
    callback(previousVal.current);
    previousVal.current = value;
  }, [callback, value]);
};

const useOutsideClick = (ref, callback) => {
  const handleClick = useCallback(
    (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    },
    [callback, ref],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [handleClick]);
};

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const getMatches = (_query) => {
      return window.matchMedia(_query).matches;
    };

    const matchMedia = window.matchMedia(query);

    const handleChange = () => setMatches(getMatches(query));

    handleChange();
    if (matchMedia.addEventListener)
      matchMedia.addEventListener('change', handleChange);
    else matchMedia.addListener(handleChange);

    return () => {
      if (matchMedia.removeEventListener)
        matchMedia.removeEventListener('change', handleChange);
      else matchMedia.removeListener(handleChange);
    };
  }, [query]);

  return matches;
};

const Header = () => {
  const isSmall = useMediaQuery('(max-width: 835px)');
  const [showMenu, setShowMenu] = useState(!isSmall);

  useEffect(() => {
    if (!isSmall && !showMenu) {
      setShowMenu(true);
    }
  }, [isSmall, showMenu]);

  const location = useLocation();
  useEffect(() => console.log(isSmall), [isSmall]);
  useCompareWithPrev(
    location.pathname,
    (prevRoute) => {
      if (location.pathname !== prevRoute) {
        setShowMenu(false);
      }
    },
    undefined,
  );

  const menuRef = useRef(null);

  useOutsideClick(menuRef, () => setShowMenu(false));

  return (
    <Nav>
      <LogoImage src={logo} />
      <MenuButton onClick={() => setShowMenu(!showMenu)}>
        <MdMenu color="black" size={22} />
      </MenuButton>
      {showMenu && (
        <NavMenu ref={menuRef}>
          <NavLink to="/portfolio" activeStyle>
            Über mich
          </NavLink>
          <NavLink to="/quote" activeStyle>
            Zitat
          </NavLink>
          <NavLink to="/work" activeStyle>
            Werke
          </NavLink>
          <NavLink to="/skills" activeStyle>
            Kenntnisse
          </NavLink>
        </NavMenu>
      )}
    </Nav>
  );
};

export default Header;
