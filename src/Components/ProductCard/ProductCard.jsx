import React, { useContext } from 'react';
import { RestaurantContext } from '../../Providers/Restaurant';
import { ProductsContainer } from './style';

const ProductCard = () => {
  const { restaurant } = useContext(RestaurantContext);
  return (
    <ProductsContainer>
      {restaurant.menu?.map((item, index) => (
        <li key={index}>
          <div className="product__info">
            <h3>{item.name}</h3>
            <p>
              {item.description}
            </p>
            <span>R${item.price}</span>
          </div>
          <img src={item.img} alt={item.name} />
        </li>
      ))}
    </ProductsContainer>
  );
};

export default ProductCard;
