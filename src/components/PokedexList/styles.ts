import styled from 'styled-components';

export const ListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;

  max-width: 1280px;
  width: 100%;
  padding: 1.5rem 1rem;
  margin: 0 auto;

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;
