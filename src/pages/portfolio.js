import React from 'react';
import styled from 'styled-components';
import Image1 from '../images/portfolio/HGD_Visitenkarte.jpg';
import Image2 from '../images/portfolio/Carla_Visitenkarte.jpg';
import Image3 from '../images/portfolio/Coastdesign.jpg';
import Image4 from '../images/portfolio/Black-sheep_Visitenkarte.jpg';
import Image5 from '../images/portfolio/Hermann_Visitenkarten.jpg';
import Image6 from '../images/portfolio/Hevanca_Visitenkarte.jpg';
import Image7 from '../images/portfolio/Phillip_Wozniak_Visitenkarte.jpg';
import Image8 from '../images/portfolio/Kaffemagazin.jpg';
import Image9 from '../images/portfolio/Minimalsimus_Buch.jpg';
import Image10 from '../images/portfolio/NohMuh_Verpackungsdesign.jpg';
import Image11 from '../images/portfolio/GotBag.jpg';
import Image12 from '../images/portfolio/HouseMusicfestival_Plakat.jpg';
import Image13 from '../images/portfolio/Genuss-mit-Stil_Plakat.jpg';
import Image14 from '../images/portfolio/Minimus_Plakat.jpg';
import Image15 from '../images/portfolio/Conroo_Plakat.jpg';
import Image16 from '../images/portfolio/Kippe-Weg_Plakat.jpg';
import Image17 from '../images/portfolio/Sauf-das-Meer-leer.jpg';
import Image18 from '../images/portfolio/Happy-BirthdayTorte.jpg';
import Image19 from '../images/portfolio/GlueckwunschRot_Karte.jpg';
import Image20 from '../images/portfolio/Torte_Karte.jpg';
import Image21 from '../images/portfolio/Hafenbar.jpg';
import Image22 from '../images/portfolio/Audi_Galamenu.jpg';
import Image23 from '../images/portfolio/The-Future-is-Female_Gelb.jpg';
import Image24 from '../images/portfolio/Audi_Einladungskarte.jpg';
import Image25 from '../images/portfolio/The-Future-is-Female_Schwarz.jpg';
import Image26 from '../images/portfolio/H95-Design.jpg';
import Image27 from '../images/portfolio/Minimus-Instagram.jpg';
import Image28 from '../images/portfolio/Auto_Langzeitbelichtung.jpg';
import Image29 from '../images/portfolio/Schwarzwald.jpg';
import Image30 from '../images/portfolio/Gelbe_Linie.jpg';
import Image31 from '../images/portfolio/Metall.jpg';
import Image32 from '../images/portfolio/Zigaretten.jpg';
import Image33 from '../images/portfolio/Musseum.jpg';
import Image34 from '../images/portfolio/OlivenPflanze.jpg';
import Image35 from '../images/portfolio/Architektur.jpg';
import Image36 from '../images/portfolio/Wohnzimmer.jpg';
import Image37 from '../images/portfolio/Goldfisch.jpg';
import Image38 from '../images/portfolio/Otter.jpg';
import Image39 from '../images/portfolio/Abstaktion.jpg';
import Image40 from '../images/portfolio/Wohnzimmer_Zeichnung.jpg';
import Image41 from '../images/portfolio/Diskusswerfer.jpg';
import Image42 from '../images/portfolio/Badezimmer_Zeichnung.jpg';
import ScrollButton from '../app/ScrollButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 50px;
  row-gap: 50px;
  position: relative;
  width: 100vw;
  max-width: 100vw;
  @media screen and (max-width: 835px) {
    column-gap: 30px;
    row-gap: 30px;
  }
`;

const EmptyDiv = styled.div`
  position: relative;
  grid-column-start: ${({ start }) => start || 1};
  grid-column-end: ${({ end }) => end || 6};
  ${({ rowStart, rowEnd }) =>
    !!rowStart && !!rowEnd ? `grid-row: ${rowStart} / ${rowEnd}` : undefined};
`;

const Text = styled.p`
  font-family: PWCinderblox;
  font-size: 4vw;
  margin: 0;
  width: max-content;
  overflow: hidden;
`;

const SmallText = styled.p`
  margin: 0;
  font-family: Monte Reg;
  font-size: 25px;
  max-width: 420px;
  margin-top: 20px;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  grid-column: ${({ start, end }) => `${start || 1} / ${end || 6}`};
  ${({ rowStart, rowEnd }) =>
    !!rowStart && !!rowEnd ? `grid-row: ${rowStart} / ${rowEnd}` : undefined};
