import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  &:hover span {
    opacity: 1;
  }

  span {
    bottom: 26px;
    font-size: 12px;
    font-weight: 500;
    opacity: 0;
    position: absolute;

    transition: opacity 0.3s ease-in-out;
  }

  img {
    opacity: 0.6;
    width: 24px;

    transition: opacity 0.3s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }
`;
