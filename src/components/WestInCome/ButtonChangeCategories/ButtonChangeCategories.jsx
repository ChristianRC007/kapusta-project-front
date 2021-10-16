import React from 'react';
import { reportsSelectors, reportsOperations } from '../../../redux/reports';
import { useDispatch, useSelector } from 'react-redux';
const ButtonChangeCategories = () => {
  const Costs = useSelector(reportsSelectors.getCosts);
  const dispatch = useDispatch();

  const onClick = () => {
    if (Costs) {
      dispatch(reportsOperations.getCostsFalse());
    }
    if (!Costs) {
      dispatch(reportsOperations.getCostsTrue());
    }
  };

  console.log(Costs);
  return (
    <div className="westInCome__container_buttons">
      <button className="westInCome__button" onClick={onClick}>
        <svg
          width="7"
          height="12"
          viewBox="4 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 1L6 6L10 11" strokeWidth="2" />
        </svg>
      </button>

      {!Costs ? (
        <p className="westInCome__text_categories">Доходы</p>
      ) : (
        <p className="westInCome__text_categories">Paсходы</p>
      )}

      <button className="westInCome__button" onClick={onClick}>
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L5 6L1 11" strokeWidth="2" />
        </svg>
      </button>
    </div>
  );
};
export default ButtonChangeCategories;
