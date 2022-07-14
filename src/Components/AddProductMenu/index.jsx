import React from 'react';
import StyledButton from '../Button/style';
import Modal from '@mui/material/Modal';
import { toast } from 'react-toastify';
import { useState } from 'react';
import axios from 'axios';
import FormMenu from '../FormMenu';
import { useRestaurantDash } from '../../Providers/RestaurantDash';
import nextId from 'react-id-generator';

const AddProductMenu = () => {
  const [open, setOpen] = useState(false);
  const { restaurantLogged, reloadRestaurant } = useRestaurantDash();

  const idProduto = nextId();
  const token = JSON.parse(localStorage.getItem('@login:token'));

  const onSubmit = formData => {
    const newFormData = {
      menu: [...restaurantLogged.menu, { ...formData, id: idProduto }]
    };

    axios({
      method: 'PATCH',
      url: `https://eai-tem-mesa.herokuapp.com/restaurants/${restaurantLogged.id}`,
      data: newFormData,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(_ => {
        toast.success('Produto adicionado com sucesso');
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
        onClick={() => setOpen(true)}
      >
        Adicionar novo item
      </StyledButton>
      <Modal open={open}>
        <FormMenu onSubmit={onSubmit} setClose={() => setOpen(false)} />
      </Modal>
    </>
  );
};

export default AddProductMenu;
