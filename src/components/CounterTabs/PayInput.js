import React, { useState } from 'react';  
  
export default function PayInput() {  
    const [payValue, setPayValue] = useState('');
  
  return (  
    <div>  
      <form>  
        <input className='form-input' placeholder='00,0' type="text" onChange={(e) => setPayValue(e.target.value)} />
        <svg class="icon-input" width="20" height="20">
              <use  href="../../images/calculator.svg">
              </use>
            </svg>
      </form>  
    </div>  
  );  
}