import { useEffect, useRef, useState } from 'react';

export default function useAnimatedUnmount({ isVisible }) {
  const [shouldRender, setShouldRender] = useState(isVisible);

  const animatedElementRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
    }

    function handleAnimationEnd() {
      setShouldRender(false);
    }

    const { current: elementRef } = animatedElementRef;

    if (!isVisible && elementRef) {
      elementRef.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      if (elementRef) {
        elementRef.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, [isVisible]);

  return { shouldRender, animatedElementRef };
}
