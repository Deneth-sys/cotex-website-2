import { useEffect, useState, useRef } from 'react';

export default function CountUp({ to, duration = 2, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const end = parseInt(to, 10);
          const totalFrames = Math.round(duration * 60);
          let frame = 0;

          const counter = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            // Ease-out curve for natural deceleration
            const currentCount = Math.round(end * (1 - Math.pow(1 - progress, 3)));

            if (frame === totalFrames) {
              setCount(end);
              clearInterval(counter);
            } else {
              setCount(currentCount);
            }
          }, 1000 / 60);
        }
      },
      { threshold: 0.3 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [to, duration, hasAnimated]);

  return <span ref={countRef}>{prefix}{count}{suffix}</span>;
}