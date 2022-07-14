import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import api from '../../services/api';

export const HomeContext = createContext([]);

export const HomeProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState();

  function loadRestaurants() {
    api.get('/restaurants').then(response => setRestaurants(response.data));
  }

  useEffect(() => {
    loadRestaurants();
  }, []);

  return (
    <HomeContext.Provider value={{ restaurants, loadRestaurants }}>
      {children}
    </HomeContext.Provider>
  );
};
export const useHome = () => useContext(HomeContext);
