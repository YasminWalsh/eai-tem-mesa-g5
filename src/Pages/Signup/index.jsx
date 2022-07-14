import { useState } from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';

import { ContentContainer } from './style';

import logo from '../../assets/Logo/withBg.png';
import StyledButton from '../../Components/Button/style';

import { useForm, useInput } from 'lx-react-form';
import { UserContext } from '../../Providers/User';
import { useContext } from 'react';

import { CircularProgress } from '@mui/material';
import { useHistory } from 'react-router';
import loginImage from '../../assets/images/pancake.jpg';

const Signup = () => {
  const [isErrored, setIsErrored] = useState(false);
  const [loading, setLoading] = useState(false);

  const { setUserDatas } = useContext(UserContext);

  const history = useHistory();

  const handleRegister = data => {
    setLoading(true);
    api
      .post('signup', data)
      .then(response => {
        toast.success('Cadastro efetuado com sucesso');
        setIsErrored(false);
        setUserDatas(response.data);

        setTimeout(_ => {
          if (response.data.user.type === 'restaurante') {
            history.push('/signup-restaurant');
          } else {
            history.push('/login');
          }
        }, 1500);
      })
      .catch(_ => {
        toast.error('Email ou senha inválidos');
        setIsErrored(true);
      })
      .finally(setLoading(false));
  };

  const email = useInput({
    name: 'email',
    validation: 'email'
  });

  const password = useInput({
    name: 'password',
    validation: 'senha'
  });

  const passwordConfirmation = useInput({
    name: 'passwordConfirmation',
    same: password.value
  });

  const type = useInput({
    name: 'type',
    initialValue: 'cliente'
  });

  const form = useForm({
    clearFields: false,
    formFields: [email, password, passwordConfirmation, type],
    submitCallback: formData => {
      handleRegister(formData);
    }
  });

  const TOKEN = localStorage.getItem('@login:token');

  if (TOKEN) {
    return history.push('/home');
  }

  return (
    <ContentContainer>
      <div className="image">
        <img alt="algo" src={loginImage} />
      </div>
      <div className="form">
        <img src={logo} alt="Logo" onClick={() => history.push('/home')} />
        <form onSubmit={form.handleSubmit}>
          <h3>Realize seu cadastro</h3>
          <label>Email</label>
          <input
            type="text"
            name="name"
            placeholder="Email"
            style={{
              border: (isErrored || email.error) && '1px solid var(--red)'
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
              border: (isErrored || password.error) && '1px solid var(--red)'
            }}
            {...password.inputProps}
          />
          {password.error && <span>{password.error}</span>}

          <label>Confirmação de senha</label>
          <input
            type="password"
            name="password"
            placeholder="Confirme sua senha"
            style={{
              border:
                (isErrored || passwordConfirmation.error) &&
                '1px solid var(--red)'
            }}
            {...passwordConfirmation.inputProps}
          />
          {passwordConfirmation.error && (
            <span>{passwordConfirmation.error}</span>
          )}

          <label>Tipo de usuário:</label>
          <select placeholder="Tipo" {...type.inputProps}>
            <option value="cliente">Cliente</option>
            <option value="restaurante">Restaurante</option>
          </select>

          <StyledButton background="blue" type="submit">
            {loading ? (
              <CircularProgress size={20} color="success" />
            ) : (
              'Cadastrar'
            )}
          </StyledButton>
          <p>Já possui cadastro?</p>
          <StyledButton
            background="transparent"
            onClick={() => history.push('/login')}
          >
            Login
          </StyledButton>
        </form>
      </div>
    </ContentContainer>
  );
};
export default Signup;
