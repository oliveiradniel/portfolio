/* eslint-disable prettier/prettier */

import { useState } from 'react';

import github from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import instagram from '../../assets/icons/instagram.svg';
import arrow from '../../assets/icons/arrow-button.svg';

import { Arrow, Button, ButtonContainer, Container, Content } from './styles';

export default function FirstPage() {
  const [isTheMouseOverTheButton, setIsTheMouseOverTheButton] = useState(false);

  return (
    <Container>
      <Content>
        <div className="greeting-container">
          <p>Olá visitante,</p>
          <p>
            Meu nome é Daniel
          </p>
        </div>
        <ButtonContainer
          isTheMouseOverTheButton={isTheMouseOverTheButton} onMouseEnter={() => setIsTheMouseOverTheButton(true)}
          onMouseLeave={() => setIsTheMouseOverTheButton(false)}
        >
          <Button
            type="button"
            isTheMouseOverTheButton={isTheMouseOverTheButton}
          >
          {'< Clique aqui e veja meus serviços />'}
          </Button>
          <Arrow
            src={arrow}
            alt="Arrow"
            width={40}
            className="arrow"
            isTheMouseOverTheButton={isTheMouseOverTheButton}
          />
        </ButtonContainer>
        <div className="description-container">
          <p>
            Sou um desenvolvedor focado em criar {`API's RESTFUL`} e aplicações fluídas e responsivas.
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
