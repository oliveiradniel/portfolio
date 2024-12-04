import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Tooltip({ tooltip, children }) {
  return (
    <Container>
      <span>{tooltip}</span>
      {children}
    </Container>
  );
}

Tooltip.propTypes = {
  tooltip: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
