import PropTypes from 'prop-types';

import flagOfBrazil from '../../../../assets/icons/pt-br.svg';
import flagOfUSA from '../../../../assets/icons/eua.svg';

import { Container } from './styles';

export default function Option({ isVisible, language, onClick }) {
  return (
    <Container isVisible={isVisible} onClick={onClick}>
      <img
        src={language === 'Portuguese' ? flagOfBrazil : flagOfUSA}
        alt={language === 'Portuguese' ? 'pt-br' : 'en'}
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
