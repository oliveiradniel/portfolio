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
          <figure>
            <img src={github} alt="Github" width={28} />
            <figcaption>Repositório Github</figcaption>
          </figure>
          <hr />
          <div className="description">
            <p>Explore o código, commits e muito mais no Github.</p>
            <div className="button-container">
              <button type="button">CONFERIR</button>
            </div>
          </div>
        </div>
        <div className="card">
          <figure>
            <img src={styleGuide} alt="Guia de Estilo" width={28} />
            <figcaption>Guia de Estilo</figcaption>
          </figure>
          <hr />
          <div className="description">
            <p>Confira o guia de estilo e os detalhes de design.</p>
            <div className="button-container">
              <button type="button">CONFERIR</button>
            </div>
          </div>
        </div>
        <div className="card">
          <figure>
            <img src={deploy} alt="Deploy" width={28} />
            <figcaption>Deploy</figcaption>
          </figure>
          <hr />
          <div className="description">
            <p>Experimente a aplicação em tempo real.</p>
            <div className="button-container">
              <button type="button">CONFERIR</button>
            </div>
          </div>
        </div>
        <div className="card">
          <figure>
            <img src={info} alt="Info" width={28} />
            <figcaption>Informações Técnicas</figcaption>
          </figure>
          <hr />
          <div className="description">
            <p>
              Confira as especificações técnicas por trás do desenvolvimento
              deste projeto.
            </p>
            <div className="button-container">
              <button type="button">CONFERIR</button>
            </div>
          </div>
        </div>
      </Container>
    </Overlay>,
    container
  );
}
