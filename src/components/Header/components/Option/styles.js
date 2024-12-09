import styled, { css, keyframes } from 'styled-components';

const optionsIn = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(40px);
  }
`;

const optionsOut = keyframes`
  from {
    transform: translateY(40px);
  }
  to {
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
  position: absolute;
  padding: 8px 16px;
  width: 130px;
  -webkit-backdrop-filter: blur(3px);

  animation: ${optionsIn} 0.3s forwards;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }

  & + & {
    margin-top: 24px;
  }

  ${({ $isLeaving }) =>
    $isLeaving &&
    css`
      animation: ${optionsOut} 0.2s forwards;
    `}

  span {
    font-size: 12px;
    margin-left: 8px;
  }
`;
