import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.main};
  box-shadow: 8px 20px 20px -22px rgba(0, 0, 0, 0.25);
  height: 58px;
  padding: 0 80px;
  position: fixed;
  width: 100%;
`;

export const SelectContainer = styled.div`
  margin-top: 10px;
`;

export const Select = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary.light};
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 2px;
  padding: 8px 16px;
  position: absolute;
  z-index: 1;

  span {
    width: 90px;
  }

  .arrow {
    transition: transform 0.2s ease-in;
    transform: ${({ isTheLanguageSelectionOpen }) =>
      isTheLanguageSelectionOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`;
