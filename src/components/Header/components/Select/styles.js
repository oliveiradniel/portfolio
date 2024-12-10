import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0) }
`;

export const Container = styled.div`
  margin-left: 80px;
  position: relative;
`;

export const SelectContainer = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary.light};
  border: none;
  border-radius: 4px;
  display: flex;
  padding: 6px 14px;

  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      background-color: rgba(255, 255, 255, 0.4) !important;
    `}

  img + img {
    margin-left: 4px;
  }
`;

export const OptionsContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(3px);
  border-radius: 4px;
  margin-top: 4px;
  padding: 4px;
  position: absolute;

  animation: ${fadeIn} 0.3s;

  hr {
    background-color: #fff;
    border: none;
    height: 0.4px;
    padding: 0 16px;
  }

  button {
    align-items: center;
    background-color: transparent;
    border: none;
    display: flex;
    padding: 4px 16px;
    width: 100%;

    transition: background-color 0.2s ease-in;

    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
    }

    span {
      margin-left: 8px;
    }
  }
`;
