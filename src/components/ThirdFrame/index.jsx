import myContacts from '../../assets/images/mycontacts.svg';
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
          projectName="MyContacts (JStack)"
          description="Salve seus contatos importantes e de onde eles vieram."
        >
          <img src={myContacts} alt="MyContacts" />
        </Card>
        <Card
          projectName="MyContacts (JStack)"
          description="Salve seus contatos importantes e de onde eles vieram."
        >
          <img src={myContacts} alt="MyContacts" />
        </Card>
        <Card
          projectName="MyContacts (JStack)"
          description="Salve seus contatos importantes e de onde eles vieram."
        >
          <img src={myContacts} alt="MyContacts" />
        </Card>
        <Card
          projectName="MyContacts (JStack)"
          description="Salve seus contatos importantes e de onde eles vieram."
        >
          <img src={myContacts} alt="MyContacts" />
        </Card>
      </CardsContainer>
    </Container>
  );
}
