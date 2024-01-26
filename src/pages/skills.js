import React from 'react';
import styled from 'styled-components';
import iconImage from '../images/skills.png';
import image from '../images/kentnisse.jpg';

import { H1 } from '../app/styles';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 69px;
`;

const TextContainer = styled.div`
  max-width: 363px;
  margin: 0;
  margin-right: 190px;
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
`;

const Image = styled.img`
  width: 504px;
  height: 627px;
`;

const IconImage = styled.img`
  width: 360px;
  margin-top: 50px;
`;

const Blogs = () => {
  return (
    <Container>
      <TextContainer>
        <Text>
          In meiner dreijährigen Ausbildung zum staatlich geprüften
          Grafikdesigner habe ich mit Photoshop, In Design, Illustrator, und XD
          gearbeitet. Diese Programme waren meine täglichen Begleiter, wodurch
          ich sie gut kennen- und nutzengelernt habe. Zudem habe ich in der
          Ausbildung die Grundkenntnisse des Fotografierens erlernt, unterstützt
          durch die Nutzung eines eigenen Fotostudios der Schule. Die Themen
          Typografie, Schriftgrafik, Zeichnen und das Schreiben von Werbetexten
          waren weitere Teile der Ausbildung. Bei Sachgebieten, die ich nicht
          kenne bzw. bisher nicht viel genutzt habe, bin ich immer hoch
          motiviert diese zu erlernen bzw. mich in diesen zu verbessern.
        </Text>
        <IconImage src={iconImage} />
      </TextContainer>
      <ImageContainer>
        <Image src={image} />
        <H1
          style={{
            fontSize: '125px',
            position: 'absolute',
            bottom: -70,
            left: -5,
          }}
        >
          KENNTNISSE
        </H1>
      </ImageContainer>
    </Container>
  );
};

export default Blogs;
