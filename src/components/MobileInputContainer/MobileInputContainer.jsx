import React, { useState } from 'react';
import Select from 'react-select';
import MainButton from '../MainButton';
import { useDispatch, useSelector } from 'react-redux';
import { transactionsSelectors } from '../../redux/transactions';

const options = [
  { value: 'transport', label: 'Транспорт' },
  { value: 'products', label: 'Продукты' },
  { value: 'health', label: 'Здоровье' },
  { value: 'alcohol', label: 'Алкоголь' },
  { value: 'entertainment', label: 'Развлечения' },
  { value: 'home', label: 'Всё для дома' },
  { value: 'technics', label: 'Техника' },
  { value: 'bill', label: 'Комуналка, связь' },
  { value: 'sport', label: 'Спорт, хобби' },
  { value: 'education', label: 'Образование' },
  { value: 'other', label: 'Прочее' },
];

const optionsProfit = [
  { value: 'salary', label: 'ЗП' },
  { value: 'additional', label: 'Доп. доход' },
];

export default function MobileInputContainer({ costs, onSubmit }) {
  const [productName, setProductName] = useState('');
  const [payValue, setPayValue] = useState('');
  const [category, setCategory] = useState([]);

  const selectedDate = useSelector(transactionsSelectors.currentDate);

  const onReset = () => {
    setProductName('');
    setPayValue('');
    setCategory([]);
  };

  const customStyles = {
    option: (provided, { isSelected }) => ({
      ...provided,
      color: isSelected ? '#52555f' : '#c7ccdc',
      backgroundColor: isSelected ? '#f5f6fb' : 'none',
      ':hover': {
        color: '#52555f',
        backgroundColor: '#f5f6fb',
      },
    }),
    control: () => ({
      display: 'inline-flex',
      width: 282,
      height: 44,
      paddingTop: 1,
      paddingBottom: 2,
      border: '2px solid #FFFFFF',
      borderBottomRightRadius: 16,
      textAlign: 'left',
      marginBottom: 30,
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: 'none',
    }),
    menuList: (provided, state) => ({
      ...provided,
      overflow: 'inherit',
    }),
    menu: (provided, state) => ({
      ...provided,
      top: 34,
      height: costs ? 360 : 75,
      borderRadius: 'none',
      boxShadow: '0px 3px 4px rgba(170, 178, 197, 0.4)',
      border: '2px solid #f5f6fb',
    }),
    placeholder: (provided, state) => ({
      ...provided,
      paddingLeft: 12,
    }),
  };

  const data = {
    date: selectedDate,
    category: category.label,
    description: productName,
    amount: +payValue,
  };

  return (
    <div className="mobile-input-container">
      <form className="mobile-form-input">
        <input
          className="mobile-input-productName"
          placeholder="Описание товара"
          type="text"
          value={productName}
          onChange={e => setProductName(e.target.value)}
          required
        />

        <Select
          styles={customStyles}
          placeholder="Категория товара"
          options={costs ? options : optionsProfit}
          value={category}
          onChange={setCategory}
        />
        <label className="mobile-input-productValue-label">
          <input
            className="mobile-input-productValue"
            placeholder="00,0"
            type="text"
            value={payValue}
            onChange={e => setPayValue(e.target.value)}
          />

          <div className="mobile-input-productValue-label-div">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.0312 0H2.96875C1.99949 0 1.21094 0.788555 1.21094 1.75781V18.2422C1.21094 19.2114 1.99949 20 2.96875 20H17.0312C18.0005 20 18.7891 19.2114 18.7891 18.2422V1.75781C18.7891 0.788555 18.0005 0 17.0312 0ZM17.6172 18.2422C17.6172 18.5653 17.3543 18.8281 17.0312 18.8281H2.96875C2.64566 18.8281 2.38281 18.5653 2.38281 18.2422V1.75781C2.38281 1.43473 2.64566 1.17188 2.96875 1.17188H17.0312C17.3543 1.17188 17.6172 1.43473 17.6172 1.75781V18.2422Z"
                fill="#52555F"
              />
              <path
                d="M15.8594 2.34375H4.14062C3.81703 2.34375 3.55469 2.60609 3.55469 2.92969V7.69531C3.55469 8.01891 3.81703 8.28125 4.14062 8.28125H15.8594C16.183 8.28125 16.4453 8.01891 16.4453 7.69531V2.92969C16.4453 2.60609 16.183 2.34375 15.8594 2.34375ZM15.2734 7.10938H4.72656V3.51562H15.2734V7.10938Z"
                fill="#52555F"
              />
              <path
                d="M6.48438 9.45312H4.14062C3.81703 9.45312 3.55469 9.71547 3.55469 10.0391V12.3828C3.55469 12.7064 3.81703 12.9688 4.14062 12.9688H6.48438C6.80797 12.9688 7.07031 12.7064 7.07031 12.3828V10.0391C7.07031 9.71547 6.80797 9.45312 6.48438 9.45312ZM5.89844 11.7969H4.72656V10.625H5.89844V11.7969Z"
                fill="#52555F"
              />
              <path
                d="M6.48438 14.1406H4.14062C3.81703 14.1406 3.55469 14.403 3.55469 14.7266V17.0703C3.55469 17.3939 3.81703 17.6562 4.14062 17.6562H6.48438C6.80797 17.6562 7.07031 17.3939 7.07031 17.0703V14.7266C7.07031 14.403 6.80797 14.1406 6.48438 14.1406ZM5.89844 16.4844H4.72656V15.3125H5.89844V16.4844Z"
                fill="#52555F"
              />
              <path
                d="M11.1719 9.45312H8.82812C8.50453 9.45312 8.24219 9.71547 8.24219 10.0391V12.3828C8.24219 12.7064 8.50453 12.9688 8.82812 12.9688H11.1719C11.4955 12.9688 11.7578 12.7064 11.7578 12.3828V10.0391C11.7578 9.71547 11.4955 9.45312 11.1719 9.45312ZM10.5859 11.7969H9.41406V10.625H10.5859V11.7969Z"
                fill="#52555F"
              />
              <path
                d="M11.1719 14.1406H8.82812C8.50453 14.1406 8.24219 14.403 8.24219 14.7266V17.0703C8.24219 17.3939 8.50453 17.6562 8.82812 17.6562H11.1719C11.4955 17.6562 11.7578 17.3939 11.7578 17.0703V14.7266C11.7578 14.403 11.4955 14.1406 11.1719 14.1406ZM10.5859 16.4844H9.41406V15.3125H10.5859V16.4844Z"
                fill="#52555F"
              />
              <path
                d="M15.8594 9.45312H13.5156C13.192 9.45312 12.9297 9.71547 12.9297 10.0391V17.0703C12.9297 17.3939 13.192 17.6562 13.5156 17.6562H15.8594C16.183 17.6562 16.4453 17.3939 16.4453 17.0703V10.0391C16.4453 9.71547 16.183 9.45312 15.8594 9.45312ZM15.2734 16.4844H14.1016V10.625H15.2734V16.4844Z"
                fill="#52555F"
              />
            </svg>
          </div>
        </label>
      </form>
      <div className="mobile-input-btn-container">
        <MainButton
          type="submit"
          text="Ввод"
          className="main-btn mr-15"
          accent
          onClick={() => onSubmit(data)}
        />
        <MainButton
          type="button"
          text="Очистить"
          className="main-btn gray-bg"
          onClick={onReset}
        />
      </div>
    </div>
  );
}
