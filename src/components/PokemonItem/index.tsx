/* eslint-disable react/no-array-index-key */
import React, { LiHTMLAttributes, useEffect, useState } from 'react';

import apiPokemon from '../../helpers/api';
import { API_URL } from '../../helpers/consts';

import {
  PokemonAbilityList,
  PokemonItemStyled,
  PokemonType,
  PokemonTypeList,
} from './styles';

interface PokemonItemProps extends LiHTMLAttributes<HTMLLIElement> {
  url: string;
}

interface PokemonData {
  id: number;
  name: string;
  imageUrl: string;
  types: Array<string>;
  abilities: Array<string>;
}

const PokemonItem: React.FC<PokemonItemProps> = ({ url, ...props }) => {
  const [pokemonData, setPokemonData] = useState<PokemonData>({
    id: 0,
    name: '',
    imageUrl: '',
    types: [],
    abilities: [],
  });

  async function fetchPokemonData(url: string) {
    await apiPokemon.get(url.replace(API_URL, '')).then(res => {
      const { id, name, sprites, types, abilities } = res.data;

      const pokemonTypesList = types.map(
        (typeItem: { type: { name: string } }) => {
          return typeItem.type.name;
        },
      );

      const pokemonAbilitiesList = abilities.map(
        (typeItem: { ability: { name: string } }) => {
          return typeItem.ability.name;
        },
      );

      setPokemonData({
        id,
        name,
        imageUrl: sprites.front_default,
        types: pokemonTypesList,
        abilities: pokemonAbilitiesList,
      });
    });
  }

  useEffect(() => {
    fetchPokemonData(url);
  }, [url]);

  return (
    <PokemonItemStyled
      {...props}
      key={pokemonData.id}
      type={pokemonData.types[0]}
    >
      <span>#{pokemonData.id}</span>
      <img src={pokemonData.imageUrl} alt={`${pokemonData.name}`} />

      <div className="pokemonItem__content">
        <p>{pokemonData.name}</p>
        <PokemonAbilityList>
          <h2>Abilities:</h2>
          {pokemonData.abilities.map((ability, index) => (
            <li key={index}>{ability}</li>
          ))}
        </PokemonAbilityList>
        <PokemonTypeList>
          {pokemonData.types.map((typeItem, index) => (
            <PokemonType key={index} type={typeItem}>
              {typeItem}
            </PokemonType>
          ))}
        </PokemonTypeList>
      </div>
    </PokemonItemStyled>
  );
};

export default PokemonItem;
