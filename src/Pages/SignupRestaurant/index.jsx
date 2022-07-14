import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ContentContainer, StyledSelect } from "./style";
import logo from "../../assets/Logo/withBg.png";
import StyledButton from "../../Components/Button/style";
import { useForm, useInput, useNumber } from "lx-react-form";
import { CircularProgress } from "@mui/material";
import { useHistory } from "react-router";
import loginImage from "../../assets/images/pancake.jpg";
import { useData } from "../../Providers/User";
import axios from "axios";

const SignupRestaurant = () => {
  const [isErrored, setIsErrored] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tagOption, setTagOption] = useState([]);
  const [formDataRes, setFormDataRes] = useState(null);

  const history = useHistory();

  const OPTIONS = [
    { value: "Pet friendly", label: "Pet friendly" },
    { value: "Espaço kids", label: "Espaço kids" },
    { value: "Comida vegana", label: "Comida vegana" },
    { value: "Estacionamento", label: "Estacionamento" },
  ];

  const dataUser = useData();

  useEffect(() => {
    if (formDataRes) {
      handleRegister({
        ...formDataRes,
        menu: [],
        comandas: [],
        tags: tagOption.map((option) => option.value),
      });
    }
  }, [formDataRes]);

  const handleRegister = (data) => {
    setLoading(true);

    axios({
      method: "POST",
      url: "https://eai-tem-mesa.herokuapp.com/restaurants",
      data,
      headers: {
        Authorization: `Bearer ${dataUser.userDatas.accessToken}`,
      },
    })
      .then((_) => {
        toast.success("Cadastro efetuado com sucesso");
        setIsErrored(false);
        history.push("/login");
      })
      .catch((_) => {
        toast.error("Algo deu errado");
        setIsErrored(true);
      })
      .finally(setLoading(false));
  };

  const TOKEN = localStorage.getItem("@login:token");

  if (TOKEN) {
    return history.push("/home");
  }

  const name = useInput({
    name: "name",
  });

  const street = useInput({
    name: "street",
  });

  const number = useInput({
    name: "number",
  });

  const state = useInput({
    name: "state",
  });

  const city = useInput({
    name: "city",
  });

  const imgLogo = useInput({
    name: "imgLogo",
  });

  const cnpj = useInput({
    name: "cnpj",

    maxLength: 18,

    customMask: {
      expressions: [
        {
          regex: /\D/g,
          replace: "",
        },
        {
          regex: /(\d{2})(\d)/,
          replace: "$1.$2",
        },
        {
          regex: /(\d{3})(\d)/,
          replace: "$1.$2",
        },
        {
          regex: /(\d{3})(\d)/,
          replace: "$1/$2",
        },
        {
          regex: /(\d{4})(\d{1,2})/,
          replace: "$1-$2",
        },
      ],
    },
  });

  const tell = useInput({
    name: "tell",
    minLength: 11,
    maxLength: 15,

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

  const qtdOfTables = useNumber({
    name: "qtdOfTables",
    min: 1,
    max: 65,
  });

  const form = useForm({
    clearFields: false,

    formFields: [
      name,
      imgLogo,
      street,
      number,
      state,
      city,
      cnpj,
      tell,
      qtdOfTables,
    ],
    submitCallback: (formData) => {
      const newFormData = {
        name: formData.name,
        logo: formData.imgLogo,
        address: {
          street: formData.street,
          number: formData.number,
          state: formData.state,
          city: formData.city,
        },
        mesas: formData.qtdOfTables,
        tell: formData.tell,
        cnpj: formData.cnpj,

        userId: dataUser?.userDatas.user.id,
      };
      setFormDataRes(newFormData);
    },
  });

  return (
    <ContentContainer>
      <div className="image">
        <img alt="algo" src={loginImage} />
      </div>
      <div className="form">
        <img src={logo} alt="Logo" onClick={() => history.push("/home")} />
        <form onSubmit={form.handleSubmit}>
          <h3>Nos ajude a conhecer mais sobre seu restaurante</h3>

          <label>Nome do restaurante</label>
          <input
            type="text"
            placeholder="Nome do restaurante"
            style={{
              border: (isErrored || name.error) && "1px solid var(--red)",
            }}
            {...name.inputProps}
          />
          {name.error && <span>{name.error}</span>}

          <label>Adicione sua logo</label>
          <input
            type="text"
            placeholder="Url da imagem"
            style={{
              border: (isErrored || imgLogo.error) && "1px solid var(--red)",
            }}
            {...imgLogo.inputProps}
          />
          {imgLogo.error && <span>{imgLogo.error}</span>}

          <label>Rua</label>
          <input
            type="text"
            placeholder="Rua"
            style={{
              border: (isErrored || street.error) && "1px solid var(--red)",
            }}
            {...street.inputProps}
          />
          {street.error && <span>{street.error}</span>}

          <label>Número</label>
          <input
            type="number"
            placeholder="Número"
            style={{
              border: (isErrored || number.error) && "1px solid var(--red)",
            }}
            {...number.inputProps}
          />
          {number.error && <span>{number.error}</span>}

          <label>Estado</label>
          <input
            type="text"
            placeholder="Estado"
            style={{
              border: (isErrored || state.error) && "1px solid var(--red)",
            }}
            {...state.inputProps}
          />
          {state.error && <span>{state.error}</span>}

          <label>Cidade</label>
          <input
            type="text"
            placeholder="Cidade"
            style={{
              border: (isErrored || city.error) && "1px solid var(--red)",
            }}
            {...city.inputProps}
          />
          {city.error && <span>{city.error}</span>}

          <label>CNPJ</label>
          <input
            placeholder="CNPJ"
            style={{
              border: (isErrored || cnpj.error) && "1px solid var(--red)",
            }}
            {...cnpj.inputProps}
          />
          {cnpj.error && <span>{cnpj.error}</span>}

          <label>Número de telefone</label>
          <input
            placeholder="Telefone de Contato"
            style={{
              border: (isErrored || tell.error) && "1px solid var(--red)",
            }}
            {...tell.inputProps}
          />
          {tell.error && <span>{tell.error}</span>}

          <label>Selecione tags</label>
          <StyledSelect
            options={OPTIONS}
            onChange={setTagOption}
            defaultValue={tagOption}
            isMulti={true}
            classNamePrefix="react-select"
          />

          <label>Quantidade de mesas</label>
          <input
            placeholder="Quantidade de mesas"
            style={{
              border:
                (isErrored || qtdOfTables.error) && "1px solid var(--red)",
            }}
            {...qtdOfTables.inputProps}
          />
          {qtdOfTables.error && <span>{qtdOfTables.error}</span>}

          <StyledButton background="blue" type="submit">
            {loading ? (
              <CircularProgress size={20} color="success" />
            ) : (
              "Cadastrar"
            )}
          </StyledButton>
        </form>
      </div>
    </ContentContainer>
  );
};
export default SignupRestaurant;
