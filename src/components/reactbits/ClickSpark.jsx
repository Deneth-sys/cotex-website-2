import { useRef } from 'react';

export default function ClickSpark({
  sparkColor = '#00ccff',
  sparkSize = 8,
  sparkRadius = 25,
  sparkCount = 8,
  duration = 400,
  children,
  className = ""
}) {
  const containerRef = useRef(null);

  const handleClick = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    for (let i = 0; i < sparkCount; i++) {
      const angle = (i * 2 * Math.PI) / sparkCount;
      const spark = document.createElement('div');
      spark.className = 'pointer-events-none absolute rounded-full z-50';
      spark.style.width = `${sparkSize}px`;
      spark.style.height = `${sparkSize}px`;
      spark.style.backgroundColor = sparkColor;
      spark.style.left = `${x}px`;
      spark.style.top = `${y}px`;
      spark.style.boxShadow = `0 0 10px ${sparkColor}`;

      containerRef.current.appendChild(spark);

      const destinationX = Math.cos(angle) * sparkRadius;
      const destinationY = Math.sin(angle) * sparkRadius;

      const animation = spark.animate(
        [
          { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
          { transform: `translate(calc(-50% + ${destinationX}px), calc(-50% + ${destinationY}px)) scale(0)`, opacity: 0 }
        ],
        {
          duration: duration,
          easing: 'cubic-bezier(0, .9, .57, 1)',
          fill: 'forwards'
        }
      );

      animation.onfinish = () => spark.remove();
    }
  };

  return (
    <div ref={containerRef} onClick={handleClick} className={`relative overflow-hidden ${className}`}>
      {children}
    </div>
  );
}