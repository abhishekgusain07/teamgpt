"use client"
import { useState, useEffect } from 'react';

const AnimatedHeadline = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
  }, []);

  return (
    <h1 className="text-center font-['IBM_Plex_Sans'] font-extrabold text-[3.5rem] leading-[75px] sm:text-[2.5rem] sm:leading-[1.3em] md:text-[3rem] lg:text-[3.5rem] mt-2 mb-4 px-">
      <span className="inline-block">Intuitive GPT chat for your</span>{' '}
      <span className="inline-block relative">
        <span className={`inline-block ${isAnimating ? 'animate-fadeIn' : 'opacity-0'}`}>
          whole
        </span>{' '}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-[10px]"
        >
          <path
            d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"
            className={`${isAnimating ? 'animate-dash' : ''} fill-none stroke-current stroke-2`}
          />
        </svg>{' '}
      </span>
      {' '}<span className="inline-block">company</span>{' '}
    </h1>
  );
};

export default AnimatedHeadline;