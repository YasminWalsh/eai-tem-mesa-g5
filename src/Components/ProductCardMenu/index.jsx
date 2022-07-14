import React from 'react';
import trash from '../../assets/iconDashRestaurant/trash.svg';
import EditProductMenu from '../EditProductMenu';
import { useRestaurantDash } from '../../Providers/RestaurantDash';
import { formatValue } from '../../utils';

const ProductCardMenu = () => {
  const { restaurantLogged } = useRestaurantDash();

  return (
    <>
      {restaurantLogged.menu?.map((product, index) => (
        <li key={index}>
          <img src={product.img} />
          <div className="boxInfos">
            <div>
              <div>
                <p>{product.name}</p>
                <span>{formatValue(product.price)}</span>
              </div>
            </div>

            <EditProductMenu product={product} />
          </div>
        </li>
      ))}
    </>
  );
};

export default ProductCardMenu;
