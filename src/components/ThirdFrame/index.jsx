import { useState } from 'react';
import { Container, Title } from './styles';
import Projects from './components/Projects';
import Modal from '../Modal';

export default function ThirdFrame() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleOpenModal() {
    setIsModalVisible(true);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
  }

  return (
    <Container>
      <Modal isVisible={isModalVisible} onCloseModal={handleCloseModal} />
      <Title>
        <hr />
        <h1>Projetos</h1>
      </Title>
      <Projects onOpenModal={handleOpenModal} />
    </Container>
  );
}
