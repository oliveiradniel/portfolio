import PropTypes from 'prop-types';

import { Container } from './styles';

export default function MainContent({ children }) {
  return <Container>{children}</Container>;
}

MainContent.propTypes = {
  children: PropTypes.node.isRequired,
};
