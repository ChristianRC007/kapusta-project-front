import React, { useState, useEffect, forwardRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { balanceSelectors } from '../../redux/balance';
import balanceOperations from '../../redux/balance/balance-operations';
import { transactionsActions } from '../../redux/transactions';
import MounthAmountsButton from '../MounthAmountsButton';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';

const Balance = () => {
  const dispatch = useDispatch();

  const initialDate = new Date();

  const currentBalance = useSelector(balanceSelectors.balanceCurrent);
  const balanceLoading = useSelector(balanceSelectors.balanceLoading);

  const [balance, setBalance] = useState('');
  const [tooltipOpen, setTooltipOpen] = useState(true);
  const [date, setDate] = useState(initialDate);

  const loadingMessage = 'loading...';

  useEffect(() => {
    dispatch(balanceOperations.getBalance());
  }, []);

  //updating balance from state
  useEffect(() => {
    setBalance(currentBalance || '');
  }, [currentBalance]);

  const removeTooltip = () => {
    setTooltipOpen(false);
  };

  const handleClick = () => {
    dispatch(balanceOperations.updateBalance(balance));
  };

  const selectDate = date => {
    setDate(date);
    const formatDate = format(new Date(date), 'yyyy-MM-dd');
    dispatch(transactionsActions.setDate(formatDate));
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
    <div className="balance">
      <p className="balance__title">Баланс:</p>
      <div className="balance__buttons">
        <input
          className="balance__input"
          type="text"
          pattern="^[ 0-9]+$"
          placeholder="00.00 UAH"
          value={balanceLoading ? loadingMessage : balance}
          onChange={e => {
            setBalance(e.target.value);
          }}
        />
        <button
          className="balance__submit balance-btn"
          type="button"
          onClick={handleClick}
        >
          Подтвердить
        </button>
      </div>
      <div className="balance__datepicker">
        <DatePicker
          locale={ru}
          selected={date}
          onChange={date => selectDate(date)}
          dateFormat="dd.MM.yyyy"
          todayButton="Сегодня"
          customInput={<CustomInput />}
        />
      </div>
      <MounthAmountsButton />

      {!balance && !balanceLoading && tooltipOpen && (
        <div className="balance__tooltip" onClick={removeTooltip}>
          <p className="balance__tooltip__text-first">
            Привет! Для начала работы внеси текущий баланс своего счета!
          </p>
          <p className="balance__tooltip__text-second">
            Ты не можешь тратить деньги пока их у тебя нет :){' '}
          </p>
        </div>
      )}
    </div>
  );
};

export default Balance;
