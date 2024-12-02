import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Card({
  image,
  altImage,
  projectName,
  description,
  children,
}) {
  return (
    <Container>
      <img src={image} alt={altImage} className="projectImage" />
      <div className="description">
        <span>{description}</span>
        <p>{projectName}</p>
        <div className="technologies">{children}</div>
      </div>
    </Container>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  altImage: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
