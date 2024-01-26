import React from 'react';
import styled from 'styled-components';
import potrait from '../images/potrait.jpg';
import hat from '../images/hat.png';
import schwimmer from '../images/schwimmer.png';
import videoclip from '../video/film.mp4';

const PotraitImage = styled.img`
  width: 182px;
  height: 175px;
  object-fit: cover;
  margin-bottom: 30px;
`;

const SchwimmerImage = styled.img`
  width: 108px;
  height: 193px;
  object-fit: cover;
  margin-left: 20px;
`;

const HatImage = styled.img`
  width: 85px;
  height: 41px;
  object-fit: cover;
  margin-right: 60px;
`;

const H1 = styled.h1`
  font-family: PWCinderblox;
  font-size: 163px;
  color: black;
  margin: 0;
  &.reverse {
    color: white;
  }
`;

const HeadlineContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 100px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const H2 = styled.h2`
  font-family: Monte Bold;
  font-size: 42px;
  line-height: 57px;
  color: #050e20;
  transform: translate(-110px, 0px);
`;

const Text = styled.p`
  font-family: Monte Reg;
  font-size: 21px;
  line-height: 29px;
  color: black;
  margin: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 69px;
  margin-bottom: 200px;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 254px;
  margin: 0 auto;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
const ContentContainer = styled.div`
  display: flex;
`;

const Home = () => {
  return (
    <Container>
      <TopContainer>
        <HeadlineContainer>
          <SchwimmerImage src={schwimmer} />
          <Row>
            <H1>HEI</H1>
            <H1 className="reverse">MAT</H1>
          </Row>
          <Row>
            <H1>HA</H1>
            <H1 className="reverse">FEN</H1>
          </Row>
        </HeadlineContainer>
        <PotraitImage src={potrait} />
        <video
          style={{ objectFit: 'cover' }}
          width="943"
          height="665"
          autoplay
          muted
        >
          <source src={videoclip} type="video/mp4"></source>
        </video>
      </TopContainer>
      <TextContainer>
        <H2>Über mich</H2>
        <Row style={{ transform: 'translate(-145px, 0px)' }}>
          <HatImage src={hat} />
          <Text style={{ marginBottom: '40px' }}>Moin ich bin Hermann,</Text>
        </Row>
        <ContentContainer>
          <Text style={{ marginRight: '60px', maxWidth: '560px' }}>
            ein in Flensburg geborener Grafikdesigner, der nun in Holzkirchen
            wohnt. Bis zum Jahresende 2023 lebte ich in Mannheim, wo ich meine
            Ausbildung zum staatlich geprüften Grafikdesigner absolvierte und im
            Juli 2022 erfolgreich abschloss. Anschließend arbeitete ich bis
            Dezember 2023 als Grafiker in der Agentur Ressmann in Mannheim,
            hauptsächlich verantwortlich für die Gestaltung von Print- und
            Webmedien.
          </Text>

          <Text style={{ maxWidth: '650px' }}>
            Es bereitet mir Freude, kreativ tätig zu sein, insbesondere bei der
            Entwicklung neuer Designs und allem, was dazugehört. Zudem liebe ich
            es, spätere Printmedien in der Hand zu halten und das Ergebnis zu
            betrachten. Webdesign macht mir ebenfalls viel Spaß, da in diesem
            Bereich unterschiedliche Gestaltungsmöglichkeiten vorhanden sind.
            Mein bisheriger Lebensweg ermöglicht es mir, einzigartige Designs zu
            entwickeln und auch abstrakt zu gestalten. Überzeugen Sie sich
            selbst – unter dem Reiter „Werke“ finden Sie einige meiner Arbeiten,
            die in den letzten Jahren entstanden sind.
          </Text>
        </ContentContainer>
      </TextContainer>
    </Container>
  );
};

export default Home;
