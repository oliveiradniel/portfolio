import { CardsContainer, Container, Content } from './styles';

export default function SecondFrame() {
  return (
    <Container>
      <div className="frame" />
      <Content>
        <h1 className="title">Serviços</h1>
        <CardsContainer>
          <div className="card-description">
            <p className="card-description-title">Tranforme!</p>

            <p className="description">
              Veja suas ideias se transformarem em realidade. Serviços de design
              que comunicam sua marca com excelência!
            </p>
          </div>
        </CardsContainer>
      </Content>
    </Container>
  );
}
