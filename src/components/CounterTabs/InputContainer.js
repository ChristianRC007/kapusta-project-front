import React, { useState } from 'react';  
import Select from 'react-select'

import Button from '../MainButton'

const options = [
  { value: 'products', label: 'Products' },
  { value: 'salary', label: 'Salary' },
  { value: 'drinks', label: 'Drinks' }
]

export default function InputContainer() {
  const [productName, setProductName] = useState('');
  const [payValue, setPayValue] = useState('');
  
  return (
    <div >
      <div className='input-container' >  
      <form className='form-input'>  
        <input className='input-productName' placeholder='Описание товара' type="text" 
            onChange={(e) => setProductName(e.target.value)} required />
          
          <div className='border-select-category'>
            <Select className='select-category' placeholder='Категория товара' options={options} />
          </div>
          
        <input className='input-productValue' placeholder='00,0' type="text" onChange={(e) => setPayValue(e.target.value)} />

        {/* <svg class="icon-input" width="20" height="20">
          <use  href="../../images/calculator.svg">
          </use>
          </svg> */}
          
        </form>
        
      </div>
       <Button type='button' text='Ввод' className='input-button' />
        <Button type='button' text='Очистить' className='input-clear' /> 
  </div>       
  );
}