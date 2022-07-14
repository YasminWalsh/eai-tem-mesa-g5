import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';

import { ContentContainer } from './style';

import logo from '../../assets/Logo/withBg.png';
import StyledButton from '../../Components/Button/style';

import { useForm, useInput } from 'lx-react-form';

import { CircularProgress } from '@mui/material';
import { useHistory } from 'react-router';
import loginImage from '../../assets/images/pancake.jpg';
import { useRestaurantDash } from '../../Providers/RestaurantDash';

const EditProfileRestaurant = () => {
  const history = useHistory();
  const [isErrored, setIsErrored] = useState(false);
  const [loading, setLoading] = useState(false);
  const { restaurantLogged, reloadRestaurant } = useRestaurantDash();

  const token = JSON.parse(localStorage.getItem('@login:token'));

  useEffect(() => {
    reloadRestaurant();
  }, []);

  const patchRestaurantData = data => {
    api
      .patch(`/restaurants/${restaurantLogged.id}`, data, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(_ => {
        toast.loading('Enviando atualizações!!!!! 🤔');
        setTimeout(() => {
          toast.success('Alterações feitas com sucesso!! 😊');
          setTimeout(() => {
            toast.dismiss();
            history.push('/dashrestaurant');
          }, 2000);
        }, 1000);
      });
  };

  const TOKEN = localStorage.getItem('@login:token');

  if (!TOKEN) {
    return history.push('/signup');
  }

  //FORMS COM AS INFOS DO RESTAURANTE

  const restaurantName = useInput({
    name: 'restaurantName',
    optional: true,
    initialValue: restaurantLogged.name
  });

  const restaurantLogo = useInput({
    name: 'restaurantLogo',
    optional: true,
    initialValue: restaurantLogged?.logo
  });

  const restaurantTel = useInput({
    name: 'restaurantTel',
    validation: 'telefone',
    optional: true,
    maxLength: 15,
    minLength: 15,
    initialValue: restaurantLogged?.tell,

    customMask: {
      expressions: [
        {
          regex: /\D/g,
          replace: ''
        },
        {
          regex: /(\d{0})(\d)/,
          replace: '$1($2'
        },
        {
          regex: /(\d{2})(\d)/,
          replace: '$1) $2'
        },
        {
          regex: /(\d{5})(\d)/,
          replace: '$1-$2'
        },
        {
          regex: /(\d{4})(\d{})/,
          replace: '$1$2'
        }
      ]
    }
  });

  const restaurantStreet = useInput({
    name: 'restaurantStreet',
    optional: true,
    initialValue: restaurantLogged?.address?.street
  });

  const restaurantStreetNumber = useInput({
    name: 'restaurantStreetNumber',
    optional: true,
    initialValue: restaurantLogged?.address?.number
  });

  const restaurantCity = useInput({
    name: 'restaurantCity',
    optional: true,
    initialValue: restaurantLogged?.address?.city
  });

  const restaurantState = useInput({
    name: 'restaurantState',
    optional: true,
    initialValue: restaurantLogged?.address?.state
  });

  const form = useForm({
    clearFields: false,
    formFields: [
      restaurantName,
      restaurantLogo,
      restaurantTel,
      restaurantStreet,
      restaurantStreetNumber,
      restaurantCity,
      restaurantState
    ],
    submitCallback: formData => {
      const newForm = {
        name: formData.restaurantName,
        logo: formData.restaurantLogo,
        address: {
          street: formData.restaurantStreet,
          number: formData.restaurantStreetNumber,
          city: formData.restaurantCity,
          state: formData.restaurantState
        },
        tell: formData.restaurantTel
      };
      patchRestaurantData(newForm);
    }
  });

  //FIM DO FORMULÁRIO

  return (
    <ContentContainer>
      <div className="image">
        <img alt="algo" src={loginImage} />
      </div>
      <div className="form">
        <img src={logo} alt="Logo" onClick={() => history.push('/home')} />
        <form onSubmit={form.handleSubmit}>
          <h3>Edite seu Restaurante</h3>
          <label>Nome</label>
          <input
            style={{
              border:
                (isErrored || restaurantName.error) && '1px solid var(--red)'
            }}
            {...restaurantName.inputProps}
          />
          {restaurantName.error && <span>{restaurantName.error}</span>}

          <label>Logo</label>
          <input
            type="text"
            name="restaurantLogo"
            value={restaurantLogged?.logo}
            style={{
              border:
                (isErrored || restaurantLogo.error) && '1px solid var(--red)'
            }}
            {...restaurantLogo.inputProps}
          />
          <label>Telefone</label>
          <input
            min={1}
            max="2"
            maxLength="2"
            type="text"
            name="restaurantTel"
            style={{
              border:
                (isErrored || restaurantTel.error) && '1px solid var(--red)'
            }}
            {...restaurantTel.inputProps}
          />
          {restaurantTel.error && <span>{restaurantTel.error}</span>}

          <label>Rua</label>
          <input
            type="text"
            name="restaurantStreet"
            style={{
              border:
                (isErrored || restaurantStreet.error) && '1px solid var(--red)'
            }}
            {...restaurantStreet.inputProps}
          />
          <label>Número do endereço</label>
          <input
            type="number"
            name="restaurantNumber"
            style={{
              border:
                (isErrored || restaurantStreetNumber.error) &&
                '1px solid var(--red)'
            }}
            {...restaurantStreetNumber.inputProps}
          />
          <label>Cidade</label>
          <input
            type="text"
            name="restaurantCity"
            style={{
              border:
                (isErrored || restaurantCity.error) && '1px solid var(--red)'
            }}
            {...restaurantCity.inputProps}
          />
          <label>Estado</label>
          <input
            type="text"
            name="restaurantState"
            style={{
              border:
                (isErrored || restaurantState.error) && '1px solid var(--red)'
            }}
            {...restaurantState.inputProps}
          />

          <StyledButton background="blue" type="submit">
            {loading ? (
              <CircularProgress size={20} color="success" />
            ) : (
              'Editar'
            )}
          </StyledButton>
          <StyledButton
            background="transparent"
            onClick={() => history.push('/dashrestaurant')}
          >
            Voltar
          </StyledButton>
        </form>
      </div>
    </ContentContainer>
  );
};

export default EditProfileRestaurant;
