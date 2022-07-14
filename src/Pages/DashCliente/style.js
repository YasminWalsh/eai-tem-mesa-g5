import styled from 'styled-components';

export const DashClientContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  height: 100vh;
  padding: 1rem;
`;
export const Content = styled.div`
  gap: 2%;
  max-width: 1200px;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomeButton = styled.span`
  color: var(--gray);
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  font-weight: 400;
  &:hover{
    color: var(--blue);
    font-weight: 500;
    transition: all .6s cubic-bezier(0,0,.5,1);
  }
`