import React from 'react';
import styled from 'styled-components';
import iconImage from '../images/ship.png';
import image from '../images/potrait.jpg';
import { H1 } from '../app/styles';
import ScrollButton from '../app/ScrollButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  position: relative;
  margin-top: 69px;
  @media screen and (max-width: 835px) {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 319px;
  padding: 0 30px;
  @media screen and (max-width: 835px) {
    max-width: 100%;
    margin-top: 70px;
  }
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
  margin: 0 30px;
  @media screen and (max-width: 1100px) {
    box-sizing: border-box;
    overflow: hidden;
    padding-bottom: 260px;
  }
`;

const IconImage = styled.img`
  width: 216px;
  height: 83px;
  margin-bottom: 96px;
  @media screen and (max-width: 835px) {
    align-self: flex-end;
  }
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
  @media screen and (max-width: 1100px) {
    width: 500px;
  }
`;

const Spacer = styled.div`
  width: 10%;
  @media screen and (max-width: 1100px) {
    width: 0;
  }
`;

const Quote = () => {
  return (
    <Container>
      <Content>
        <ImageContainer>
          <HeadlineContainer>
            <H1>
              ZI<span style={{ color: 'white' }}>{`TAT`}</span>
            </H1>
          </HeadlineContainer>
          <Image src={image} />
        </ImageContainer>
        <Spacer />
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
            Natur und die Städte sind die größten Inspirationquellen. Man muss
            nur die Augen auf haben.
          </Text>
        </TextContainer>
      </Content>
      <ScrollButton />
    </Container>
  );
};

export default Quote;
