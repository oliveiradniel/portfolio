import styled from 'styled-components';

export const Overlay = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  height: 100%;
  left: 0;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;

export const Container = styled.div`
  display: flex;

  @media (max-width: 1100px) {
    display: block;
  }

  .card {
    align-items: center;
    background-color: ${({ theme }) => theme.colors.text.dark};
    display: flex;
    flex-direction: column;
    height: 100px;
    justify-content: center;
    text-align: center;
    width: 200px;

    @media (max-width: 1100px) {
      & + .card {
        margin-top: 16px;
      }
    }

    @media (min-width: 1100px) {
      & + .card {
        margin-left: 16px;
      }
    }

    span {
      color: ${({ theme }) => theme.colors.text.lighter};
      font-size: 14px;
      font-weight: 500;
      margin-top: 16px;
    }
  }
`;
