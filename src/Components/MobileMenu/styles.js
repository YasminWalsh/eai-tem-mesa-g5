import styled from 'styled-components';

export const BottomMenuContainer = styled.div`
  width: 100%;
  height: 50px;

  position: fixed;

  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-around;

  background: var(--white);

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.24);

  z-index: 10000;

  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 70px;

    color: var(--gray);

    text-decoration: none;
    font-weight: 500;

    padding: 8px 0;
  }

  svg {
    height: auto;
    width: 40px;
  }
`;
