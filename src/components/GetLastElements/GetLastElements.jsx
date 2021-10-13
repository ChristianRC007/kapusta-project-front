import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  transactionsSelectors,
  transactionsOperations,
} from '../../redux/transactions';
import GetLastElementLi from './GetLastElementLi';

export default function GetLastElements() {
  const transactions = useSelector(transactionsSelectors.getLast);
  const isLoading = useSelector(transactionsSelectors.getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transactionsOperations.getLast());
  }, [dispatch]);

  return (
    <ul className="getlast-ul">
      {/* {console.log(transactions)} */}
      {isLoading ? (
        <li>Loaging...</li>
      ) : (
        transactions.length > 0 && (
          <GetLastElementLi transactions={transactions} />
        )
      )}
    </ul>
  );
}
