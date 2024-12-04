import myContacts from '../../../../assets/images/mycontacts.svg';
import react from '../../../../assets/icons/react.svg';
import javascript from '../../../../assets/icons/javascript.svg';
import css from '../../../../assets/icons/css.svg';
import postgre from '../../../../assets/icons/postgre.svg';

export default [
  {
    id: Math.random(),
    name: 'MyContacts (JStack)',
    description: 'Salve seus contatos importantes e de onde eles vieram.',
    image: myContacts,
    alternativeText: 'MyContacts',
    technologies: [
      {
        id: Math.random(),
        name: 'React',
        image: react,
      },
      {
        id: Math.random(),
        name: 'JavaScript',
        image: javascript,
      },
      {
        id: Math.random(),
        name: 'CSS',
        image: css,
      },
      {
        id: Math.random(),
        name: 'Postgre',
        image: postgre,
      },
    ],
  },
];
