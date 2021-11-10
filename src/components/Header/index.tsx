import React from 'react';
import Button from '../Button';

import { HeaderContainer } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div className="headerContainer__content">
        <h1>Pokédex PWA</h1>
        <Button>Recarregar</Button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
