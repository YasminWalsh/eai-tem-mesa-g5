import StyledButton from '../Button/style';
import { useForm, useInput, useNumber } from 'lx-react-form';
import { Box, Form } from './style';
import table from '../../assets/iconDashRestaurant/table.svg';

const FormComanda = ({ restaurantData, onSubmit, setClose }) => {
  const name = useInput({
    name: 'name'
  });

  const codTable = useNumber({
    name: 'codTable',
    min: 1,
    max: restaurantData.mesas
  });

  const qtdTable = useNumber({
    name: 'qtdTable',
    min: 1,
    max:
      restaurantData.mesas -
      (restaurantData.comandas
        ? restaurantData.comandas.reduce(
            (acc, curr) => acc + parseInt(curr.qtdTable),
            0
          )
        : 0)
  });

  const form = useForm({
    clearFields: true,
    formFields: [name, qtdTable, codTable],
    submitCallback: onSubmit
  });

  return (
    <Box>
      <div>
        <div>
          <div>
            <img src={table} />
            <p>Nova comanda</p>
          </div>

          <StyledButton background="transparent" onClick={setClose}>
            x
          </StyledButton>
        </div>
      </div>
      <Form onSubmit={form.handleSubmit}>
        <label>Nome do responsável</label>
        <input placeholder="Nome do responsável" {...name.inputProps}></input>
        {name.error && <p>*{name.error}</p>}

        <label>Mesas ocupadas</label>
        <input
          placeholder="Mesas ocupadas"
          {...qtdTable.inputProps}
          style={{
            border: qtdTable.error && '1px solid var(--red)'
          }}
        />
        {qtdTable.error && <p>*{qtdTable.error}</p>}

        <label>Número da comanda</label>
        <input
          type="number"
          placeholder="Número da comanda"
          {...codTable.inputProps}
          style={{
            border: codTable.error && '1px solid var(--red)'
          }}
        />
        {codTable.error && <p>*{codTable.error}</p>}

        <StyledButton background="blue" type="submit">
          Abrir comanda
        </StyledButton>
      </Form>
    </Box>
  );
};

export default FormComanda;
