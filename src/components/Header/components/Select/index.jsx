import PropTypes from 'prop-types';
import flagOfBrazil from '../../../../assets/icons/pt-br.svg';
import flagOfUSA from '../../../../assets/icons/eua.svg';
import arrow from '../../../../assets/icons/arrow-header.svg';

import { Container, OptionsContainer, SelectContainer } from './styles';

export default function Select({
  isOpen,
  onClick,
  selectedLanguage,
  onSelectedLanguage,
}) {
  return (
    <Container>
      <SelectContainer type="button" onClick={onClick} $isOpen={isOpen}>
        {selectedLanguage === 'Portuguese' ? (
          <img src={flagOfBrazil} alt="Brasil" width={20} />
        ) : (
          <img src={flagOfUSA} alt="EUA" width={20} />
        )}
        <img src={arrow} alt="Arrow" width={18} />
      </SelectContainer>
      {isOpen && (
        <OptionsContainer>
          <button
            type="button"
            onClick={() => onSelectedLanguage('Portuguese')}
          >
            <img src={flagOfBrazil} alt="Brasil" width={14} />
            <span>Português</span>
          </button>
          <hr />
          <button type="button" onClick={() => onSelectedLanguage('English')}>
            <img src={flagOfUSA} alt="USA" width={14} />
            <span>Inglês</span>
          </button>
        </OptionsContainer>
      )}
    </Container>
  );
}

Select.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onSelectedLanguage: PropTypes.func.isRequired,
};
