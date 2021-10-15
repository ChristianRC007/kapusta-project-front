import Alcohol from './WestCategories/Alcohol';
import Communication from './WestCategories/Communication';
import Education from './WestCategories/Education';
import Entertainment from './WestCategories/Entertainment';
import Health from './WestCategories/Health';
import Products from './WestCategories/Products';
import Technique from './WestCategories/Technique';
import Transport from './WestCategories/Transport';
import Other from './WestCategories/Other';
import Housing from './WestCategories/Housing';
import Sport from './WestCategories/Sport';

// const data= [
//         {
//             "_id": "Total",
//             "dataByGroup": [
//                 {
//                     "_id": "Продукты",
//                     "descriptions": [
//                         {
//                             "description": "Фрукты",
//                             "total": 100
//                         }
//                     ],
//                     "total": 100
//                 },
//                   {
//                     "_id": "Техника",
//                     "descriptions": [
//                         {
//                             "description": "Фрукты",
//                             "total": 100
//                         }
//                     ],
//                     "total": 100
//                 },
//                 {
//                     "_id": "Aлкоголь",
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

const West = ({ data }) => {
  //   const dataWest = data[0].dataByGroup;
  const dataWest = data;
  const arrCategory = [];
  let category = '';
  let categoryPrice = 0;
  console.log(dataWest);

  function foundCatagorie() {
    for (let i = 0; i < dataWest.length; i++) {
      category = dataWest[i]._id;
      categoryPrice = dataWest[i].total;

      arrCategory.push([category, categoryPrice]);
    }
    //[['Продукты',1000],['Развлечение',550]....[..]]
  }
  foundCatagorie();
  function foundMoney(name) {
    let arr = arrCategory.find(e => e.includes(name));
    return arr[1];
    //['Продукты',122]
  }
  function isRender(name) {
    return arrCategory.some(e => e.includes(name));
    //true
  }

  return (
    <>
      <ul className="westInCome_list">
        {isRender('Продукты') ? (
          <Products price={foundMoney('Продукты')} />
        ) : (
          ''
        )}
        {isRender('Развлечения') ? (
          <Entertainment price={foundMoney('Развлечения')} />
        ) : (
          ''
        )}
        {isRender('Aлкоголь') ? <Alcohol price={foundMoney('Aлкоголь')} /> : ''}
        {isRender('Здоровье') ? <Health price={foundMoney('Здоровье')} /> : ''}
        {isRender('Транспорт') ? (
          <Transport price={foundMoney('Транспорт')} />
        ) : (
          ''
        )}
        {isRender('Техника') ? <Technique price={foundMoney('Техника')} /> : ''}
        {isRender('Коммуналка') ? (
          <Communication price={foundMoney('Коммуналка')} />
        ) : (
          ''
        )}
        {isRender('Все для дома') ? (
          <Housing price={foundMoney('Все для дома')} />
        ) : (
          ''
        )}
        {isRender('Спорт') ? <Sport price={foundMoney('Спорт')} /> : ''}
        {isRender('Образование') ? (
          <Education price={foundMoney('Образование')} />
        ) : (
          ''
        )}
        {isRender('Прочее') ? <Other price={foundMoney('Прочее')} /> : ''}
      </ul>
    </>
  );
};
export default West;
