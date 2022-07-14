import React, { useState } from 'react';
import { Modal } from '@mui/material';
import ExibirComanda from '../ExibirComanda';
import table from '../../assets/iconDashRestaurant/table.svg';

const ComandaCard = ({ comandas }) => {
  const [comandaSelected, setComandaSelected] = useState();
  const [open, setOpen] = useState(false);

  return (
    <>
      {comandas ? (
        comandas.map((comanda, count) => (
          <li
            key={count}
            onClick={() => {
              setComandaSelected(comanda);
              setOpen(true);
            }}
          >
            <img src={table} alt="comanda" />
            <p>Comanda {comanda.codTable}</p>
          </li>
        ))
      ) : (
        <p></p>
      )}
      <Modal open={open}>
        <ExibirComanda
          comandas={comandas}
          setClose={() => setOpen(false)}
          comandaSelected={comandaSelected}
        />
      </Modal>
    </>
  );
};

export default ComandaCard;
