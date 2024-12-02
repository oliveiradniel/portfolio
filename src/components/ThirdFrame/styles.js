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
  margin-top: 32px;

  @media (min-width: 1200px) {
    display: flex;
    justify-content: space-around;
  }

  .card {
    border-radius: 4px;
    box-shadow: 8px 8px 30px -22px rgba(0, 0, 0, 0.25);
    display: flex;
    padding: 16px;
    width: 100%;

    @media (min-width: 1200px) {
      width: 46%;
    }

    img {
      width: 40%;
    }

    .description {
      display: flex;
      flex-direction: column;
      padding: 16px;

      .technologies {
        margin-top: 8px;

        img {
          width: 32px;
        }
      }

      p {
        font-weight: 600;
      }

      span {
        color: ${({ theme }) => theme.colors.gray[500]};
        font-size: 14px;
        margin-top: 8px;
      }
    }
  }
`;
