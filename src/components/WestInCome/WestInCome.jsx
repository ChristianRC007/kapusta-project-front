import ButtonChangeCategories from './ButtonChangeCategories';
import West from './West';
import InCome from './InCome';
import { useSelector } from 'react-redux';
import { reportsSelectors } from '../../redux/reports';

const WestInCome = ({ data }) => {
  const Costs = useSelector(reportsSelectors.getCosts);
  return (
    <div className="westInCome_container">
      <ButtonChangeCategories />
      {!Costs ? <InCome data={data} /> : <West data={data} />}
    </div>
  );
};
export default WestInCome;
