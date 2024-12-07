import { createPortal } from 'react-dom';

import github from '../../assets/icons/github2.svg';
import styleGuide from '../../assets/icons/style-guide.svg';
import deploy from '../../assets/icons/deploy.svg';
import info from '../../assets/icons/info.svg';

import { Container, Overlay } from './styles';

export default function Modal() {
  const container = document.getElementById('modal-root');

  return createPortal(
    <Overlay>
      <Container>
        <div className="card">
          <img src={github} alt="Github" width={28} />
          <span>Repositório Github</span>
        </div>
        <div className="card">
          <img src={styleGuide} alt="Guia de Estilo" width={28} />
          <span>Guia de Estilo</span>
        </div>
        <div className="card">
          <img src={deploy} alt="Deploy" width={28} />
          <span>Deploy</span>
        </div>
        <div className="card">
          <img src={info} alt="Info" width={28} />
          <span>Informações Técnicas</span>
        </div>
      </Container>
    </Overlay>,
    container
  );
}
