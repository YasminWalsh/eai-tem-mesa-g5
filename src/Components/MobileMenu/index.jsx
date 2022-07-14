import { BottomMenuContainer } from './styles';
import { Link } from 'react-router-dom';
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineUser
} from 'react-icons/ai';
import SearchPopover from '../PopOverSearch';

export const BottomNav = props => {
  const type =
    JSON.parse(localStorage.getItem('@login:userType')) || 'unauthenticated';
  console.log(type);
  return (
    <BottomMenuContainer className="bottom-nav">
      <Link className="nav-item" to="/home">
        <AiOutlineHome />
        <span>Home</span>
      </Link>
      {!props.dashRest && <SearchPopover className="nav-item" {...props} />}
      <Link className="nav-item" to="/home">
        <AiOutlineMenu />
        <span>Reservas</span>
      </Link>
      {type === 'restaurante' && (
        <Link className="nav-item" to="/dashrestaurant">
          <AiOutlineUser />
          <span>Perfil</span>
        </Link>
      )}
      {type === 'cliente' && (
        <Link className="nav-item" to="/perfil">
          <AiOutlineUser />
          <span>Perfil</span>
        </Link>
      )}
      {type === 'unauthenticated' && (
        <Link className="nav-item" to="/login">
          <AiOutlineUser />
          <span>Perfil</span>
        </Link>
      )}
    </BottomMenuContainer>
  );
};
