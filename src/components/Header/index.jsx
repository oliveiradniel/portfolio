import { useState } from 'react';

import Select from './components/Select';

import { Container } from './styles';

export default function Header() {
  const [isTheLanguageSelectionOpen, setIsTheLanguageSelectionOpen] =
    useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Portuguese');

  function handleClickSelect() {
    setIsTheLanguageSelectionOpen((prevState) => !prevState);
  }

  function handleSelectedLanguage(language) {
    setSelectedLanguage(language);
    handleClickSelect();
  }

  return (
    <Container>
      <Select
        isOpen={isTheLanguageSelectionOpen}
        selectedLanguage={selectedLanguage}
        onClick={handleClickSelect}
        onSelectedLanguage={handleSelectedLanguage}
        onClose={() => setIsTheLanguageSelectionOpen(false)}
      />
    </Container>
  );
}
