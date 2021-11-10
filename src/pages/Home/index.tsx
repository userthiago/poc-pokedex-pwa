import React from 'react';

import Header from '../../components/Header';
import PokedexList from '../../components/PokedexList';

import { HomeContainer } from './styles';

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Header />
      <PokedexList />
    </HomeContainer>
  );
};

export default Home;
