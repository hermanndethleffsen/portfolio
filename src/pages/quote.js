import React from 'react';
import styled from 'styled-components';
import iconImage from '../images/ship.png';
import image from '../images/potrait.jpg';
import { H1 } from '../app/styles';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  margin-top: 69px;
  margin-bottom: 200px;
`;

const TextContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 319px;
`;

const Text = styled.p`
  text-align: left;
  font-family: Monte Reg;
  font-size: 30px;
  letter-spacing: 0px;
`;

const ImageContainer = styled.div`
  display: flex;
  position: relative;
  margin-right: 274px;
`;

const IconImage = styled.img`
  width: 216px;
  height: 83px;
  margin-bottom: 96px;
`;

const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  transform: rotate(-90deg);
  top: 235px;
  left: -300px;
`;

const Image = styled.img`
  width: 709px;
  height: 549px;
  object-fit: cover;
`;

const Quote = () => {
  return (
    <Container>
      <ImageContainer>
        <HeadlineContainer>
          <H1>
            ZI<span style={{ color: 'white' }}>{`TAT`}</span>
          </H1>
        </HeadlineContainer>
        <Image src={image} />
      </ImageContainer>
      <TextContainer>
        <IconImage src={iconImage} />

        <Text>
          Ein gutes Design entsteht durch gute Teamarbeit und Rücksprache.
          Vertrauen in die Teammitglieder muss auch gegeben sein.
        </Text>
        <Text>
          „Good design is as little design as possible“. Ein Spruch von Dieter
          Rams, der mich in meinem Design geprägt hat.
        </Text>
        <Text>
          Emotionale Beschäftigung mit dem Kunden ist sehr wichtig, denn nur
          dann ist es möglich, dem Kunden sein Traumdesign zu entwerfen. Die
          Natur und die Städte sind die größten Inspirationquellen. Man muss nur
          die Augen auf haben.
        </Text>
      </TextContainer>
    </Container>
  );
};

export default Quote;
