import { useHome } from "../../Providers/Home";
import { UlContainer } from "./styles";
import Header from "../../Components/Header";
import { useState, useEffect } from "react";
import { Variants } from "../../Components/Variants";
import { NotFound } from "../../Components/NotFound";
import { BottomNav } from "../../Components/MobileMenu";
import { useHistory } from "react-router-dom";
import { FaDog, FaLeaf, FaBaby, FaCar } from "react-icons/fa";
import { useRestaurantDash } from "../../Providers/RestaurantDash";

export const Home = () => {
  const { restaurants, loadRestaurants } = useHome();
  const [search, setSearch] = useState();
  const [loading, setLoading] = useState(false);
  const [desktop, setDesktop] = useState(window.innerWidth >= 900);

  //const {reloadRestaurant} = useRestaurantDash();

  useEffect(() => {
    loadRestaurants();
  }, []);

  const updateViewport = () => {
    setDesktop(window.innerWidth > 900);
  };

  useEffect(() => {
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  });

  const history = useHistory();

  const handleNavigate = (page) => {
    history.push(`/dashcliente/${page}`);
  };

  const handleTags = (tag) => {
    switch (tag) {
      case "Pet friendly":
        return <FaDog alt={tag} />;
      case "Estacionamento":
        return <FaCar alt={tag} />;
      case "Comida vegana":
        return <FaLeaf alt={tag} />;
      case "Espaço kids":
        return <FaBaby alt={tag} />;
      default:
        return;
    }
  };

  const restaurantsList = search ? search : restaurants;

  const arrayFilter = () => {
    if (loading || restaurantsList === undefined) {
      return <Variants />;
    } else if (restaurantsList.length === 0) {
      return <NotFound />;
    } else {
      return restaurantsList?.map((restaurant) => (
        <div
          className="card"
          data-id={restaurant.id}
          key={restaurant.id}
          onClick={(e) => handleNavigate(e.target.getAttribute("data-id"))}
        >
          <img
            src={restaurant.logo}
            alt={restaurant.name}
            data-id={restaurant.id}
          />
          <div className="cardInfo" data-id={restaurant.id}>
            <h2 data-id={restaurant.id}>{restaurant.name}</h2>
            <p data-id={restaurant.id}>
              Mesas disponíveis:{" "}
              {restaurant.mesas -
                (restaurant.comandas
                  ? restaurant.comandas.reduce(
                      (acc, curr) => acc + parseInt(curr.qtdTable),
                      0
                    )
                  : 0)}
            </p>
            <ul className="cardTags" data-id={restaurant.id}>
              {restaurant?.tags.map((tag) => (
                <li className={tag} key={tag}>
                  {handleTags(tag)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ));
    }
  };

  return (
    <>
      <Header
        setSearch={setSearch}
        setLoading={setLoading}
        atribute={"name"}
        isVisible
      />
      <UlContainer>
        <div className="title--container">
          <h1>Descubra</h1>
        </div>
        <div className="cardContainer">{arrayFilter()}</div>
      </UlContainer>
      {!desktop && (
        <BottomNav
          setSearch={setSearch}
          setLoading={setLoading}
          atribute={"name"}
        />
      )}
    </>
  );
};
