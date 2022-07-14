import React, { useEffect, useState } from 'react';
import { Container, Content } from './style';
import logo from '../../assets/Logo/withBg.png';
import StyledButton from '../../Components/Button/style';
import { useHistory } from 'react-router-dom';
import menu from '../../assets/iconDashRestaurant/menu.svg';
import logout from '../../assets/iconDashRestaurant/logout.svg';
import dados from '../../assets/iconDashRestaurant/dados.svg';
import table from '../../assets/iconDashRestaurant/table.svg';
import { useRestaurantDash } from '../../Providers/RestaurantDash';

const DashRestaurant = () => {
  const history = useHistory();
  const { restaurantLogged, reloadRestaurant } = useRestaurantDash();

  useEffect(() => {
    reloadRestaurant();
  }, []);

  const TOKEN = localStorage.getItem('@login:token');

  if (!TOKEN) {
    return history.push('/home');
  }

  return (
    <Container>
      <Content>
        <div onClick={() => history.push('/home')}>
          <img src={logo}></img>
        </div>
        <h2>Olá, {restaurantLogged.name}</h2>
        <div className="containerButton">
          <StyledButton
            background="transparent"
            onClick={() => history.push('/menu')}
          >
            <div>
              <img src={menu} />
            </div>
            Cardápio
          </StyledButton>
          <StyledButton
            background="transparent"
            onClick={() => history.push('/restaurant-profile')}
          >
            <div>
              <img src={dados} />
            </div>
            Editar dados
          </StyledButton>
          <StyledButton
            background="transparent"
            onClick={() => history.push('/tables')}
          >
            <div>
              <img src={table} />
            </div>
            Mesas
          </StyledButton>
          <StyledButton
            background="transparent"
            onClick={() => {
              localStorage.clear();
              history.push('/login');
            }}
          >
            <div>
              <img src={logout} />
            </div>
            Logout
          </StyledButton>
        </div>
      </Content>
    </Container>
  );
};

export default DashRestaurant;
