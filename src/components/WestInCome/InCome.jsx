import Benefits from './InComeCategories/Benefits';
import Salary from './InComeCategories/Salary';
// const data= [
//         {
//             "_id": "Total",
//             "dataByGroup": [
//                 {
//                     "_id": "ЗП",
//                     "descriptions": [
//                         {
//                             "description": "Фрукты",
//                             "total": 100
//                         }
//                     ],
//                     "total": 1200
//                 },
//                   {
//                     "_id": "Доп. доходы",
//                     "descriptions": [
//                         {
//                             "description": "Фрукты",
//                             "total": 100
//                         }
//                     ],
//                     "total": 100
//                 },
//                 {
//                     "_id": "Развлечения",
//                     "descriptions": [
//                         {
//                             "description": "Печеньки",
//                             "total": 100
//                         },
//                         {
//                             "description": "Яхта",
//                             "total": 3600
//                         }
//                     ],
//                     "total": 3700
//                 }
//             ],
//             "monthTotal": 3800
//         }
// ]

const InCome = ({ data }) => {
  const dataWest = data;
  const arrCategory = [];
  let category = '';
  let categoryPrice = 0;

  function foundCatagorie() {
    for (let i = 0; i < dataWest.length; i++) {
      category = dataWest[i]._id;
      categoryPrice = dataWest[i].total;

      arrCategory.push([category, categoryPrice]);
    }
  }
  foundCatagorie();
  function foundMoney(name) {
    let arr = arrCategory.find(e => e.includes(name));
    return arr[1];
  }
  function isRender(name) {
    return arrCategory.some(e => e.includes(name));
  }
  return (
    <>
      <ul className="westInCome_list">
        {isRender('ЗП') ? <Salary price={foundMoney('ЗП')} /> : ''}
        {isRender('Доп. доходы') ? (
          <Benefits price={foundMoney('Доп. доходы')} />
        ) : (
          ''
        )}
      </ul>
    </>
  );
};
export default InCome;
