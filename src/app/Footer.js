import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import fbLogo from '../images/fb_logo.png';
import instaLogo from '../images/instagram_logo.png';
import { colors } from './styles';

const Container = styled.footer`
  height: 195px;
  display: flex;
  align-items: center;
  background: #d2cec5 0% 0% no-repeat padding-box;
  padding: 0px 60px 0px 55px;
  justify-content: space-between;
  margin-top: 50px;
  @media screen and (max-width: 835px) {
    flex-direction: column;
    padding: 30px;
    align-items: stretch;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

const SocialImage = styled.img`
  width: 50px;
  height: 50px;
  &.margin {
    margin-right: 20px;
  }
`;

const LinkContainer = styled.div`
  border-top: 2px solid ${colors.fontOnFooter};
`;

const LinkText = styled.p`
  margin: 8.5px 0px;
  text-align: right;
  font-size: 15px;
  font-family: Monte Med;
  letter-spacing: 0.45px;
  color: ${colors.fontOnFooter};
`;

const Link = styled(NavLink)`
  margin: 0;
  text-decoration: none;
`;

const Footer = () => {
  return (
    <Container>
      <SocialContainer>
        <NavLink
          target="_blank"
          to="https://www.facebook.com/hermann.dethleffsen"
        >
          <SocialImage className="margin" src={fbLogo} />
        </NavLink>
        <NavLink
          target="_blank"
          to="https://www.instagram.com/hermanndethleffsen/"
        >
          <SocialImage src={instaLogo} />
        </NavLink>
      </SocialContainer>
      <ContactContainer>
        <LinkContainer>
          <Link to="tel:+491728870568">
            <LinkText>0172/8870568</LinkText>
          </Link>
        </LinkContainer>
        <LinkContainer style={{ marginTop: '10px' }}>
          <Link to="mailto:hermann.dethleffsen@gmail.com">
            <LinkText>Hermann.Dethleffsen@gmail.com</LinkText>
          </Link>
        </LinkContainer>
      </ContactContainer>
    </Container>
  );
};

export default Footer;
