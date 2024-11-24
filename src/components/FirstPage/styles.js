import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 10px;
  width: 100%;
`;

export const Content = styled.div`
  position: relative;
  margin-top: 140px;
  max-width: 600px;
  width: 100%;

  .greeting-container {
    text-align: end;

    &:first-child {
      font-weight: 200;
    }

    p + p {
      color: '#fff';
      font-size: 32px;
      font-weight: 100;

      span {
        font-weight: 250;
      }
    }
  }

  .description-container {
    font-weight: 200;
    margin-top: 44px;

    p {
      font-size: 18px;

      span {
        font-weight: 300;
      }
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
    border-top: 0.5px solid ${({ theme }) => theme.colors.text.lighter};
    display: flex;
    justify-content: space-evenly;
    margin-top: 8px;
    padding: 16px 0;
    width: 200px;

    a {
      text-align: center;
      width: 60px;

      img {
        width: 40px;
      }

      figure {
        figcaption {
          color: ${({ theme }) => theme.colors.text.main};
          font-size: 10px;
        }
      }
    }
  }
`;

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
`;
