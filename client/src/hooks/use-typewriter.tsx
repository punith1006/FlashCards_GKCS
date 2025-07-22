import { useState, useEffect } from 'react';

interface UseTypewriterProps {
  text: string;
  speed?: number;
  startDelay?: number;
  shouldStart: boolean;
  loop?: boolean;
  pauseDuration?: number;
}

export function useTypewriter({ text, speed = 50, startDelay = 0, shouldStart, loop = false, pauseDuration = 2000 }: UseTypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!shouldStart) {
      setDisplayText('');
      setIsComplete(false);
      return;
    }

    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    const startTyping = () => {
      let i = 0;
      setDisplayText('');
      setIsComplete(false);
      
      intervalId = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          setIsComplete(true);
          clearInterval(intervalId);
          
          // If looping is enabled, restart after pause
          if (loop) {
            timeoutId = setTimeout(() => {
              startTyping();
            }, pauseDuration);
          }
        }
      }, speed);
    };

    // Start the initial typing with delay
    timeoutId = setTimeout(() => {
      startTyping();
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, startDelay, shouldStart, loop, pauseDuration]);

  return { displayText, isComplete };
}