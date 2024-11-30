/* eslint-disable prettier/prettier */

import { useEffect, useState } from 'react';

import github from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import instagram from '../../assets/icons/instagram.svg';
import arrow from '../../assets/icons/arrow-button.svg';

import Typewriter from '../Typewriter';

import { Arrow, Button, Container, Content, GreetingContainer } from './styles';

export default function FirstPage() {
  const [isTheMouseOverTheButton, setIsTheMouseOverTheButton] = useState(false);

  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    if (isTheMouseOverTheButton && !animationTriggered) {
      setAnimationTriggered(true);
    }
  }, [isTheMouseOverTheButton, animationTriggered]);

  return (
    <Container>
      <Content>
        <GreetingContainer>
          <Typewriter
            id="p-animated-text"
            animatedText='Olá visitante,'
            speed={60}
           />
          <Typewriter
            id="span-animated-text"
            animatedText='meu nome é Daniel'
            speed={70}
            timeToExecute={1050}
          />

        </GreetingContainer>
        <Button
          isTheMouseOverTheButton={isTheMouseOverTheButton} onMouseEnter={() => setIsTheMouseOverTheButton(true)}
          onMouseLeave={() => setIsTheMouseOverTheButton(false)}
        >
          {'< Clique aqui e veja meus serviços />'}
          <Arrow
            src={arrow}
            alt="Arrow"
            width={40}
            className="arrow"
            isTheMouseOverTheButton={isTheMouseOverTheButton}
            animationTriggered={animationTriggered}
          />
        </Button>
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
