import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px;
`;

export const Title = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

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
