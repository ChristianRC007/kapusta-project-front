import st from './MainButton.module.scss';

const MainButton = ({ type, clickHandler = null, text, name }) => {
  let currentClassName = '';
  // eslint-disable-next-line default-case
  switch (name) {
    case 'register':
      currentClassName = st.register;
      break;

    case 'main':
      currentClassName = st.main;
      break;

    case 'balance':
      currentClassName = st.balance;
      break;
  }

  return (
    <button className={currentClassName} type={type} onClick={clickHandler}>
      {text}
    </button>
  );
};

export default MainButton;
