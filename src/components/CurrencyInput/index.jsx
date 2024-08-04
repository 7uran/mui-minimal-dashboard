import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';

const CurrencyInput = ({ placeholder, ...props }) => {
  return (
    <div className='relative'>
      <BsCurrencyDollar className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
      <input
        type='number'
        className='pl-10 hover:border-black transition border w-full p-4 rounded-lg'
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default CurrencyInput;
