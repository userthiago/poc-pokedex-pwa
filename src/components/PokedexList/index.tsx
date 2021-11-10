/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import apiPokemon from '../../helpers/api';
import PokemonItem from '../PokemonItem';
import { PokemonListStyled } from './styles';

interface PokemonData {
  name: string;
  url: string;
}

const PokedexList: React.FC = () => {
  const [pokemon, setPokemon] = useState<Array<PokemonData>>([]);
  const [hasData, setHasData] = useState(true);

  const fetchPokemonData = async () => {
    const pokemonListResponse = await apiPokemon
      .get(`/pokemon?limit=30&offset=${pokemon.length}`)
      .then(res => res.data.results)
      // eslint-disable-next-line no-console
      .catch(err => console.log(err));

    if (pokemonListResponse.length > 0) {
      setPokemon(oldState => [...oldState, ...pokemonListResponse]);
    } else {
      setHasData(false);
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  return (
    <PokemonListStyled>
      <InfiniteScroll
        dataLength={pokemon.length}
        next={fetchPokemonData}
        hasMore={hasData}
        loader={<h4>Loading...</h4>}
      >
        {pokemon.map(pokemonUnit => {
          return <PokemonItem key={pokemonUnit.name} url={pokemonUnit.url} />;
        })}
      </InfiniteScroll>
    </PokemonListStyled>
  );
};

export default PokedexList;
