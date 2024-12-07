import { createPortal } from 'react-dom';

import { Overlay } from './styles';

export default function Modal() {
  const container = document.getElementById('modal-root');

  return createPortal(<Overlay>Modal</Overlay>, container);
}
