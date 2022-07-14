import React from 'react';
import api from '../../services/api';
import { InputContainer } from './styles';
import {FaSearch} from "react-icons/fa";

export const SearchBar = ({ setSearch, setLoading, atribute, isVisible, noIcon }) => {
  const handleChange = e => {
    setLoading(true);
    api.get(`/restaurants?${atribute}_like=${e}`).then(response => {
      setSearch(response.data);
      setLoading(false);
    });
  };

  return (
    <InputContainer isVisible={!!isVisible}>
      {!noIcon && <FaSearch className="search-icon"/>}
      <input
        placeholder="Buscar restaurante"
        onChange={e => handleChange(e.target.value)}
      />
    </InputContainer>
  );
};

