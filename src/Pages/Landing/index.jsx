import Logo from '../../assets/Logo/noBg.png';
import FirstImage from '../../assets/imgs/firstImage.svg';
import SecondImage from '../../assets/imgs/secondImage.svg';
import ThirdImage from '../../assets/imgs/thirdImage.svg';
import {
  LandingCard,
  LandingDiv,
  LandingContainer,
  LandingLogo,
  CenteredLandingDiv,
  MainText,
  SecondaryText,
  LandingFooter
} from './style';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import StyledButton from '../../Components/Button/style';

const LandingPage = () => {
  const history = useHistory();
  const [intro, setIntro] = useState(true);

  const handleRedirect = () => {
    history.push('/home');
  };

  const handleIntro = () => {
    setIntro(false);
  };

  const variants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 0,
      rotate: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const renderIntro = () => {
    return (
      <CenteredLandingDiv height="100vh" direction="column">
        <LandingDiv
          animate={{
            scale: [0, 1],
            opacity: ['0%', '100%']
          }}
          transition={{ duration: 2 }}
          direction="column"
          mTop="-160px"
        >
          <img src={Logo} />
          <LandingDiv
            animate={{
              scale: [0, 1.2],
              opacity: ['0%', '100%']
            }}
            transition={{ delay: 1, duration: 2 }}
            mTop="-160px"
          >
            <StyledButton background="blue" onClick={handleIntro}>
              Clique aqui para conhecer o App
            </StyledButton>
          </LandingDiv>
        </LandingDiv>
      </CenteredLandingDiv>
    );
  };

  const renderLanding = () => {
    return (
      <LandingContainer>
        <CenteredLandingDiv>
          <LandingLogo src={Logo} />
        </CenteredLandingDiv>
        <CenteredLandingDiv direction="column">
          <MainText>Mas como que funciona? 🤔</MainText>
          <SecondaryText>
            olha, é bem simples! ali embaixo vou te ensinar
          </SecondaryText>
          <StyledButton background="transparent" onClick={handleRedirect}>
            Ou clique aqui e comece a usar agora mesmo!
          </StyledButton>
        </CenteredLandingDiv>
        <CenteredLandingDiv>
          <LandingDiv
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <LandingCard variants={variants}>
              <img src={FirstImage} alt={'Imagem escolhendo o que comer'} />
              <MainText>
                Bateu aquela fome mas você não quer pedir, quer sair para comer
              </MainText>
              <SecondaryText>
                é ai que você acessa nosso app e encontra um restaurante do seu
                interesse!
              </SecondaryText>
            </LandingCard>
          </LandingDiv>
          <LandingDiv
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <LandingCard variants={variants}>
              <img
                src={SecondImage}
                alt={'Imagem comendo em um restaurante enquanto acompanhado.'}
              />
              <MainText>
                Sozinho ou em companhia, pelo app não tem erro. Veja quantas
                mesas estão disponíveis e faça uma reserva !
              </MainText>
              <SecondaryText>
                e ainda é possível verificar se aceitam seus pets, com as nossas
                tags de acessibilidade!
              </SecondaryText>
            </LandingCard>
          </LandingDiv>
          <LandingDiv
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <LandingCard variants={variants}>
              <img
                src={ThirdImage}
                alt={
                  'Imagem com duas pessoas na fila e um X mostrando que jamais'
                }
              />
              <MainText>
                Esperar na fila? Ficar preocupado se vão conseguir comer antes
                do restaurante fechar? Isso é coisa do passado!
              </MainText>
            </LandingCard>
          </LandingDiv>
        </CenteredLandingDiv>
        <LandingFooter>
          <MainText>QUER NOS CONHECER?</MainText>
          <Link to="/about" className="teste">
            <SecondaryText>Sobre</SecondaryText>
          </Link>
          <MainText>QUER FAZER PARTE DO APP?</MainText>
          <Link to="/signup">
            <SecondaryText>
              Cadastre-se como cliente ou como restaurante!
            </SecondaryText>
          </Link>
        </LandingFooter>
      </LandingContainer>
    );
  };

  return <>{intro ? renderIntro() : renderLanding()}</>;
};

export default LandingPage;
