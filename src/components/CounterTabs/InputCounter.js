import React, { useState } from 'react';  
  
export default function InputCounter() {  
  const [productName, setProductName] = useState('');  
  
  return (  
    <div className='input-name'>  
      <form>  
        <input className='form-input' placeholder='Описание товара' type="text" 
        onChange={(e) => setProductName(e.target.value)} required />  
      </form>  
    </div>  
  );  
}
