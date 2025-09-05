import React from 'react';

const UHeading = ({ text1, text2 }) => {
  return (
    <div className='flex items-center justify-center text-6xl gap-3'>
      <h4 className='font-bold'>{text1}</h4>
       <h5 className='italican'>{text2}</h5>
    </div>
  );
};

export default UHeading;
