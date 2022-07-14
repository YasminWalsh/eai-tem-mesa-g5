import styled from 'styled-components';

export const CatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto;
  gap: 1rem;
  padding: 0 0 50px;

  h2 {
    color: var(--dark-gray);
    font-size: 2.5rem;
    font-weight: 500;
    padding: 1rem 1rem 0 1rem;
  }
`;
