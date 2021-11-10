import React, { LiHTMLAttributes, useEffect, useState } from 'react';

import apiPokemon from '../../helpers/api';
import { API_URL } from '../../helpers/consts';

import { PokemonItemStyled } from './styles';

interface PokemonItemProps extends LiHTMLAttributes<HTMLLIElement> {
  name: string;
  url: string;
}

interface PokemonData {
  id: number;
  name: string;
}

const PokemonItem: React.FC<PokemonItemProps> = ({ name, url, ...props }) => {
  const [pokemonData, setPokemonData] = useState<PokemonData>(
    {} as PokemonData,
  );

  async function fetchPokemonData(url: string) {
    await apiPokemon.get(url.replace(API_URL, '')).then(res => {
      const pokemonData = res.data;
      setPokemonData({
        id: pokemonData.id,
        name: pokemonData.name,
      });
    });
  }

  useEffect(() => {
    fetchPokemonData(url);
  }, [url]);

  return (
    <PokemonItemStyled {...props} key={pokemonData.id}>
      {name}
    </PokemonItemStyled>
  );
};

export default PokemonItem;
