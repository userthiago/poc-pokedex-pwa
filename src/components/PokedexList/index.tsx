/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import apiPokemon from '../../helpers/api';
import PokemonItem from '../PokemonItem';
import { ListStyled } from './styles';

interface PokemonData {
  name: string;
  url: string;
}

const PokedexList: React.FC = () => {
  const [pokemon, setPokemon] = useState<Array<PokemonData>>([]);

  async function fetchPokemonData() {
    const pokemonListResponse = await apiPokemon
      .get('/pokemon?limit=10&offset=0')
      .then(res => res.data.results)
      // eslint-disable-next-line no-console
      .catch(err => console.log(err));

    setPokemon([...pokemonListResponse]);
  }

  useEffect(() => {
    fetchPokemonData();
  }, []);

  return (
    <ListStyled>
      {pokemon.map(pokemonUnit => {
        return <PokemonItem key={pokemonUnit.name} url={pokemonUnit.url} />;
      })}
    </ListStyled>
  );
};

export default PokedexList;
