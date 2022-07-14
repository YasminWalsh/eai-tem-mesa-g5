import React from 'react';
import { Container, Content } from './style';
import logo from '../../assets/Logo/withBg.png';

import StyledButton from '../../Components/Button/style';
import ProductCardMenu from '../../Components/ProductCardMenu';
import AddProductMenu from '../../Components/AddProductMenu';
import { useHistory } from 'react-router-dom';

const Menu = () => {
  const history = useHistory();

  const TOKEN = localStorage.getItem('@login:token');

  if (!TOKEN) {
    return history.push('/signup');
  }

  return (
    <Container>
      <Content>
        <div>
          <img src={logo} onClick={() => history.push('/home')}></img>
          <StyledButton
            background="transparent"
            onClick={() => history.push('/dashrestaurant')}
          >
            {' '}
            Voltar
          </StyledButton>
        </div>

        <div>
          <h2>Cardápio</h2>
          <AddProductMenu />
        </div>

        <ul>
          <ProductCardMenu />
        </ul>
      </Content>
    </Container>
  );
};
export default Menu;
