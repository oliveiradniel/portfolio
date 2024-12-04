import myContacts from '../../assets/images/mycontacts.svg';
import react from '../../assets/icons/react.svg';
import javascript from '../../assets/icons/javascript.svg';
import css from '../../assets/icons/css.svg';
import postgre from '../../assets/icons/postgre.svg';

import Card from './components/Card';

import { CardsContainer, Container, Title } from './styles';
import Tooltip from './components/Tooltip';

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
          <Tooltip tooltip="React">
            <img src={react} alt="React" />
          </Tooltip>
          <Tooltip tooltip="JavaScript">
            <img src={javascript} alt="JavaScript" />
          </Tooltip>
          <Tooltip tooltip="CSS">
            <img src={css} alt="CSS" />
          </Tooltip>
          <Tooltip tooltip="Postgre">
            <img src={postgre} alt="Postgre" />
          </Tooltip>
        </Card>
      </CardsContainer>
    </Container>
  );
}
