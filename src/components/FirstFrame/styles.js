import styled, { css, keyframes } from 'styled-components';

const shake = keyframes`
  0% { rotate: 0deg; }
  30% { rotate: 10deg; }
  60% { rotate: -10deg; }
  100% { rotate: 0deg; }
`;

const moveIn = keyframes`
  from {
    opacity: 0;
    left: 0;
  }
  to {
    opacity: 1;
    left: 50%;
  }
`;

const moveOut = keyframes`
  from {
    opacity: 1;
    left: 50%;
  }
  to {
    opacity: 0;
    left: 0;
  }
`;

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 10px;
  padding-bottom: 80px;
  width: 100%;
`;

export const Content = styled.div`
  border-radius: 8px 8px 0 0;
  position: relative;
  margin-top: 60px;
  max-width: 660px;
  width: 100%;
  padding: 40px;

  .description-container {
    font-weight: 600;
    margin-top: 44px;

    p {
      font-size: 22px;
    }
  }

  .social-media-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 78px;

    p {
      font-weight: 200;
    }
  }

  .social-media {
    align-items: center;
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.text.lighter};
    border-radius: 4px;
    border-top: 0.5px solid ${({ theme }) => theme.colors.text.lighter};
    display: flex;
    justify-content: space-evenly;
    margin-top: 8px;
    padding: 16px 0;
    width: 200px;

    a {
      text-align: center;
      width: 60px;
      font-weight: 500;

      figure {
        img {
          width: 40px;

          &:hover {
            animation: ${shake} 0.4s;
          }
        }

        figcaption {
          color: ${({ theme }) => theme.colors.text.main};
          font-size: 10px;
        }
      }
    }
  }
`;

export const GreetingContainer = styled.div`
  height: 80px;
  text-align: end;

  p {
    font-weight: 200;
    border-right: 2px solid ${({ theme }) => theme.colors.text.light};
    animation: ${blink} 0.75s infinite ease-in-out;

    ${({ firstAnimationFinished }) =>
      firstAnimationFinished &&
      css`
        animation-play-state: paused;
        border-right: 2px solid ${({ theme }) => theme.colors.backgroundColor};
      `}
  }

  span {
    display: block;
    font-size: 32px;
    font-weight: 300;
    border-right: 2px solid ${({ theme }) => theme.colors.text.light};
    animation: ${blink} 0.75s infinite ease-in-out;

    ${({ secondAnimationFinished }) =>
      secondAnimationFinished &&
      css`
        animation-play-state: paused;
        border-right: 2px solid ${({ theme }) => theme.colors.backgroundColor};
      `}
  }
`;

export const ButtonContainer = styled.div``;

export const Button = styled.button`
  border: none;
  background-image: linear-gradient(
    to left,
    rgb(255, 249, 91),
    rgb(211, 212, 80)
  );
  border-radius: 4px;
  box-shadow: 8px 20px 20px -22px rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.colors.text.main};
  font-size: 16px;
  font-weight: 200;
  height: 54px;
  margin-top: 12px;
  max-width: 600px;
  position: relative;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.primary.light};
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  border: 0.5px solid ${({ theme }) => theme.colors.backgroundColor};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) =>
      theme.colors.backgroundColor}; /* cor do preenchimento */
    transition: left 0.4s ease; /* transição suave para o preenchimento */
  }

  ${({ isTheMouseOverTheButton }) =>
    isTheMouseOverTheButton &&
    css`
      border: 0.5px solid ${({ theme }) => theme.colors.text.lighter};

      &::after {
        left: 0; /* Faz o pseudo-elemento ir para a esquerda, preenchendo o botão */
      }
    `}
`;

export const Arrow = styled.img`
  position: absolute;
  left: 0;
  top: 130px;
  opacity: 0;
  cursor: pointer;

  ${({ isTheMouseOverTheButton }) =>
    isTheMouseOverTheButton
      ? css`
          animation: ${moveIn} 0.4s forwards;
        `
      : css`
          animation: ${moveOut} 0.4s forwards;
        `}
`;
