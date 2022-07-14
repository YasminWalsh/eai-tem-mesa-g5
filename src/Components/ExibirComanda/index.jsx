import React from 'react';
import StyledButton from '../Button/style';
import { BodyContainer, Box } from './style';
import edit from '../../assets/iconDashRestaurant/editarProduct.svg';
import axios from 'axios';
import { useRestaurantDash } from '../../Providers/RestaurantDash';

const ExibirComanda = ({ setClose, comandaSelected }) => {
  const { reloadRestaurant, restaurantLogged } = useRestaurantDash();
  const token = JSON.parse(localStorage.getItem('@login:token'));
  const idComandaSelected = comandaSelected.id;

  const handleDeleteComanda = () => {
    const data = {
      comandas: restaurantLogged.comandas.filter(
        comanda => comanda.id !== idComandaSelected
      )
    };

    axios({
      method: 'PATCH',
      url: `https://eai-tem-mesa.herokuapp.com/restaurants/${restaurantLogged.id}`,
      data,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(_ => {
        toast.success('Comanda excluída com sucesso.');
      })
      .catch(_ => {
        toast.error('Algo deu errado.');
      })
      .finally(() => {
        setClose();
        reloadRestaurant();
      });
  };

  return (
    <Box>
      <div>
        <div className="containerHeaderModal">
          <div>
            <img src={edit} />
            <p>Dados: Comanda </p>
          </div>

          <StyledButton background="transparent" onClick={setClose}>
            x
          </StyledButton>
        </div>
      </div>
      <BodyContainer>
        <div className="boxInfosComanda">
          <p>Nome do responsável: {comandaSelected.name} </p>
          <span>Quantidade de mesas ocupadas: {comandaSelected.qtdTable}</span>
          <span>Código da mesa: {comandaSelected.codTable}</span>
        </div>

        <StyledButton background="blue" onClick={handleDeleteComanda}>
          Excluir comanda
        </StyledButton>
      </BodyContainer>
    </Box>
  );
};

export default ExibirComanda;
