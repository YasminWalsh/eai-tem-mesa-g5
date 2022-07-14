import React from 'react';
import StyledButton from '../Button/style';
import { useForm, useInput } from 'lx-react-form';
import { Box, Form } from './style';
import logo from '../../assets/Logo/withBg.png';

const FormMenu = ({
  onSubmit,
  setClose,
  product = { name: undefined, price: undefined, img: undefined }
}) => {
  const name = useInput({
    name: 'name',
    initialValue: product.name
  });

  const price = useInput({
    name: 'price',
    initialValue: product.price
  });

  const img = useInput({
    name: 'img',
    initialValue: product.img
  });

  const form = useForm({
    clearFields: true,
    formFields: [name, price, img],
    submitCallback: onSubmit
  });

  return (
    <Box>
      <div>
        <img src={logo} />
        <div>
          <p>Adicionar novo produto</p>
          <StyledButton background="transparent" onClick={setClose}>
            x
          </StyledButton>
        </div>
      </div>
      <Form onSubmit={form.handleSubmit}>
        <label>Nome do produto</label>
        <input
          placeholder="Nome do produto"
          {...name.inputProps}
          style={{
            border: name.error && '1px solid var(--red)'
          }}
        />
        {name.error && <p>*{name.error}</p>}

        <label>Preço</label>
        <input
          placeholder="Preço do produto"
          {...price.inputProps}
          style={{
            border: price.error && '1px solid var(--red)'
          }}
        />
        {price.error && <p>*{price.error}</p>}

        <label>Imagem do produto</label>
        <input
          placeholder="Url da imagem do produto"
          {...img.inputProps}
          style={{
            border: img.error && '1px solid var(--red)'
          }}
        />
        {img.error && <p>*{img.error}</p>}

        <StyledButton background="blue" type="submit">
          Confirmar
        </StyledButton>
      </Form>
    </Box>
  );
};

export default FormMenu;
