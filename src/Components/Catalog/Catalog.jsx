import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { CatalogContainer } from './style';

const Catalog = () => {
  return (
    <CatalogContainer>
      <h2>Cardápio</h2>
      <ProductCard />
    </CatalogContainer>
  );
};

export default Catalog;
