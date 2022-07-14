import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { ContentContainer } from "./style";
import logo from "../../assets/Logo/withBg.png";
import StyledButton from "../../Components/Button/style";
import { useForm, useInput } from "lx-react-form";
import { CircularProgress } from "@mui/material";
import { useHistory } from "react-router";
import loginImage from "../../assets/images/pancake.jpg";
import { useHome } from "../../Providers/Home";
import { useRestaurantDash } from "../../Providers/RestaurantDash";
import { useUserLogged } from "../../Providers/UserLogged";

const Login = () => {
  const [isErrored, setIsErrored] = useState(false);
  const [loading, setLoading] = useState(false);
  const { restaurants, loadRestaurants } = useHome();
  const { setUserLogged } = useUserLogged();
  const { reloadRestaurant } = useRestaurantDash();
  useEffect(() => {
    loadRestaurants();
  }, []);
  const handleLogin = (data) => {
    setLoading(true);
    api
      .post("login", data)
      .then((response) => {
        toast.success("Login efetuado com sucesso");
        setIsErrored(false);
        setUserLogged(response.data.user);
        localStorage.setItem(
          "@login:token",
          JSON.stringify(response.data.accessToken)
        );
        localStorage.setItem(
          "@login:userId",
          JSON.stringify(response.data.user.id)
        );
        localStorage.setItem(
          "@login:userType",
          JSON.stringify(response.data.user.type)
        );
        if (response.data.user.type === "restaurante") {
          const restaurantData = restaurants?.find(
            (restaurant) => restaurant?.userId === response.data?.user?.id
          );
          localStorage.setItem(
            "@dashRestaurant:id",
            JSON.stringify(restaurantData.id)
          );
          reloadRestaurant();
        }

        if (response.data.user.type === "restaurante") {
          history.push("/dashrestaurant");
        } else {
          history.push("/home");
        }
        //tirei o setTimoOut pois estava abrindo a page home por um momento e depois ia pra page restaurant
      })
      .catch((_) => {
        toast.error("Email ou senha inválidos");
        console.error(_);
        setIsErrored(true);
      })
      .finally(setLoading(false));
  };
  const email = useInput({
    name: "email",
    validation: "email",
  });
  const password = useInput({
    name: "password",
    validation: "senha",
  });
  const form = useForm({
    clearFields: false,
    formFields: [email, password],
    submitCallback: (formData) => {
      handleLogin(formData);
    },
  });
  const history = useHistory();
  const TOKEN = localStorage.getItem("@login:token");

  if (TOKEN) {
    return history.push("/home");
  }

  return (
    <ContentContainer>
      <div className="image">
        <img alt="algo" src={loginImage} />
      </div>
      <div className="form">
        <img src={logo} alt="Logo" onClick={() => history.push("/home")} />
        <form onSubmit={form.handleSubmit}>
          <h3>Faça seu Login</h3>
          <label>Email</label>
          <input
            type="text"
            name="name"
            placeholder="Email"
            style={{
              border: (isErrored || email.error) && "1px solid var(--red)",
            }}
            {...email.inputProps}
          />
          {email.error && <span>{email.error}</span>}
          <label>Senha</label>
          <input
            type="password"
            name="password"
            placeholder="Senha"
            style={{
              border: (isErrored || password.error) && "1px solid var(--red)",
            }}
            {...password.inputProps}
          />
          {password.error && <span>{password.error}</span>}
          <StyledButton background="blue" type="submit">
            {loading ? <CircularProgress size={20} color="success" /> : "Login"}
          </StyledButton>
          <p>Não possui cadastro?</p>
          <StyledButton
            background="transparent"
            onClick={() => history.push("/signup")}
          >
            Cadastrar
          </StyledButton>
        </form>
      </div>
    </ContentContainer>
  );
};
export default Login;
