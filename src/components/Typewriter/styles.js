import styled, { css, keyframes } from 'styled-components';

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`;

export const AnimatedText = styled.div`
  p {
    animation: ${blink} 0.75s infinite;
    border-right: 2px solid ${({ theme }) => theme.colors.text.light};

    ${({ animationFinished }) =>
      animationFinished &&
      css`
        border-right: 2px solid ${({ theme }) => theme.colors.backgroundColor};
      `}
  }

  & + & {
    font-size: 32px;
  }
`;
