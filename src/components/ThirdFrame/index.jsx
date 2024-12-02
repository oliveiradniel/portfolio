import myContacts from '../../assets/images/mycontacts.svg';
import react from '../../assets/icons/react.svg';
import javascript from '../../assets/icons/javascript.svg';
import css from '../../assets/icons/css.svg';
import postgre from '../../assets/icons/postgre.svg';

import Card from './components/Card';

import { CardsContainer, Container, Title } from './styles';

export default function ThirdFrame() {
  return (
    <Container>
      <Title>
        <hr />
        <h1>Projetos</h1>
      </Title>
      <CardsContainer>
        <Card
          image={myContacts}
          altImage="MyContacts"
          projectName="MyContacts (JStack)"
          description="Salve seus contatos importantes e de onde eles vieram."
        >
          <img src={react} alt="React" />
          <img src={javascript} alt="JavaScript" />
          <img src={css} alt="CSS" />
          <img src={postgre} alt="Postgre" />
        </Card>
      </CardsContainer>
    </Container>
  );
}
