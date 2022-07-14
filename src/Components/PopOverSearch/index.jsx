import * as React from 'react';
import Popover from '@mui/material/Popover';
import { SearchBar } from '../SearchBar';
import { AiOutlineSearch } from 'react-icons/ai';
import { BottomMenuContainer } from './styles';

export default function SearchPopover(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <div className="nav-item" aria-describedby={id} variant="contained" onClick={handleClick}>
        <AiOutlineSearch />
        <span>Pesquisar</span>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        style={{margin: '-1rem 1rem'}}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}

      >
        <SearchBar {...props} noIcon/>
      </Popover>
    </>
  );
}