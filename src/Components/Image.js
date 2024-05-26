import React from 'react';
import Doll from '../Assets/4ef961ec-c0b0-45bb-8268-d05a554660ca.jpeg';

const Image = () => {
  return (
    <div className='flex justify-center items-center'>
      <img src={Doll} alt="birthday" className='w-[450px]' />
    </div>
  )
}

export default Image
