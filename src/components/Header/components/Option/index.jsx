import PropTypes from 'prop-types';

import useAnimatedUnmount from '../../../../hooks/useAnimatedUnmount';

import flagOfBrazil from '../../../../assets/icons/pt-br.svg';
import flagOfUSA from '../../../../assets/icons/eua.svg';

import { Container } from './styles';

export default function Option({ isVisible, language, onClick }) {
  const { shouldRender, animatedElementRef } = useAnimatedUnmount({
    isVisible,
  });

  if (!shouldRender) {
    return null;
  }

  return (
    <Container
      onClick={onClick}
      ref={animatedElementRef}
      $isLeaving={!isVisible}
    >
      <img
        src={language === 'Português' ? flagOfBrazil : flagOfUSA}
        alt={language === 'Português' ? 'pt-br' : 'en'}
        width={14}
      />
      <span>{language}</span>
    </Container>
  );
}

Option.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  language: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
