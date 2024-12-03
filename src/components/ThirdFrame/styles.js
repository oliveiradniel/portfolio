import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px;
`;

export const Title = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;

  hr {
    border: 3px solid ${({ theme }) => theme.colors.text.lighter};
    border-radius: 4px;
    opacity: 0.6;
    width: 60px;
  }

  h1 {
    font-size: 42px;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 32px;

  @media (min-width: 1200px) {
    display: flex;
    justify-content: space-around;
  }

  .tooltip-container {
    display: flex;
    justify-content: center;
    position: relative;

    &:hover span {
      opacity: 1;
    }

    span {
      bottom: 26px;
      color: ${({ theme }) => theme.colors.text.light};
      font-size: 12px;
      font-weight: 500;
      opacity: 0;
      position: absolute;

      transition: opacity 0.3s ease-in-out;
    }

    img {
      opacity: 0.6;
      width: 24px;

      transition: opacity 0.3s ease-in-out;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
