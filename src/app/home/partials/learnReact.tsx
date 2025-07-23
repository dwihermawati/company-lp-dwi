import { generateClamp } from '@/function/generate-clamp';
import React from 'react';

const LearnReact = () => {
  return (
    <div
      className='custom-container'
      style={{
        paddingBlock: generateClamp(40, 80, 1248),
      }}
    ></div>
  );
};

export default LearnReact;
