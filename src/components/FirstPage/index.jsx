/* eslint-disable prettier/prettier */

import github from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import instagram from '../../assets/icons/instagram.svg';

import { Button, Container, Content } from './styles';

export default function FirstPage() {
  return (
    <Container>
      <Content>
        <div className="greeting-container">
          <p>Olá visitante,</p>
          <p>
            Meu nome é <span>Daniel</span>
          </p>
        </div>
        <Button type="button">
          {'< Clique aqui e veja meus serviços />'}
        </Button>
        <div className="description-container">
          <p>
            Sou um desenvolvedor focado em criar <span> {`API's RESTFUL`}</span> e aplicações <span>fluídas</span> e <span>responsivas</span>.
          </p>
        </div>

        <div className="social-media-container">
          <p>Acesse minhas redes:</p>
          <nav className="social-media">
            <a
              href="https://github.com/oliveiradniel"
              target="_blank"
              rel="noreferrer"
            >
              <figure>
                <img src={github} alt="Github" />
                <figcaption>Github</figcaption>
              </figure>
            </a>
            <a
              href="https://www.linkedin.com/in/kadadniel/"
              target="_blank"
              rel="noreferrer"
            >
              <figure>
                <img src={linkedin} alt="LinkedIn" />
                <figcaption>LinkedIn</figcaption>
              </figure>
            </a>
            <a
              href="https://www.instagram.com/jvm_programador/"
              target="_blank"
              rel="noreferrer"
            >
              <figure>
                <img src={instagram} alt="Instagram" />
                <figcaption>Instagram</figcaption>
              </figure>
            </a>
          </nav>
        </div>
      </Content>
    </Container>
  );
}
