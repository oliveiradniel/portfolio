import PropTypes from 'prop-types';

import { useCallback, useEffect } from 'react';
import useAnimatedUnmount from '../../../../hooks/useAnimatedUnmount';

import flagOfBrazil from '../../../../assets/icons/pt-br.svg';
import flagOfUSA from '../../../../assets/icons/eua.svg';
import arrow from '../../../../assets/icons/arrow-header.svg';

import { Container, OptionsContainer, SelectContainer } from './styles';

export default function Select({
  isOpen,
  onClick,
  onClose,
  selectedLanguage,
  onSelectedLanguage,
}) {
  const { shouldRender, animatedElementRef } = useAnimatedUnmount({
    isVisible: isOpen,
  });

  const handleClickOutsideTheSelect = useCallback(
    (event) => {
      if (!event.target.closest('#select')) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutsideTheSelect);
    }

    return () => {
      document.removeEventListener('click', handleClickOutsideTheSelect);
    };
  }, [handleClickOutsideTheSelect, isOpen]);

  return (
    <Container id="select">
      <SelectContainer type="button" onClick={onClick} $isOpen={isOpen}>
        {selectedLanguage === 'Portuguese' ? (
          <img src={flagOfBrazil} alt="Brasil" width={20} />
        ) : (
          <img src={flagOfUSA} alt="EUA" width={20} />
        )}
        <img src={arrow} alt="Arrow" width={18} />
      </SelectContainer>
      {shouldRender && (
        <OptionsContainer ref={animatedElementRef} $isLeaving={!isOpen}>
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
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onSelectedLanguage: PropTypes.func.isRequired,
};
