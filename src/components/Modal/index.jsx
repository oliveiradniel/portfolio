import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import PropTypes from 'prop-types';

import options from './options';

import close from '../../assets/icons/close.svg';

import { Container, Overlay } from './styles';

export default function Modal({ isVisible, onCloseModal }) {
  const [shouldRender, setShouldRender] = useState(isVisible);

  const overlayRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
    }

    function handleAnimationEnd() {
      setShouldRender(false);
    }

    const { current: overlayRefElement } = overlayRef;

    if (!isVisible && overlayRefElement) {
      overlayRefElement.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      if (overlayRefElement) {
        overlayRefElement.removeEventListener(
          'animationend',
          handleAnimationEnd
        );
      }
    };
  }, [isVisible]);

  if (!shouldRender) {
    return null;
  }

  const container = document.getElementById('modal-root');

  return createPortal(
    <Overlay $isLeaving={!isVisible} ref={overlayRef}>
      <button type="button" onClick={onCloseModal} className="close">
        <img src={close} alt="Close" width={32} />
      </button>
      <Container $isLeaving={!isVisible}>
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

Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
