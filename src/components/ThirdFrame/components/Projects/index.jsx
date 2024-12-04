import projects from './data/projects';

import Tooltip from '../Tooltip';
import Project from './components/Project';

import { Container } from './styles';

export default function Projects() {
  return (
    <Container>
      {projects.map((project) => (
        <Project
          key={project.id}
          image={project.image}
          altImage={project.alternativeText}
          projectName={project.name}
          description={project.description}
        >
          {project.technologies.map((technologies) => (
            <Tooltip key={technologies.id} tooltip={technologies.name}>
              <img src={technologies.image} alt={technologies.name} />
            </Tooltip>
          ))}
        </Project>
      ))}
    </Container>
  );
}
