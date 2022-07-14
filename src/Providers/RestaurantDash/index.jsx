import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import api from '../../services/api';

export const RestaurantDashContext = createContext({});

export const RestaurantDashProvider = ({ children }) => {
  const [restaurantLogged, setRestaurantLogged] = useState({});

  const reloadRestaurant = () => {
    const idRestaurantLogged = JSON.parse(
      localStorage.getItem('@dashRestaurant:id')
    );

    api
      .get('/restaurants/' + idRestaurantLogged)
      .then(response => setRestaurantLogged(response.data));
  };

  useEffect(() => {
    reloadRestaurant();
  }, []);

  return (
    <RestaurantDashContext.Provider
      value={{
        restaurantLogged,
        setRestaurantLogged,
        reloadRestaurant
      }}
    >
      {children}
    </RestaurantDashContext.Provider>
  );
};

export const useRestaurantDash = () => useContext(RestaurantDashContext);
