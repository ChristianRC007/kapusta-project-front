import React, { useState, useEffect, forwardRef } from 'react';
import Select from 'react-select';
import MainButton from '../MainButton';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';
import { useDispatch } from 'react-redux';
import {
  transactionsOperations,
  transactionsActions,
} from '../../redux/transactions';

import 'react-datepicker/dist/react-datepicker.css';

export default function InputContainer({ options, profit, onSubmit }) {
  const dispatch = useDispatch();
  const initialDate = new Date();
  const [productName, setProductName] = useState('');
  const [payValue, setPayValue] = useState('');
  const [category, setCategory] = useState([]);
  const [date, setDate] = useState(initialDate);

  useEffect(() => {
    if (!profit) {
      const formatDate = format(new Date(date), 'yyyy-MM-dd');
      dispatch(transactionsOperations.getExpenseByDate(formatDate));
    }
    if (profit) {
      const formatDate = format(new Date(date), 'yyyy-MM-dd');
      dispatch(transactionsOperations.getIncomeByDate(formatDate));
    }
  }, [dispatch, date, profit]);

  useEffect(() => {
    resetData();
  }, [profit]);

  const resetData = () => {
    setProductName('');
    setPayValue('');
    setCategory([]);
  };

  const resetInput = () => {
    setProductName('');
    setPayValue('');
    setCategory([]);
  };

  const selectDate = date => {
    setDate(date);
    const formatDate = format(new Date(date), 'yyyy-MM-dd');
    dispatch(transactionsActions.setDate(formatDate));
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
      cursor: 'pointer',
    }),
    control: () => ({
      display: 'flex',
      width: 188,
      paddingTop: 1,
      paddingBottom: 2,
      border: '2px solid #f5f6fb',
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: 'none',
    }),
    menuList: (provided, state) => ({
      ...provided,
      overflow: 'inherit',
    }),
    container: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
    }),
    menu: (provided, state) => ({
      ...provided,
      top: 34,
      height: profit ? 70 : 340,
      borderRadius: 'none',
      boxShadow: '0px 3px 4px rgba(170, 178, 197, 0.4)',
      border: '2px solid #f5f6fb',
    }),
  };

  const data = {
    date: format(new Date(date), 'yyyy-MM-dd'),
    category: category.label,
    description: productName,
    amount: payValue.includes(',') ? +payValue.replace(/,/g, '.') : +payValue,
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="datepicker-button" onClick={onClick} ref={ref}>
      <div className="wrapper">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.4754 2.06715H16.1634V1.74609C16.1634 1.4225 15.9011 1.16016 15.5775 1.16016C15.2539 1.16016 14.9916 1.4225 14.9916 1.74609V2.06715H13.3747V1.74609C13.3747 1.4225 13.1123 1.16016 12.7887 1.16016C12.4652 1.16016 12.2028 1.4225 12.2028 1.74609V2.06715H10.5859V1.74609C10.5859 1.4225 10.3236 1.16016 10 1.16016C9.67641 1.16016 9.41406 1.4225 9.41406 1.74609V2.06715H7.79719V1.74609C7.79719 1.4225 7.53484 1.16016 7.21125 1.16016C6.88766 1.16016 6.62531 1.4225 6.62531 1.74609V2.06715H5.00844V1.74609C5.00844 1.4225 4.74609 1.16016 4.4225 1.16016C4.09891 1.16016 3.83656 1.4225 3.83656 1.74609V2.06715H2.52461C1.13254 2.06715 0 3.19969 0 4.59172V16.3157C0 17.7078 1.13254 18.8403 2.52461 18.8403H17.4754C18.8675 18.8403 20 17.7078 20 16.3157V4.59172C20 3.19969 18.8675 2.06715 17.4754 2.06715ZM18.8281 16.3157C18.8281 17.0616 18.2213 17.6684 17.4754 17.6684H2.52461C1.77871 17.6684 1.17188 17.0616 1.17188 16.3157V6.73258H18.8281V16.3157ZM18.8281 5.5607H1.17188V4.59172C1.17188 3.84586 1.77871 3.23902 2.52461 3.23902H3.83656V3.46555C3.83656 3.78914 4.09891 4.05148 4.4225 4.05148C4.74609 4.05148 5.00844 3.78914 5.00844 3.46555V3.23902H6.62531V3.46555C6.62531 3.78914 6.88766 4.05148 7.21125 4.05148C7.53484 4.05148 7.79719 3.78914 7.79719 3.46555V3.23902H9.41406V3.46555C9.41406 3.78914 9.67641 4.05148 10 4.05148C10.3236 4.05148 10.5859 3.78914 10.5859 3.46555V3.23902H12.2028V3.46555C12.2028 3.78914 12.4652 4.05148 12.7887 4.05148C13.1123 4.05148 13.3747 3.78914 13.3747 3.46555V3.23902H14.9916V3.46555C14.9916 3.78914 15.2539 4.05148 15.5775 4.05148C15.9011 4.05148 16.1634 3.78914 16.1634 3.46555V3.23902H17.4754C18.2213 3.23902 18.8281 3.84586 18.8281 4.59172V5.5607Z"
            fill="#52555F"
          />
          <path
            d="M6.5318 7.98145H4.21973C3.89613 7.98145 3.63379 8.24379 3.63379 8.56738V10.9595C3.63379 11.2831 3.89613 11.5455 4.21973 11.5455H6.5318C6.85539 11.5455 7.11773 11.2831 7.11773 10.9595V8.56738C7.11773 8.24379 6.85543 7.98145 6.5318 7.98145ZM5.94586 10.3736H4.80566V9.15332H5.94586V10.3736Z"
            fill="#52555F"
          />
          <path
            d="M11.1561 7.98145H8.84399C8.5204 7.98145 8.25806 8.24379 8.25806 8.56738V10.9595C8.25806 11.2831 8.5204 11.5455 8.84399 11.5455H11.1561C11.4797 11.5455 11.742 11.2831 11.742 10.9595V8.56738C11.742 8.24379 11.4797 7.98145 11.1561 7.98145ZM10.5701 10.3736H9.42993V9.15332H10.5701V10.3736Z"
            fill="#52555F"
          />
          <path
            d="M15.7802 7.98145H13.4681C13.1445 7.98145 12.8822 8.24379 12.8822 8.56738V10.9595C12.8822 11.2831 13.1445 11.5455 13.4681 11.5455H15.7802C16.1038 11.5455 16.3661 11.2831 16.3661 10.9595V8.56738C16.3661 8.24379 16.1038 7.98145 15.7802 7.98145ZM15.1943 10.3736H14.0541V9.15332H15.1943V10.3736Z"
            fill="#52555F"
          />
          <path
            d="M6.5318 12.5259H4.21973C3.89613 12.5259 3.63379 12.7882 3.63379 13.1118V15.504C3.63379 15.8276 3.89613 16.0899 4.21973 16.0899H6.5318C6.85539 16.0899 7.11773 15.8276 7.11773 15.504V13.1118C7.11773 12.7882 6.85543 12.5259 6.5318 12.5259ZM5.94586 14.9181H4.80566V13.6978H5.94586V14.9181Z"
            fill="#52555F"
          />
          <path
            d="M11.1561 12.5259H8.84399C8.5204 12.5259 8.25806 12.7882 8.25806 13.1118V15.504C8.25806 15.8276 8.5204 16.0899 8.84399 16.0899H11.1561C11.4797 16.0899 11.742 15.8276 11.742 15.504V13.1118C11.742 12.7882 11.4797 12.5259 11.1561 12.5259ZM10.5701 14.9181H9.42993V13.6978H10.5701V14.9181Z"
            fill="#52555F"
          />
          <path
            d="M15.7802 12.5259H13.4681C13.1445 12.5259 12.8822 12.7882 12.8822 13.1118V15.504C12.8822 15.8276 13.1445 16.0899 13.4681 16.0899H15.7802C16.1038 16.0899 16.3661 15.8276 16.3661 15.504V13.1118C16.3661 12.7882 16.1038 12.5259 15.7802 12.5259ZM15.1943 14.9181H14.0541V13.6978H15.1943V14.9181Z"
            fill="#52555F"
          />
        </svg>
        {value}
      </div>
    </button>
  ));

  return (
    <div className="input-container">
      <div className="inner-container">
        <DatePicker
          locale={ru}
          selected={date}
          onChange={date => selectDate(date)}
          dateFormat="dd.MM.yyyy"
          todayButton="??????????????"
          customInput={<CustomInput />}
        />
        <form className="form-input">
          <input
            className="input-productName"
            placeholder="???????????????? ????????????"
            name="name"
            type="text"
            value={productName}
            onChange={e => setProductName(e.target.value)}
            required
          />

          <Select
            name="category"
            styles={customStyles}
            placeholder="?????????????????? ????????????"
            options={options}
            value={category}
            onChange={setCategory}
            isSearchable={false}
          />
          <label className="input-productValue-label">
            <input
              className="input-productValue"
              placeholder="00,0"
              name="value"
              type="text"
              value={payValue}
              onChange={e => setPayValue(e.target.value)}
              autoComplete="off"
            />

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
          </label>
        </form>
      </div>
      <div>
        <MainButton
          type="submit"
          text="????????"
          className="main-btn mr-15"
          onClick={() => {
            onSubmit(data);
            resetData();
          }}
          accent
        />
        <MainButton
          type="button"
          text="????????????????"
          className="main-btn"
          onClick={resetInput}
        />
      </div>
    </div>
  );
}
