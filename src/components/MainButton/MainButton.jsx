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

