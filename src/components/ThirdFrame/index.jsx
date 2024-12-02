import myContacts from '../../assets/images/mycontacts.svg';

import { CardsContainer, Container, Title } from './styles';

export default function ThirdFrame() {
  return (
    <Container>
      <Title>
        <hr />
        <h1>Projetos</h1>
      </Title>
      <CardsContainer>
        <div className="card">
          <img src={myContacts} alt="MyContacts" width={360} />
          <div className="description">
            <span>Salve seus contatos importantes e de onde eles vieram.</span>
            <p>MyContacts (JStack)</p>
          </div>
        </div>
        <div className="card">
          <img src={myContacts} alt="MyContacts" width={360} />
          <div className="description">
            <span>Salve seus contatos importantes e de onde eles vieram.</span>
            <p>MyContacts (JStack)</p>
          </div>
        </div>
      </CardsContainer>
    </Container>
  );
}
