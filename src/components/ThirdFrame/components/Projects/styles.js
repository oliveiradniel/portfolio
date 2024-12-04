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
