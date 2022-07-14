import React from 'react';
import StyledButton from '../Button/style';
import Modal from '@mui/material/Modal';
import { toast } from 'react-toastify';
import { useState } from 'react';
import editar from '../../assets/iconDashRestaurant/editarProduct.svg';
import axios from 'axios';
import FormMenu from '../FormMenu';
import { useRestaurantDash } from '../../Providers/RestaurantDash';

const EditProductMenu = ({ product }) => {
  const [open, setOpen] = useState(false);
  const { restaurantLogged, reloadRestaurant } = useRestaurantDash();

  const token = JSON.parse(localStorage.getItem('@login:token'));

  const onSubmit = formData => {
    const data = {
      menu: restaurantLogged.menu.map(produto =>
        produto.id === product.id ? formData : produto
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
        toast.success('Produto alterado com sucesso');
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
        background="transparent"
        type="submit"
        onClick={() => setOpen(true)}
      >
        <img src={editar} />
        Editar
      </StyledButton>

      <Modal open={open}>
        <FormMenu
          product={product}
          onSubmit={onSubmit}
          setClose={() => setOpen(false)}
        />
      </Modal>
    </>
  );
};

export default EditProductMenu;
