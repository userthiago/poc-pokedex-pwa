import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--pokedex-color);
  padding: 0.5rem 1rem;
  border: 0;
  border-radius: 0.2rem;
  transition: background-color 0.2s ease-in-out;

  color: var(--white-color);

  &:hover {
    background: var(--pokedex-color--hover);
  }
`;
