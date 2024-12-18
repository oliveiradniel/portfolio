import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 32px;

  @media (min-width: 1200px) {
    display: flex;
    justify-content: space-around;
  }
`;

export const Project = styled.div`
  border-radius: 4px;
  box-shadow: 8px 8px 30px -22px rgba(0, 0, 0, 0.25);
  display: flex;
  padding: 16px;
  width: 100%;

  @media (min-width: 1200px) {
    width: 46%;
  }

  .image {
    width: 50%;

    @media (max-width: 600px) {
      display: none;
    }
  }

  .information {
    display: flex;
    flex-direction: column;
    padding: 16px;
    width: 100%;

    p {
      font-weight: 600;
    }

    span {
      color: ${({ theme }) => theme.colors.gray[500]};
      font-size: 14px;
      margin-top: 8px;
    }
  }

  .technologies {
    display: flex;
    justify-content: space-between;
    margin: 24px 0 16px 50%;

    span {
      color: ${({ theme }) => theme.colors.text.main};
    }
  }

  button {
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    border: 2px solid ${({ theme }) => theme.colors.text.main};
    border-radius: 4px;
    font-weight: 600;
    height: 42px;

    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.colors.text.main};
      color: ${({ theme }) => theme.colors.gray[100]};
    }
  }
`;
