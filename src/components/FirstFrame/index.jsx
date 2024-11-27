/* eslint-disable prettier/prettier */

import { useEffect, useState } from 'react';

import github from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import instagram from '../../assets/icons/instagram.svg';
import arrow from '../../assets/icons/arrow-button.svg';

import { Arrow, Button, ButtonContainer, Container, Content, GreetingContainer } from './styles';

export default function FirstPage() {
  const [isTheMouseOverTheButton, setIsTheMouseOverTheButton] = useState(false);
  const [firstAnimationFinished, setFirstAnimationFinished] = useState(false);
  const [secondAnimationFinished, setSecondAnimationFinished] = useState(false);

  useEffect(() => {
    const firstGreetingToBeAppliedTheEffect = 'Olá visitante,';
    const secondGreetingToBeAppliedTheEffect = 'meu nome é Daniel.';

    let firstIndex = 0
    let secondIndex = 0
    let firstTimeout = null;
    let secondTimeout = null;

    function typewriterFirstText() {
      if (!(firstIndex < firstGreetingToBeAppliedTheEffect.length)) {
        setFirstAnimationFinished(true);
      } else {
        document.getElementById('first-text').innerHTML += firstGreetingToBeAppliedTheEffect.charAt(firstIndex);
        firstIndex += 1;
        firstTimeout = setTimeout(typewriterFirstText, 80);
      }

    }

    function typewriterSecondText() {
      if (!(secondIndex < secondGreetingToBeAppliedTheEffect.length)) {
        setSecondAnimationFinished(true);
      } else {
        document.getElementById('second-text').innerHTML += secondGreetingToBeAppliedTheEffect.charAt(secondIndex);
        secondIndex += 1;
        secondTimeout = setTimeout(typewriterSecondText, 80);
      }
    }

    typewriterFirstText();
    setTimeout(() => {
      typewriterSecondText();
    }, 1300);

    return () => clearTimeout(firstTimeout, secondTimeout);
  }, []);

  console.log(firstAnimationFinished);

  return (
    <Container>
      <Content>
        <GreetingContainer firstAnimationFinished={firstAnimationFinished} secondAnimationFinished={secondAnimationFinished}>
          <p id='first-text' />
          <span id='second-text' />
        </GreetingContainer>
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
