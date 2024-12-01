import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.lighter};
  padding: 0 10px;
  width: 100%;
  height: 640px;
  z-index: 4;
`;
