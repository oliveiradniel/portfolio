import github from '../../assets/icons/github2.svg';
import styleGuide from '../../assets/icons/style-guide.svg';
import deploy from '../../assets/icons/deploy.svg';
import info from '../../assets/icons/info.svg';

export default [
  {
    key: Math.random(),
    image: github,
    title: 'Repositório Github',
    description: 'Explore o código, commits e muito mais no Github.',
  },
  {
    key: Math.random(),
    image: styleGuide,
    title: 'Guia de Estilo',
    description: 'Confira a guia de estilo e os detalhes de design.',
  },
  {
    key: Math.random(),
    image: deploy,
    title: 'Deploy',
    description: 'Experimente a aplicação em tempo real.',
  },
  {
    key: Math.random(),
    image: info,
    title: 'Informações Técnicas',
    description:
      'Confira as especificações técnicas por trás do desenvolvimento deste projeto.',
  },
];
