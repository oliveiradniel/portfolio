import styled from 'styled-components';

export const Container = styled.div`
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

    p {
      font-weight: 600;
    }

    span {
      color: ${({ theme }) => theme.colors.gray[500]};
      font-size: 14px;
      margin-top: 8px;
    }
  }
`;
