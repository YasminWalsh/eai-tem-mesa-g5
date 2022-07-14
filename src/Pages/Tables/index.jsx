import StyledButton from '../../Components/Button/style';
import logo from '../../assets/Logo/withBg.png';
import { Container, Content } from './style';
import { useHistory } from 'react-router-dom';
import AddComanda from '../../Components/AddComanda';
import ComandaCard from '../../Components/ComandaCard';
import { useRestaurantDash } from '../../Providers/RestaurantDash';

const Tables = () => {
  const history = useHistory();

  const { restaurantLogged } = useRestaurantDash();

  const TOKEN = localStorage.getItem("@login:token");

  if (!TOKEN) {
    return history.push("/signup");
  }

  return (
    <Container>
      <Content>
        <div>
          <img src={logo} onClick={() => history.push('/home')}></img>
          <StyledButton
            background="transparent"
            onClick={() => history.push('/dashrestaurant')}
          >
            {' '}
            Voltar
          </StyledButton>
        </div>

        <div>
          <h2>Comandas</h2>
          <AddComanda />
        </div>
        <p>
          Mesas disponíveis:
          {restaurantLogged.mesas -
            (restaurantLogged.comandas
              ? restaurantLogged.comandas.reduce(
                  (acc, curr) => acc + parseInt(curr.qtdTable),
                  0
                )
              : 0)}
        </p>

        <ul>
          <ComandaCard comandas={restaurantLogged.comandas} />
        </ul>
      </Content>
    </Container>
  );
};
export default Tables;
