import React, {useContext, useEffect} from 'react';
import { MenuItem } from '@mui/material';
import {useUserLogged} from "../../Providers/UserLogged";
import {useHistory} from "react-router-dom";

export const SubMenuUser = () => {

  const {userLogged} = useUserLogged();
  const token = localStorage.getItem('@login:token') || false;
  const type = JSON.parse(localStorage.getItem("@login:userType"));

  const history = useHistory();


  function handleMenu(page, clearToken) {
    clearToken !== undefined ? localStorage.clear() : null;
    history.push(page)
  }

  return (
    <>
      {token ? (
        <>
          {type === 'restaurante' ? (
            <MenuItem onClick={() => handleMenu('/dashrestaurant')}>
              Meu Restaurante
            </MenuItem>
          ) : (
            <MenuItem onClick={() => handleMenu('/perfil')}>
              Minha Conta
            </MenuItem>
          )}
          <MenuItem onClick={() => handleMenu('/login', 'clearToken')}>
            Logout
          </MenuItem>
        </>
      ) : (
        <>
          <MenuItem onClick={() => handleMenu('/login')}>Login</MenuItem>
          <MenuItem onClick={() => handleMenu('/signup')}>Register</MenuItem>
        </>
      )}
    </>
  );
};
