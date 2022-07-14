import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import api from '../../services/api';

export const RestaurantContext = createContext({});

export const RestaurantProvider = ({ children }) => {
  const [restaurant, setRestaurant] = useState({});
  const [restaurantId, setRestaurantId] = useState(null);

  function loadRestaurant() {
    api.get(`/restaurants/${restaurantId}`).then(response => {
      setRestaurant(response.data);
    });
  }

  useEffect(() => {
    loadRestaurant();
  }, [restaurantId]);

  return (
    <RestaurantContext.Provider
      value={{ restaurant, loadRestaurant, setRestaurantId }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
