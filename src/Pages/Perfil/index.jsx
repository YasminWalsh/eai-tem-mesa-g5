import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { CgLogOut } from "react-icons/cg";

import { ContentContainer } from "./style";

import logo from "../../assets/Logo/withBg.png";
import StyledButton from "../../Components/Button/style";

import { useForm, useInput } from "lx-react-form";

import { CircularProgress } from "@mui/material";
import { useHistory } from "react-router";
import loginImage from "../../assets/images/pancake.jpg";
import { useUserLogged } from "../../Providers/UserLogged";

const Perfil = () => {
  const [isErrored, setIsErrored] = useState(false);
  const [loading, setLoading] = useState(false);
  const { userLogged, setUserLogged } = useUserLogged();

  const token = JSON.parse(localStorage.getItem("@login:token"));
  const id = JSON.parse(localStorage.getItem("@login:userId"));

  const history = useHistory();

  useEffect(() => {
    api
      .get("/users/" + id, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setUserLogged(response.data));
  }, []);

  const handleRegister = (data) => {
    setLoading(true);
    toast.loading("Enviando atualizações!!!!! 🤔");
    api
      .patch(`users/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      .then((response) => {
        toast.dismiss();
        toast.success("Alterações feitas com sucesso!! 😊");

        setIsErrored(false);
        setUserLogged(response.data);

        setTimeout(() => {
          history.push("/home");
        }, 1500);
      })

      .catch((_) => {
        toast.error("Algo deu errado 😔");

        setIsErrored(true);
      })
      .finally(setLoading(false));
  };

  const name = useInput({
    name: "name",
    optional: true,
    initialValue: userLogged?.name,
  });

  const street = useInput({
    name: "street",
    optional: true,
    initialValue: userLogged?.address?.street,
  });

  const number = useInput({
    name: "number",
    optional: true,
    initialValue: userLogged?.address?.number,
  });

  const state = useInput({
    name: "state",
    optional: true,
    initialValue: userLogged?.address?.state,
  });

  const city = useInput({
    name: "city",
    optional: true,
    initialValue: userLogged?.address?.city,
  });

  const cpf = useInput({
    name: "cpf",
    optional: true,
    initialValue: userLogged?.cpf,
    maxLength: 14,

    customMask: {
      expressions: [
        {
          regex: /\D/g,
          replace: "",
        },
        {
          regex: /(\d{3})(\d)/,
          replace: "$1.$2",
        },
        {
          regex: /(\d{3})(\d)/,
          replace: "$1.$2",
        },
        {
          regex: /(\d{3})(\d{1,2})/,
          replace: "$1-$2",
        },
      ],
    },
  });

  const tell = useInput({
    name: "tell",
    optional: true,
    initialValue: userLogged?.tell,

    minLength: 11,
    maxLength: 15,
    validation: "telefone",

    customMask: {
      expressions: [
        {
          regex: /\D/g,
          replace: "",
        },
        {
          regex: /(\d{0})(\d)/,
          replace: "$1($2",
        },
        {
          regex: /(\d{2})(\d)/,
          replace: "$1) $2",
        },
        {
          regex: /(\d{5})(\d)/,
          replace: "$1-$2",
        },
        {
          regex: /(\d{4})(\d{})/,
          replace: "$1$2",
        },
      ],
    },
  });

  const TOKEN = localStorage.getItem('@login:token');

  if (!TOKEN) {
    return history.push('/home');
  }
  const avatar = useInput({
    name: "avatar",
    optional: true,
    initialValue: userLogged?.avatar,
  });

  const form = useForm({
    clearFields: false,

    formFields: [name, street, number, state, city, cpf, tell, avatar],

    submitCallback: (formData) => {
      const newFormData = {
        name: formData.name,
        address: {
          street: formData.street,
          number: formData.number,
          state: formData.state,
          city: formData.city,
        },
        cpf: formData.cpf,
        tell: formData.tell,
        avatar: formData.avatar,
      };

      handleRegister(newFormData);
    },
  });

  const handleExit = () => {
    localStorage.clear();
    history.push("/login");
  };

  return (
    <ContentContainer>
      <div className="image">
        <img alt="algo" src={loginImage} />
      </div>
      <div className="form">
        <img src={logo} alt="Logo" onClick={() => history.push("/home")} />
        <form onSubmit={form.handleSubmit}>
          <h3>Mantenha seu cadastro atualizado</h3>
          <label>Nome completo</label>
          <input
            type="text"
            placeholder="Nome completo"
            style={{
              border: isErrored || (name.error && "1px solid var(--red)"),
            }}
            {...name.inputProps}
          />
          {name.error && <span>{name.error}</span>}
          <label>Rua</label>
          <input
            type="text"
            placeholder="Rua"
            style={{
              border: isErrored || (street.error && "1px solid var(--red)"),
            }}
            {...street.inputProps}
          />
          {street.error && <span>{street.error}</span>}
          <label>Número do endereço</label>
          <input
            type="number"
            placeholder="Número"
            style={{
              border: isErrored || (number.error && "1px solid var(--red)"),
            }}
            {...number.inputProps}
          />
          {number.error && <span>{number.error}</span>}
          <label>Estado</label>
          <input
            type="text"
            placeholder="Estado"
            style={{
              border: isErrored || (state.error && "1px solid var(--red)"),
            }}
            {...state.inputProps}
          />
          {state.error && <span>{state.error}</span>}
          <label>Cidade</label>
          <input
            type="text"
            placeholder="Cidade"
            style={{
              border: isErrored || (city.error && "1px solid var(--red)"),
            }}
            {...city.inputProps}
          />
          {city.error && <span>{city.error}</span>}
          <label>CPF</label>
          <input
            placeholder="CPF"
            style={{
              border: isErrored || (cpf.error && "1px solid var(--red)"),
            }}
            {...cpf.inputProps}
          />
          {cpf.error && <span>{cpf.error}</span>}
          <label>Telefone</label>
          <input
            placeholder="Telefone de Contato"
            style={{
              border: isErrored || (tell.error && "1px solid var(--red)"),
            }}
            {...tell.inputProps}
          />
          {tell.error && <span>{tell.error}</span>}
          <label>Imagem do perfil</label>
          <input
            type="text"
            placeholder="Url da imagem de perfil"
            style={{
              border: isErrored || (avatar.error && "1px solid var(--red)"),
            }}
            {...avatar.inputProps}
          />
          {avatar.error && <span>{avatar.error}</span>}

          <StyledButton background="blue" type="submit">
            {loading ? (
              <CircularProgress size={20} color="success" />
            ) : (
              "Atualizar Cadastro"
            )}
          </StyledButton>
          <StyledButton background="transparent" onClick={() => handleExit()}>
            <CgLogOut style={{ fontSize: "2rem" }} /> Sair
          </StyledButton>
        </form>
      </div>
    </ContentContainer>
  );
};
export default Perfil;
