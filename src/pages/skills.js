import React from 'react';
import styled from 'styled-components';
import iconImage from '../images/skills.png';
import image from '../images/kentnisse.jpg';
import ScrollButton from '../app/ScrollButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  width: 100%;
  margin-top: 69px;
  @media screen and (max-width: 1080px) {
    flex-direction: column-reverse;
  }
`;

const H1 = styled.h1`
  text-align: left;
  font-family: PWCinderblox;
  font-size: 6rem;
  letter-spacing: 0px;
  color: #0b2535;
  margin: 0;
  position: absolute;
  bottom: -3.5rem;
  left: -5px;

  @media screen and (max-width: 835px) {
    font-size: 3.5rem;
    bottom: -2rem;
    left: 0;
    right: 0;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  max-width: 363px;
  margin: 0;
  margin-right: 190px;
  @media screen and (max-width: 1080px) {
    margin: 30px;
  }
`;

const Text = styled.p`
  text-align: left;
  font-family: Monte Reg;
  font-size: 22px;
  letter-spacing: 0px;
  margin: 0;
  line-height: 30px;
`;

const ImageContainer = styled.div`
  display: flex;
  max-height: 627px;
  position: relative;
  margin: 0;
  @media screen and (max-width: 1080px) {
    margin: 30px;
    margin-bottom: 100px;
  }
  @media screen and (max-width: 835px) {
    margin: 0 auto;
    margin-bottom: 50px;
  }
`;

const Image = styled.img`
  width: 504px;
  height: 627px;
  object-fit: cover;
  @media screen and (max-width: 1080px) {
    width: 80%;
  }

  @media screen and (max-width: 835px) {
    width: 100%;
  }
`;

const IconImage = styled.img`
  width: 360px;
  margin-top: 50px;
`;

const Blogs = () => {
  return (
    <Container>
      <Content>
        <TextContainer>
          <Text>
            In meiner dreijährigen Ausbildung zum staatlich geprüften
            Grafikdesigner habe ich mit Photoshop, In Design, Illustrator, und
            XD gearbeitet. Diese Programme waren meine täglichen Begleiter,
            wodurch ich sie gut kennen- und nutzengelernt habe. Zudem habe ich
            in der Ausbildung die Grundkenntnisse des Fotografierens erlernt,
            unterstützt durch die Nutzung eines eigenen Fotostudios der Schule.
            Die Themen Typografie, Schriftgrafik, Zeichnen und das Schreiben von
            Werbetexten waren weitere Teile der Ausbildung. Bei Sachgebieten,
            die ich nicht kenne bzw. bisher nicht viel genutzt habe, bin ich
            immer hoch motiviert diese zu erlernen bzw. mich in diesen zu
            verbessern.
          </Text>
          <IconImage src={iconImage} />
        </TextContainer>
        <ImageContainer>
          <Image src={image} />
          <H1>KENNTNISSE</H1>
        </ImageContainer>
      </Content>
      <ScrollButton />
    </Container>
  );
};

export default Blogs;
