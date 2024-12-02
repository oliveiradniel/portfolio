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
`;
