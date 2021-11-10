import styled from 'styled-components';
import { typeColors } from '../../helpers/consts';
import BackgroundImage from '../../static/img/pokeball-bg.png';

interface PokemonItemStyledData {
  type: string;
}

export const PokemonItemStyled = styled.li<PokemonItemStyledData>`
  position: relative;
  display: flex;
  align-items: center;

  background: ${({ type }) => typeColors[type] || typeColors.unknown};
  border-radius: 0.4rem;
  list-style: none;
  overflow: hidden;

  span {
    position: absolute;
    top: 0;
    left: 0;

    background: var(--white-color);
    padding: 0.2rem;
    border-radius: 0 0 0.4rem 0;

    font-size: 0.8rem;
    font-weight: 500;
  }

  img {
    background-image: url(${BackgroundImage});
    background-size: cover;

    margin: 0 0.5rem;

    height: 96px;
    width: 96px;
  }

  .pokemonItem__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    height: 100%;

    p {
      margin-top: 0.8rem;

      color: var(--white-color);
      font-size: 1.2rem;
      text-transform: capitalize;
    }
  }
`;

export const PokemonAbilityList = styled.ul`
  background: var(--white-color);
  margin: 0.2rem 0.4rem 0.4rem 0;

  padding: 0.4rem;
  border-radius: 0.4rem;

  h2 {
    font-size: 0.8rem;
  }

  li {
    list-style: none;

    font-size: 0.8rem;
    text-transform: capitalize;
  }
`;

export const PokemonTypeList = styled.ul`
  display: flex;
  justify-content: flex-end;

  background: var(--white-color);
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.4rem 0 0.4rem 0;
`;

interface PokemonTypeData {
  type: string;
}

export const PokemonType = styled.li<PokemonTypeData>`
  background: ${({ type }) => typeColors[type] || typeColors.unknown};
  width: min-content;
  padding: 0.25rem 0.5rem;
  border-radius: 0.2rem;
  list-style: none;

  color: var(--white-color);
  font-size: 0.8rem;

  & + li {
    margin-left: 0.4rem;
  }
`;
