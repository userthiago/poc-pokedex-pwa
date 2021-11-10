import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: var(--primary-color);
  padding: 1rem 1rem;

  .headerContainer__content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 1280px;
    width: 100%;
    margin: 0 auto;

    h1 {
      color: #ffffff;
      font-size: 1.5rem;
      font-weight: 900;
    }
  }
`;
