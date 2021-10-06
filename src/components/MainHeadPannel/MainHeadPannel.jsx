import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';

export default function MainHeadPannel() {
  const history = useHistory();

  function handleClick() {
    history.goBack();
  }
  return (
    <div>
      <button type="button" onClick={handleClick}>
        Вернуться на главную
      </button>
      <NavLink exact to="/report">
        Перейти к отчетам
      </NavLink>
    </div>
  );
}
