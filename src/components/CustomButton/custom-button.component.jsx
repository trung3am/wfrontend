import React from 'react';

import './custom-buttom.styles.css';

const CustomButton = ({ children}) => (
  <button
    className='custom-button'
    
  >
    {children}
  </button>
);

export default CustomButton;
