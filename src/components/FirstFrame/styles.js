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
  padding: 40px;
  position: relative;
  margin-top: 60px;
  max-width: 660px;
  width: 100%;

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
      font-weight: 500;
      text-align: center;
      width: 60px;

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
    animation: ${blink} 0.75s infinite;
    border-right: 2px solid ${({ theme }) => theme.colors.text.light};
    font-weight: 300;

    ${({ firstAnimationFinished }) =>
      firstAnimationFinished &&
      css`
        border-right: 2px solid ${({ theme }) => theme.colors.backgroundColor};
      `}
  }

  span {
    animation: ${blink} 0.75s infinite;
    border-right: 2px solid ${({ theme }) => theme.colors.text.light};
    display: block;
    font-size: 32px;
    font-weight: 300;

    ${({ secondAnimationFinished }) =>
      secondAnimationFinished &&
      css`
        border-right: 2px solid ${({ theme }) => theme.colors.backgroundColor};
      `}
  }
`;

export const Button = styled.button`
  align-items: center;
  background-image: linear-gradient(
    to left,
    rgb(255, 249, 91),
    rgb(211, 212, 80)
  );
  border: 0.5px solid ${({ theme }) => theme.colors.backgroundColor};
  border-radius: 4px;
  box-shadow: 8px 20px 20px -22px rgba(0, 0, 0, 0.25);
  display: flex;
  font-size: 16px;
  font-weight: 200;
  height: 54px;
  justify-content: center;
  position: relative;
  width: 100%;

  transition: border 0.4s ease-in-out;

  &::after {
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    border-radius: 4px;
    content: '';
    height: 100%;
    left: -102%;
    position: absolute;
    top: 0;
    width: 100%;

    transition: left 0.3s ease-in-out;
  }

  &:hover {
    border: 0.5px solid ${({ theme }) => theme.colors.text.lighter};

    &::after {
      left: 0;
    }
  }
`;

export const Arrow = styled.img`
  cursor: pointer;
  opacity: 0;
  position: absolute;
  z-index: 1;

  ${({ isTheMouseOverTheButton, animationTriggered }) =>
    isTheMouseOverTheButton
      ? css`
          animation: ${moveIn} 0.3s forwards;
        `
      : !isTheMouseOverTheButton &&
        animationTriggered &&
        css`
          animation: ${moveOut} 0.3s forwards;
        `}
`;
