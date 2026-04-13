'use client';

import { useEffect, useState } from 'react';

interface AnimatedTextProps {
  words: string[];
  className?: string;
  changeDelay?: number;
}

export default function AnimatedText({ 
  words, 
  className = '', 
  changeDelay: _changeDelay = 3000  // eslint-disable-line @typescript-eslint/no-unused-vars
}: AnimatedTextProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span>{words[0]}</span>;
  }

  return (
    <span className={`${className} wall-text hero-wall-text`}>
      <span className="flip-container">
        {words.map((word, index) => (
          <span 
            key={index} 
            className="flip-word"
            data-word-index={index}
          >
            {word}
          </span>
        ))}
      </span>
    </span>
  );
}

