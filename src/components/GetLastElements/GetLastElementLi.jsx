import React from 'react';
import { format } from 'date-fns';

export default function GetLastElementLi({
  onDelete,
  transaction: { _id, amount, category, description, date, isIncome },
}) {
  const formatDate = format(new Date(date), 'dd.MM.yyyy');
  return (
    <li key={_id} className="getlast-li">
      <p className="getlast-li-name">{description}</p>
      <p className="getlast-li-date">{formatDate}</p>
      <p className="getlast-li-category">{category}</p>
      {isIncome ? (
        <p className={' getlast-li-price'}>{amount} грн</p>
      ) : (
        <p className={'getlast-li-price getlast-li-red'}>-{amount} грн</p>
      )}
      <button className="getlast-li-btn" onClick={() => onDelete(_id)}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.3081 4.02333L15.9107 2.832C15.7594 2.37827 15.3362 2.07339 14.8581 2.07339H11.5178V0.985886C11.5178 0.442337 11.0759 0 10.5325 0H7.47361C6.93033 0 6.48827 0.442337 6.48827 0.985886V2.07339H3.14815C2.66983 2.07339 2.24672 2.37827 2.09539 2.832L1.69796 4.02333C1.60746 4.29456 1.65332 4.59489 1.82045 4.82684C1.98758 5.05879 2.25798 5.19736 2.5439 5.19736H2.95932L3.87366 16.5038C3.94164 17.3427 4.65355 18 5.49469 18H12.6969C13.5379 18 14.25 17.3427 14.3178 16.5037L15.2322 5.19736H15.4622C15.7481 5.19736 16.0185 5.05879 16.1856 4.82698C16.3528 4.59503 16.3986 4.29456 16.3081 4.02333ZM7.54296 1.05469H10.4631V2.07339H7.54296V1.05469ZM13.2666 16.4187C13.2427 16.7141 12.9925 16.9453 12.6969 16.9453H5.49469C5.19916 16.9453 4.94895 16.7141 4.92505 16.4187L4.01744 5.19736H14.174L13.2666 16.4187ZM2.77008 4.14267L3.09597 3.16571C3.10338 3.14319 3.12439 3.12808 3.14815 3.12808H14.8581C14.8818 3.12808 14.9027 3.14319 14.9103 3.16571L15.2361 4.14267H2.77008Z"
            fill="#52555F"
          />
          <path
            d="M11.5846 16.3813C11.594 16.3819 11.6032 16.382 11.6125 16.382C11.8912 16.382 12.1241 16.1637 12.1386 15.8821L12.6338 6.37593C12.6489 6.08507 12.4254 5.83691 12.1346 5.82181C11.8431 5.80629 11.5958 6.03013 11.5805 6.321L11.0854 15.8272C11.0703 16.1181 11.2938 16.3662 11.5846 16.3813Z"
            fill="#52555F"
          />
          <path
            d="M5.89092 15.8833C5.90631 16.1644 6.13894 16.3819 6.41703 16.3819C6.42664 16.3819 6.43653 16.3816 6.44628 16.3811C6.73701 16.3653 6.95989 16.1167 6.9441 15.8259L6.42541 6.31967C6.40961 6.0288 6.16105 5.80592 5.87019 5.82185C5.57946 5.83764 5.35658 6.08621 5.37237 6.37707L5.89092 15.8833Z"
            fill="#52555F"
          />
          <path
            d="M9.00879 16.3819C9.30006 16.3819 9.53613 16.1459 9.53613 15.8546V6.34839C9.53613 6.05711 9.30006 5.82104 9.00879 5.82104C8.71751 5.82104 8.48145 6.05711 8.48145 6.34839V15.8546C8.48145 16.1459 8.71751 16.3819 9.00879 16.3819Z"
            fill="#52555F"
          />
        </svg>
      </button>
    </li>
  );
}