`;

const Portfolio = () => {
  return (
    <Container>
      <Content>
        <Image src={Image1} start="1" end="4" />
        <EmptyDiv start="4" end="6">
          <Text>
            LOGO <br /> DESIGN
          </Text>
        </EmptyDiv>

        <EmptyDiv start="1" end="3" />
        <Image src={Image2} start="3" end="4" />
        <EmptyDiv start="4" end="6" />

        <EmptyDiv start="1" end="3" />
        <Image src={Image3} start="3" end="4" rowStart="3" rowEnd="4" />
        <Image src={Image4} start="4" end="6" rowStart="3" rowEnd="5" />
        <Image src={Image5} start="3" end="4" rowStart="4" rowEnd="5" />

        <Image src={Image6} start="1" end="4" />

        <EmptyDiv start="1" end="4" />
        <Image src={Image7} start="4" end="6" />

        <Image src={Image8} start="1" end="4" />
        <EmptyDiv
          start="4"
          end="6"
          style={{ writingMode: 'vertical-rl', rotate: '180deg' }}
        >
          <Text style={{ textAlign: 'right' }}>
            MAGAZIN/BUCH <br /> GESTALTUNG
          </Text>
        </EmptyDiv>

        <Image src={Image9} start="1" end="4" />
        <EmptyDiv start="4" end="6" />

        <Image src={Image10} start="1" end="3" />
        <Image src={Image11} start="3" end="4" />
        <EmptyDiv start="4" end="6" />

        <EmptyDiv
          start="1"
          end="3"
          style={{ writingMode: 'vertical-lr', rotate: '180deg' }}
          rowStart="10"
          rowEnd="12"
        >
          <Text style={{ textAlign: 'right' }}>PLAKATGESTALTUNG</Text>
        </EmptyDiv>
        <Image src={Image12} start="3" end="4" />
        <EmptyDiv start="4" end="6" />

        <Image src={Image13} start="3" end="4" />
        <EmptyDiv start="4" end="6" />

        <EmptyDiv start="1" end="3" />
        <Image src={Image14} start="3" end="6" />

        <EmptyDiv start="1" end="3" />
        <Image src={Image15} start="3" end="6" />

        <Image src={Image16} start="1" end="3" />
        <Image src={Image17} start="3" end="6" />

        <Image src={Image18} start="1" end="3"  style={{objectFit:'contain'}}/>
        <EmptyDiv start="3" end="6" style={{ writingMode: 'vertical-lr' }} rowStart="15" rowEnd="17">
          <Text>KARTEN/SOCIAL MEDIA</Text>
        </EmptyDiv>

        <Image src={Image19} start="1" end="3" style={{objectFit:'contain'}} />

        <Image
          style={{ border: '1px solid #707070', maxHeight:'565px' }}
          src={Image20}
          start="1"
          end="3"
        />
        <Image src={Image21} start="3" end="6" rowStart="17" rowEnd="19" />

        <EmptyDiv start="1" end="3" />
        <Image src={Image22} start="3" end="6" />

        <Image height={852} src={Image23} start="1" end="3" />
        <Image src={Image24} start="3" end="6" />

        <Image src={Image25} start="1" end="3" />
        <EmptyDiv start="3" end="6" />

        <Image src={Image26} start="1" end="3"  style={{ border: '1px solid #707070'}}/>
        <Image src={Image27} start="3" end="6" />

        <EmptyDiv
          start="1"
          end="3"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Text>FOTOGRAFIE</Text>
        </EmptyDiv>
        <Image src={Image28} start="3" end="6" />

        <EmptyDiv start="1" end="3" />
        <Image src={Image29} start="3" end="4" />
        <Image src={Image30} start="4" end="6" />

        <EmptyDiv start="1" end="3" />
        <Image src={Image31} start="3" end="4" />
        <EmptyDiv start="4" end="6" />

        <Image src={Image32} start="1" end="3"  rowStart="26" rowEnd="28"/>
        <Image height="373" src={Image33} start="3" end="4" />
        <EmptyDiv start="4" end="6" />

        <Image src={Image34} start="1" end="3" />
        <Image src={Image35} start="3" end="6" />

        <EmptyDiv start="1" end="3" style={{ writingMode: 'vertical-rl' }}>
          <Text>ZEICHNUNG</Text>
        </EmptyDiv>
        <Image src={Image36} start="3" end="6" />

        <EmptyDiv start="1" end="3" />
        <Image src={Image37} start="3" end="6" />

        <EmptyDiv start="1" end="3" />
        <Image src={Image38} start="3" end="6" />

        <EmptyDiv start="1" end="3" />
        <Image src={Image39} start="3" end="4" />
        <EmptyDiv start="4" end="6" />

        <Image
          style={{ border: '1px solid #707070' }}
          src={Image40}
          start="1"
          end="3"
        />
        <Image src={Image41} start="3" end="4" />
        <EmptyDiv start="4" end="6" />

        <Image
          style={{ border: '1px solid #707070' }}
          src={Image42}
          start="1"
          end="3"
        />
        <EmptyDiv start="3" end="6">
          <Text>
            Noch mehr ist <br /> bald da.
          </Text>
        </EmptyDiv>
      </Content>
      <ScrollButton />
    </Container>
  );
};

export default Portfolio;
