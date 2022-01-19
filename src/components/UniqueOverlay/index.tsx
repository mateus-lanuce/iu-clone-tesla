import { useTransform } from 'framer-motion';
import React from 'react';
import useWrapperScroll from '../Model/useWrapperScroll';

import { Container, Header, Logo, Burger, Footer } from './styles';

const UniqueOverlay: React.FC = () => {

  const { scrollyProgress } = useWrapperScroll()

  const opacity = useTransform(scrollyProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">IU clone</a>
          </li>
          <li>
            <a href="#">Made with 💙</a>
          </li>
          <li>
            <a href="#">By Mateus Lanuce</a>
          </li>
          <li>
            <a href="#">With help video of Guilherme Rodz</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
