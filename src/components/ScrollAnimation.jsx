import { useInView } from 'react-intersection-observer';

const ScrollAnimation = ({ children, animation, threshold = 0.1, triggerOnce = true, ...rest }) => {
  const { ref, inView } = useInView({
    threshold: threshold,
    triggerOnce: triggerOnce,
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-500 ${inView ? animation : 'opacity-0'}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;