import ButtonChangeCategories from './ButtonChangeCategories';
import West from './West';
import InCome from './InCome';
let isClickChangeCategory = true;

const WestInCome = ({ data }) => {
  return (
    <div className="westInCome_container">
      <ButtonChangeCategories />
      {!isClickChangeCategory ? <InCome data={data} /> : <West data={data} />}
    </div>
  );
};
export default WestInCome;
