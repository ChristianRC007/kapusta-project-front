import sprite from '../../assets/img/sprite_categories.svg';
import st from './ReportsList.module.scss';
import { useSelector } from 'react-redux';
import { reportsSelectors } from '../../redux/reports';
import Loader from 'react-js-loader';

const ReportsList = ({ transactions, onClick }) => {
  const IsLoading = useSelector(reportsSelectors.getIsLoading);
  return (
    <>
      {IsLoading ? (
        <Loader
          type="spinner-circle"
          bgColor={'#ff751d'}
          color={'#ff751d'}
          size={60}
        />
      ) : (
        <ul className={st.list}>
          {transactions?.length === 0 ? (
            <li className={st.noData}>В этом месяце небыло транзакций</li>
          ) : (
            transactions?.map(obj => (
              <li
                key={obj._id}
                className={st.item}
                onClick={() => onClick(obj._id, transactions)}
              >
                <p className={st.text}>{obj.total}</p>
                <div className={obj.isActive ? st.svg_boxActive : st.svg_box}>
                  <svg
                    width="58"
                    height="58"
                    className={obj.isActive ? st.iconActive : st.icon}
                  >
                    <use xlinkHref={`${sprite}#icon-${obj._id}`} />
                  </svg>
                </div>
                <h3 className={st.title}>{obj._id}</h3>
              </li>
            ))
          )}
        </ul>
      )}
    </>
  );
};

export default ReportsList;
