import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

const fadeOut = keyframes`
  from { opacity: 1 }
  to { opacity: 0 }
`;

const scaleIn = keyframes`
  from { transform: scale(0) }
  to { transform: scale(1) }
`;

const scaleOut = keyframes`
  from { transform: scale(1) }
  to { transform: scale(0) }
`;

export const Overlay = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 0;
  margin-top: 40px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;

  animation: ${fadeIn} 0.3s ease-in-out;

  ${({ $isLeaving }) =>
    $isLeaving &&
    css`
      animation: ${fadeOut} 0.2s ease-in-out forwards;
    `}

  .close {
    background-color: transparent;
    border: none;
    margin-bottom: 32px;

    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const Container = styled.div`
  display: flex;

  animation: ${scaleIn} 0.3s ease-in-out;

  ${({ $isLeaving }) =>
    $isLeaving &&
    css`
      animation: ${scaleOut} 0.2s ease-in-out forwards;
    `}

  @media (max-width: 1100px) {
    display: block;
  }

  .card {
    background-color: ${({ theme }) => theme.colors.text.dark};
    border-radius: 4px;
    display: flex;

    @media (max-width: 1100px) {
      & + .card {
        margin-top: 16px;
      }
    }

    @media (min-width: 1100px) {
      display: block;

      & + .card {
        margin-left: 16px;
      }
    }

    figure {
      align-items: center;
      display: flex;
      flex-direction: column;
      height: 100px;
      justify-content: center;
      text-align: center;
      width: 200px;

      @media (min-width: 1100px) {
        width: 240px;
        height: 140px;
      }

      figcaption {
        color: ${({ theme }) => theme.colors.text.lighter};
        font-size: 14px;
        font-weight: 500;
        margin-top: 16px;
      }
    }

    hr {
      border: 1px solid rgba(255, 255, 255, 0.2);
      margin: 16px 0;

      transform: scaleX(0.5);

      @media (min-width: 1100px) {
        background-color: rgba(255, 255, 255, 0.2);
        border: none;
        height: 1px;
        margin: 0 16px;

        transform: scaleY(0.5);
      }
    }

    .description {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 16px 0;
      padding: 0 16px;
      width: 400px;

      @media (min-width: 1100px) {
        border-left: none;
        height: 180px;
        padding: 16px;
        margin: 0;
        width: 240px;
      }

      p {
        color: ${({ theme }) => theme.colors.backgroundColor};
        font-size: 14px;
        font-weight: 300;
      }

      .button-container {
        display: flex;
        justify-content: end;

        button {
          background-color: transparent;
          border: 0;
          color: ${({ theme }) => theme.colors.text.light};
          font-weight: bold;
          padding: 0 16px;

          transition: opacity 0.2s ease-in-out;

          &:hover {
            opacity: 0.6;
          }
        }
      }
    }
  }
`;
