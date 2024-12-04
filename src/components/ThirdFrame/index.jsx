import { Container, Title } from './styles';
import Projects from './components/Projects';

export default function ThirdFrame() {
  return (
    <Container>
      <Title>
        <hr />
        <h1>Projetos</h1>
      </Title>
      <Projects />
    </Container>
  );
}
