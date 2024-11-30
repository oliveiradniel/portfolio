/* eslint-disable prettier/prettier */

import github from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import instagram from '../../assets/icons/instagram.svg';
import arrow from '../../assets/icons/arrow-button.svg';

import Typewriter from '../Typewriter';

import { Button, Container, Content, DescriptionContainer, GreetingContainer, SocialMediaContainer } from './styles';

export default function FirstPage() {
  return (
    <Container>
      <Content>
        <GreetingContainer>
          <Typewriter
            id="span-animated-text"
            animatedText='Olá visitante,'
            speed={60}
           />
          <Typewriter
            id="p-animated-text"
            animatedText='meu nome é Daniel.'
            speed={70}
            timeToExecute={1050}
          />

        </GreetingContainer>
        <Button>
          {'< Clique aqui e veja meus serviços />'}
          <img
            src={arrow}
            alt="Arrow"
            width={40}
            className="arrow"
          />
        </Button>
        <DescriptionContainer>
          <p>
            Sou um desenvolvedor focado em criar {`API's RESTFUL`} e aplicações web fluídas e responsivas.
          </p>
        </DescriptionContainer>

        <SocialMediaContainer>
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
        </SocialMediaContainer>
      </Content>
    </Container>
  );
}
