import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  border: 1.5px solid;
  outline: none;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.4s;

  font-size: 0.9rem;
  font-weight: bold;

  padding: 15px 20px;

  ${props => {
    switch (props.background) {
      case 'blue':
        return css`
          background: var(--dark-blue);
          color: var(--white);
          border-color: var(--dark-blue);

          &:hover {
            background: var(--blue);
            border-color: var(--blue);
          }
        `;
      case 'transparent':
        return css`
          background: transparent;
          color: var(--semi-black);
          border-color: var(--semi-black);

          &:hover {
            color: var(--blue);
            border-color: var(--blue);
          }
        `;
      case 'black':
        return css`
          background: var(--semi-black);
          color: var(--white);
          border-color: var(--semi-black);

          &:hover {
            background: var(--semi-black);
            color: var(--white);
            border-color: var(--semi-black);
          }
        `;
    }
  }};
`;
export default StyledButton;
