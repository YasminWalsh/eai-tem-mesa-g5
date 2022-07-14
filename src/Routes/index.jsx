import { Switch, Route } from "react-router-dom";
import DashRestaurant from "../Pages/DashRestaurant";
import DashCliente from "../Pages/DashCliente/DashCliente";
import { Home } from "../Pages/Home";

import SignupRestaurant from "../Pages/SignupRestaurant";
import Login from "../Pages/Login";
import Menu from "../Pages/Menu";
import Signup from "../Pages/Signup";
import Perfil from "../Pages/Perfil";

import GlobalStyle from "../styles/GlobalStyle";
import EditProfileRestaurant from "../Pages/EditProfileRestaurant";
import LandingPage from "../Pages/Landing";
import About from "../Pages/About";
import Tables from "../Pages/Tables";

const Routes = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/dashcliente/:id">
          <DashCliente />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/signup-restaurant">
          <SignupRestaurant />
        </Route>
        <Route exact path="/dashrestaurant">
          <DashRestaurant />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/restaurant-profile">
          <EditProfileRestaurant />
        </Route>
        <Route path="/perfil">
          <Perfil />
        </Route>

        <Route path="/tables">
          <Tables />
        </Route>
      </Switch>
    </>
  );
};
export default Routes;
