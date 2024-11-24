import styled, { css, keyframes } from 'styled-components';

const optionsIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(0px);
  }
  to {
    opacity: 1;
    transform: translateY(40px);
  }
`;

const optionsOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(40px);
  }
  to {
    opacity: 0;
    transform: translateY(0px);
  }
`;

export const Container = styled.div`
  align-items: center;
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  height: 22px;
  opacity: 0;
  position: absolute;
  padding: 8px 16px;
  width: 130px;
  -webkit-backdrop-filter: blur(3px);

  ${({ isVisible }) =>
    isVisible
      ? css`
          animation: ${optionsIn} 0.2s forwards;
        `
      : css`
          animation: ${optionsOut} 0.2s forwards;
        `}

  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }

  & + & {
    margin-top: 24px;
  }

  span {
    font-size: 12px;
    margin-left: 8px;
  }
`;
