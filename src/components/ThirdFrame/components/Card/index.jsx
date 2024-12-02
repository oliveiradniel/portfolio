import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Card({ projectName, description, children }) {
  return (
    <Container>
      {children}
      <div className="description">
        <span>{description}</span>
        <p>{projectName}</p>
      </div>
    </Container>
  );
}

Card.propTypes = {
  projectName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
