import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.text.main};
  display: flex;
  height: 640px;

  .frame {
    padding-left: 10px;
    width: 160px;
  }
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[300]};
  width: 100%;
  padding-right: 10px;

  .title {
    margin: 20px 0 0 20px;
    font-size: 42px;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 86%;

  .card-description {
    background-color: ${({ theme }) => theme.colors.primary.light};
    border-radius: 4px;
    box-shadow: 14px 14px 40px -22px rgba(0, 0, 0, 0.25);
    height: 300px;
    padding: 40px 25px;
    position: relative;
    transform: translateX(-25%);
    width: 280px;

    .card-description-title {
      font-size: 26px;
      font-weight: bold;
    }

    .description {
      margin-top: 20px;
      font-weight: 500;
    }
  }
`;
