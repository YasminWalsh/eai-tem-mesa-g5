import imgGuilherme from "../../assets/fotosEquipe/imgGuilherme.png";
import imgJose from "../../assets/fotosEquipe/imgJose.jpg";
import imgMatheus from "../../assets/fotosEquipe/imgMatheus.png";
import imgYasmin from "../../assets/fotosEquipe/imgYasmin2.jpg";
import imgSaulo from "../../assets/fotosEquipe/imgSaulo.png";
import { Container, Content, Box, Header } from "./style";
import StyledButton from "../../Components/Button/style";
import { AiFillLinkedin } from "react-icons/ai";
import { useHistory } from "react-router-dom";

const About = () => {
  const history = useHistory();
  return (
    <Container>
      <Header>
        <div>
          <h2>&lt;CONHEÇA OS DEVS/&gt;</h2>
          <StyledButton
            background="transparent"
            onClick={() => history.push("/home")}
          >
            {" "}
            Home
          </StyledButton>
        </div>
      </Header>

      <Content>
        <Box>
          <div>
            <img src={imgSaulo}></img>
          </div>

          <div>
            <p>Saulo Morales Ozório</p>
            <span>Product Owner</span>
            <span>
              <AiFillLinkedin size={20} />
              <a
                target="_blank"
                href="https://www.linkedin.com/in/saulo-m-ozorio"
              >
                /saulo-m-ozorio
              </a>
            </span>
          </div>
        </Box>

        <Box>
          <div>
            <img src={imgYasmin}></img>
          </div>
          <div>
            <p>Yasmin Walsh</p>
            <span>Scrum Master</span>
            <span>
              <AiFillLinkedin size={20} />
              <a
                href="https://www.linkedin.com/in/yasminlwalsh/"
                target="_blank"
              >
                /yasminwalsh/
              </a>
            </span>
          </div>
        </Box>
        <Box>
          <div>
            <img src={imgMatheus}></img>
          </div>
          <div>
            <p>Matheus Silva</p>
            <span>Tech Lead</span>
            <span>
              <AiFillLinkedin size={20} />
              <a
                target="_blank"
                href="https://www.linkedin.com/in/devmatheuus/"
              >
                /devmatheuus/
              </a>
            </span>
          </div>
        </Box>
        <Box>
          <div>
            <img src={imgJose}></img>
          </div>
          <div>
            <p>José Duarte</p>
            <span>Quality Assurance</span>
            <span>
              <AiFillLinkedin size={20} />
              <a target="_blank" href="https://www.linkedin.com/in/duartydev/">
                /duartydev/
              </a>
            </span>
          </div>
        </Box>
        <Box>
          <div>
            <img src={imgGuilherme}></img>
          </div>
          <div>
            <p>Guilherme Crocetti</p>
            <span>Quality Assurance</span>
            <span>
              <AiFillLinkedin size={20} />
              <a target="_blank" href="https://www.linkedin.com/in/crocetti/">
                /crocetti/
              </a>
            </span>
          </div>
        </Box>
      </Content>
    </Container>
  );
};

export default About;
