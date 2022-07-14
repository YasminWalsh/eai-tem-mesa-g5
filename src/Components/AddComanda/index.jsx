import React from 'react';
import StyledButton from '../Button/style';
import Modal from '@mui/material/Modal';
import { toast } from 'react-toastify';
import { useState } from 'react';
import axios from 'axios';
import api from '../../services/api';
import FormComanda from '../FormComanda';
import nextId from 'react-id-generator';
import { useRestaurantDash } from '../../Providers/RestaurantDash';

const AddComanda = () => {
  const [open, setOpen] = useState(false);
  const { restaurantLogged, reloadRestaurant } = useRestaurantDash();

  const idComanda = nextId();
  const token = JSON.parse(localStorage.getItem('@login:token'));

  const onSubmit = formData => {
    const attTable = restaurantLogged.mesas - formData.qtdTable;

    const newFormData = {
      comandas: [...restaurantLogged.comandas, { ...formData, id: idComanda }]
    };
    axios({
      method: 'PATCH',
      url: `https://eai-tem-mesa.herokuapp.com/restaurants/${restaurantLogged.id}`,
      data: newFormData,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        toast.success('Comanda aberta com sucesso');
        setOpen(false);
        reloadRestaurant();
      })
      .catch(_ => {
        toast.error('Algo deu errado.');
      });
  };

  return (
    <>
      <StyledButton
        background="blue"
        type="submit"
        onClick={() => {
          setOpen(true);
        }}
      >
        Adicionar comanda
      </StyledButton>
      <Modal open={open}>
        <FormComanda
          restaurantData={restaurantLogged}
          onSubmit={onSubmit}
          setClose={() => setOpen(false)}
        />
      </Modal>
    </>
  );
};

export default AddComanda;
