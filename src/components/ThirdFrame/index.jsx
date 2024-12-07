import { Container, Title } from './styles';
import Projects from './components/Projects';
import Modal from '../Modal';

export default function ThirdFrame() {
  return (
    <Container>
      <Modal />
      <Title>
        <hr />
        <h1>Projetos</h1>
      </Title>
      <Projects />
    </Container>
  );
}
