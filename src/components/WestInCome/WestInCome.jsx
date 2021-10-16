import ButtonChangeCategories from './ButtonChangeCategories';
import West from './West';
import InCome from './InCome';
import { useSelector } from 'react-redux';
import { reportsSelectors } from '../../redux/reports';
import Loader from 'react-js-loader';

const WestInCome = ({ data }) => {
  const costs = useSelector(reportsSelectors.getCosts);
  const IsLoading = useSelector(reportsSelectors.getIsLoading);

  return (
    <div className="westInCome_container">
      {IsLoading ? (
        <Loader
          type="spinner-circle"
          bgColor={'#ff751d'}
          color={'#ff751d'}
          size={60}
        />
      ) : (
        <>
          <ButtonChangeCategories />
          {!costs ? <InCome data={data} /> : <West data={data} />}
        </>
      )}
    </div>
  );
};
export default WestInCome;
