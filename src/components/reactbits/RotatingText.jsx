import { useState, useEffect } from 'react';

export default function RotatingText({ 
  words = [], 
  interval = 3000, 
  className = "" 
}) {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (words.length <= 1) return;

    const timer = setInterval(() => {
      setIsVisible(false); // Fade out & slide up
      
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsVisible(true); // Fade in & slide down
      }, 350); // Matches transition duration
      
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  if (!words.length) return null;

  return (
    <span className="inline-block relative overflow-hidden align-baseline">
      <span 
        className={`inline-block transition-all duration-300 transform ${
          isVisible 
            ? 'opacity-150 translate-y-0' 
            : 'opacity-0 -translate-y-4'
        } ${className}`}
      >
        {words[index]}
      </span>
    </span>
  );
}