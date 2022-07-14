import React from "react";
import { SearchBar } from "../SearchBar";
import { HeaderContainer } from "./style";
import logo from "../../assets/Logo/withBg.png";
import FallbackAvatars from "../Avatar";
import { Redirect, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import StyledButton from "../Button/style";
import { useUserLogged } from "../../Providers/UserLogged";
import api from "../../services/api";
import { useRestaurantDash } from "../../Providers/RestaurantDash";

const Header = (props) => {
  const { userLogged, setUserLogged } = useUserLogged();
  const { restaurantLogged, setRestaurantLogged, reloadRestaurant } =
    useRestaurantDash();
  const history = useHistory();
  const [desktop, setDesktop] = useState(window.innerWidth >= 900);
  const [userLocation, setUserLocation] = useState("Insira seu endereço");

  const updateViewport = () => {
    setDesktop(window.innerWidth >= 900);
  };

  useEffect(() => {
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  });

  const handleLocation = () => {
    const { street, number, city, state } =
      userLogged?.address || "Insira seu endereço";
    return street.concat(", ", number, " - ", city, " - ", state);
  };

  useEffect(() => {
    userLogged.address && setUserLocation(handleLocation());
  }, []);

  const token = localStorage.getItem("@login:token") || false;
  const id = JSON.parse(localStorage.getItem("@login:userId"));

  useEffect(() => {
    if (token) {
      reloadRestaurant();
      api
        .get("/users/" + id, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => setUserLogged(response.data));
    }
  }, []);

  console.log(restaurantLogged);

  return (
    <HeaderContainer>
      <div className="header-wrapper">
        <div className="logo-container">
          <img src={logo} alt="logo" />
          <h4>{userLocation}</h4>
        </div>
        {desktop && !props.dashRest && <SearchBar {...props} />}
        {desktop && (
          <div className="user-container">
            <FallbackAvatars>
              {(userLogged.avatar && <img src={userLogged?.avatar} />) || (
                <img src={restaurantLogged?.logo} />
              )}
            </FallbackAvatars>
          </div>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Header;
