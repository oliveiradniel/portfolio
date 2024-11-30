import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { AnimatedText } from './styles';

export default function Typewriter({ id, animatedText, speed, timeToExecute }) {
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    let index = 0;
    let timeout = null;

    function typewriter() {
      if (index < animatedText.length) {
        const element = document.getElementById(id);
        element.innerHTML += animatedText.charAt(index);

        index += 1;

        timeout = setTimeout(typewriter, speed);
      } else {
        setAnimationFinished(true);
      }
    }

    if (timeToExecute) {
      setTimeout(() => {
        typewriter();
      }, timeToExecute);
    } else {
      typewriter();
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [id, animatedText, speed, timeToExecute]);

  return (
    <AnimatedText $animationFinished={animationFinished}>
      <p id={id} />
    </AnimatedText>
  );
}

Typewriter.propTypes = {
  id: PropTypes.string.isRequired,
  animatedText: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
  timeToExecute: PropTypes.number,
};

Typewriter.defaultProps = {
  timeToExecute: null,
};
