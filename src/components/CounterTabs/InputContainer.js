import React, { useState } from 'react';  
import Select from 'react-select'

const options = [
  { value: 'products', label: 'Products' },
  { value: 'salary', label: 'Salary' },
  { value: 'drinks', label: 'Drinks' }
]

export default function InputContainer() {
  const [productName, setProductName] = useState('');
  const [payValue, setPayValue] = useState('');
  
  return (
    <div className='input-container'>
      <div >  
      <form className='form-input'>  
        <input className='form-input' placeholder='Описание товара' type="text" 
            onChange={(e) => setProductName(e.target.value)} required />
          
        <Select className='form-input' placeholder='Категория товара' options={options} />
          <input className='form-input' placeholder='00,0' type="text" onChange={(e) => setPayValue(e.target.value)} />

        <svg class="icon-input" width="20" height="20">
          <use  href="../../images/calculator.svg">
          </use>
          </svg>
          
      </form>  
    </div> 
  </div>       
  );
}