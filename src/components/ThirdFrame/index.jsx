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
          <div className="tooltip-container">
            <span>React</span>
            <img src={react} alt="React" />
          </div>
          <div className="tooltip-container">
            <span>JavaScript</span>
            <img src={javascript} alt="JavaScript" />
          </div>
          <div className="tooltip-container">
            <span>CSS</span>
            <img src={css} alt="CSS" />
          </div>
          <div className="tooltip-container">
            <span>Postgre</span>
            <img src={postgre} alt="Postgre" />
          </div>
        </Card>
      </CardsContainer>
    </Container>
  );
}
