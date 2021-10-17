import sprite from '../../assets/img/sprite_categories.svg';
import st from './ReportsList.module.scss';

const ReportsList = ({ transactions, onClick }) => {
  return (
    <div className={st.wrapper}>
      <ul className={st.list}>
        {transactions?.length === 0 ? (
          <h3 className={st.title_message}>Вы очень экономный.</h3>
        ) : (
          transactions?.map(obj => (
            <li key={obj._id} className={st.item}>
              <p className={st.text}>{obj.total}</p>
              <div className={obj.isActive ? st.svg_boxActive : st.svg_box}>
                <svg
                  width="58"
                  height="58"
                  className={obj.isActive ? st.iconActive : st.icon}
                  onClick={() => onClick(obj._id, transactions)}
                >
                  <use xlinkHref={`${sprite}#icon-${obj._id}`} />
                </svg>
              </div>
              <h3 className={st.title}>{obj._id}</h3>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ReportsList;
