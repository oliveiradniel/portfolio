import projects from './projects';

import Tooltip from '../Tooltip';

import { Project, Container } from './styles';

export default function Projects() {
  return (
    <Container>
      {projects.map((project) => (
        <Project key={project.id}>
          <img
            src={project.image}
            alt={project.alternativeText}
            className="image"
          />
          <div className="information">
            <span>{project.description}</span>
            <p>{project.name}</p>
            <div className="technologies">
              {project.technologies.map((technologies) => (
                <Tooltip key={technologies.id} tooltip={technologies.name}>
                  <img src={technologies.image} alt={technologies.name} />
                </Tooltip>
              ))}
            </div>
            <button type="button" onClick={() => console.log('info')}>
              + INFORMAÇÕES
            </button>
          </div>
        </Project>
      ))}
    </Container>
  );
}
