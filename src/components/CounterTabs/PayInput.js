import React, { useState } from 'react';  
  
export default function PayInput() {  
    const [payValue, setPayValue] = useState('');
  
  return (  
    <div>  
      <form>  
        <input placeholder='00,0' type="text" onChange={(e) => setPayValue(e.target.value)} />  
      </form>  
    </div>  
  );  
}