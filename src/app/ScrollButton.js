import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import fish from '../images/fish.png';

const Button = styled.button`
  decoration: none;
  border: none;
  background: none;
  position: sticky;
  z-index: 800;
  bottom: 30px;
  right: 30px;
  opacity: 1;
  cursor: pointer;
  width: max-content;
  align-self: flex-end;
`;

const Image = styled.img`
  width: 60px;
  height: 105px;
  object-fit: cover;
`;

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const limit = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
      );

      if (window.pageYOffset > 300 && limit > 1500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  if (!showButton) return null;
  return (
    <Button
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
    >
      <Image src={fish} />
    </Button>
  );
};

export default ScrollButton;
