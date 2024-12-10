import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary.main};
  box-shadow: 8px 20px 20px -22px rgba(0, 0, 0, 0.25);
  display: flex;
  height: 58px;

  position: fixed;
  width: 100%;
  z-index: 2;
`;
