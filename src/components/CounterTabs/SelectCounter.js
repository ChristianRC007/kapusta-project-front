import React, { Component } from 'react'
import Select from 'react-select'

const options = [
  { value: 'products', label: 'Products' },
  { value: 'salary', label: 'Salary' },
  { value: 'drinks', label: 'Drinks' }
]

const SelectCounter = () => {
    
    
    return (
    <>
    <Select placeholder='Категория товара' options={options} />
        </>
)}

export default SelectCounter