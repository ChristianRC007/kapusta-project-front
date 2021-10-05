import '../../styles/components/_MainButton.scss';

const MainButton = ({ type, clickHandler = null, text, className, accent }) => (
  <button
    className={accent ? className + ' accent' : className}
    type={type}
    onClick={clickHandler}
  >
    {text}
  </button>
);

export default MainButton;

// =================== EXAMPLE ===============================

//  <MainButton text="button test" className="register" | "main" | "balance" clickHandler={sum handler} accent />
