import { useState } from 'react';

import flagOfBrazil from '../../assets/icons/pt-br.svg';
import flagOfUSA from '../../assets/icons/eua.svg';
import arrow from '../../assets/icons/arrow.svg';

import Option from './components/Option';

import { Container, Select, SelectContainer } from './styles';

export default function Header() {
  const [isTheLanguageSelectionOpen, setIsTheLanguageSelectionOpen] =
    useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState('Portuguese');

  function handleOnClickSelect() {
    setIsTheLanguageSelectionOpen((prevState) => !prevState);
  }

  function handleSelectedLanguage(language) {
    setSelectedLanguage(language);
    handleOnClickSelect();
  }

  return (
    <Container>
      <SelectContainer>
        <Select
          type="button"
          onClick={handleOnClickSelect}
          isTheLanguageSelectionOpen={isTheLanguageSelectionOpen}
        >
          <img
            src={selectedLanguage === 'Portuguese' ? flagOfBrazil : flagOfUSA}
            alt={selectedLanguage === 'Portuguese' ? 'pt-br' : 'en'}
            width={14}
          />
          <span>
            {selectedLanguage === 'Portuguese' ? 'Português' : 'Inglês'}
          </span>
          <img className="arrow" src={arrow} alt="Arrow" width={10} />
        </Select>

        <Option
          isVisible={isTheLanguageSelectionOpen}
          language="Portuguese"
          onClick={() => handleSelectedLanguage('Portuguese')}
        />
        <Option
          isVisible={isTheLanguageSelectionOpen}
          language="English"
          onClick={() => handleSelectedLanguage('English')}
        />
      </SelectContainer>
    </Container>
  );
}
