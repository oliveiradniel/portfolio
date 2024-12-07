import { createPortal } from 'react-dom';

import { Container, Overlay } from './styles';
import options from './options';

export default function Modal() {
  const container = document.getElementById('modal-root');

  return createPortal(
    <Overlay>
      <Container>
        {options.map((option) => (
          <div key={option.key} className="card">
            <figure>
              <img src={option.image} alt="Github" width={28} />
              <figcaption>{option.title}</figcaption>
            </figure>
            <hr />
            <div className="description">
              <p>{option.description}</p>
              <div className="button-container">
                <button type="button">CONFERIR</button>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </Overlay>,
    container
  );
}
