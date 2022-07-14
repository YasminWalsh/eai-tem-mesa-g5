import {useContext} from 'react';
import {RestaurantContext} from '../../Providers/Restaurant';
import {InforContainer, RestaurantInfos} from './style';
import {useRestaurantDash} from "../../Providers/RestaurantDash";
import {useEffect} from "react";

const RestaurantInfo = props => {

    const {restaurant} = useContext(RestaurantContext);

    const {reloadRestaurant} = useRestaurantDash();

    useEffect(() => {
        reloadRestaurant();
    }, [])

    return (
        <>
            <InforContainer>
                <div className="image">
                    <img src={restaurant.logo} alt="banner"/>
                </div>
            </InforContainer>
            <RestaurantInfos>
                {props.desktop && (
                    <div className="restaurant-logo">
                        <img src={restaurant.logo} alt="banner"/>
                    </div>
                )}
                <div className="restaurant-info">
                    <h2>{restaurant?.name}</h2>
                    <p>
                        {restaurant.address?.street}, {restaurant.address?.number} -{' '}
                        {restaurant.address?.state}
                    </p>
                    <h3> Mesas disponíveis:{" "}
                        {restaurant.mesas -
                            (restaurant.comandas
                                ? restaurant.comandas.reduce(
                                    (acc, curr) => acc + parseInt(curr.qtdTable),
                                    0
                                )
                                : 0)}</h3>
                </div>
                {!props.desktop && (
                    <div className="restaurant-logo">
                        <img src={restaurant.logo} alt="banner"/>
                    </div>
                )}
                <ul className="tags__box">
                    {restaurant.tags?.map((tag, index) => (
                        <li key={index}>{tag}</li>
                    ))}
                </ul>
            </RestaurantInfos>
        </>
    );
};

export default RestaurantInfo;
