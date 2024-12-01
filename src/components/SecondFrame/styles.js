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
