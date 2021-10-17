import Alcohol from './WestCategories/Alcohol';
import Communication from './WestCategories/Communication';
import Education from './WestCategories/Education';
import Entertainment from './WestCategories/Entertainment';
import Health from './WestCategories/Health';
// import Products from './WestCategories/Products';
import Products from './WestCategories/Products copy';
import Technique from './WestCategories/Technique';
import Transport from './WestCategories/Transport';
import Other from './WestCategories/Other';
import Housing from './WestCategories/Housing';
import Sport from './WestCategories/Sport';
import { useMediaQuery } from '../../hooks/useMediaQuery';

import { Component } from 'react';

class West extends Component {
  state = {
  dataWest: this.props.data,
  arrCategory: [],
  category: '',
  categoryPrice: 0,
  activeOptionIdx:0
  }

   setActiveIdx = index => {
     this.setState({ activeOptionIdx: index });
     console.log(index);
  };

   makeOptionClassName = index => {
    const optionClasses = ['westInCome_item'];

    if (index === this.state.activeOptionIdx) {
      optionClasses.push('westInCome_item--active');
    }

    return optionClasses.join(' ');
  };

  foundCatagorie() {
    const {dataWest, category, categoryPrice, arrCategory} = this.state
    for (let i = 0; i < dataWest.length; i++) {
      // console.log(dataWest);
      this.setState.category = dataWest[i]._id;
       this.setState.categoryPrice = dataWest[i].total;
      arrCategory.push([category, categoryPrice]);
      console.log(arrCategory);
    }
  }

  // console.log(this.props.data);
  // foundCatagorie();

  isRender(name) {
    this.foundCatagorie();
    // console.log(this.foundCatagorie());
    // console.log(this.state.arrCategory.some(e => e.includes(name)));
    return this.state.arrCategory.some(e => e.includes(name))
  }
  
  foundMoney(name) {
    this.foundCatagorie();
   const {arrCategory} = this.state
    let arr = arrCategory.find(e => e.includes(name));
    console.log(arr);
    return arr[1];
  }
  
  render() {
        console.log(this.props.data)
    return (
      <>
        <ul className="westInCome_list">
      
          {this.props.data.map(({ _id, total }, index) => (

            <div
              key={_id}
              className={this.makeOptionClassName(index)}
              onClick={() => this.setActiveIdx(index)}>
              
              <Products
                price={total}
                _id = {_id}
                // price={this.foundMoney('Продукты')}
              />
            </div> 
          ))}

          {/* {this.isRender('Продукты') ? (
          <Products price={this.foundMoney('Продукты')} />
        ) : (
          ''
        )}
   
        {this.isRender('Продукты') ? (
          <Products price={this.foundMoney('Продукты')} />
        ) : (
          ''
        )}
        {this.isRender('Развлечения') ? (
          <Entertainment price={this.foundMoney('Развлечения')} />
        ) : (
          ''
        )}
        {this.isRender('Aлкоголь') ? <Alcohol price={this.foundMoney('Aлкоголь')} /> : ''}
        {this.isRender('Здоровье') ? <Health price={this.foundMoney('Здоровье')} /> : ''}
        {this.isRender('Транспорт') ? (
          <Transport price={this.foundMoney('Транспорт')} />
        ) : (
          ''
        )}
        {this.isRender('Техника') ? <Technique price={this.foundMoney('Техника')} /> : ''}
        {this.isRender('Коммуналка') ? (
          <Communication price={this.foundMoney('Коммуналка')} />
        ) : (
          ''
        )}
        {this.isRender('Всё для дома') ? (
          <Housing price={this.foundMoney('Всё для дома')} />
        ) : (
          ''
        )}
        {this.isRender('Спорт') ? <Sport price={this.foundMoney('Спорт')} /> : ''}
        {this.isRender('Образование') ? (
          <Education price={this.foundMoney('Образование')} />
        ) : (
          ''
        )}
        {this.isRender('Прочее') ? <Other price={this.foundMoney('Прочее')} /> : ''} */}
      </ul>
    </>
  );
  
  }
}
const Westt = ({ data }) => {
  const dataWest = data;
  const arrCategory = [];
  let category = '';
  let categoryPrice = 0;
  console.log(data);

  const isMobileWide = useMediaQuery('(max-width: 767px)');

  function foundCatagorie() {
    for (let i = 0; i < dataWest.length; i++) {
      category = dataWest[i]._id;
      categoryPrice = dataWest[i].total;
      arrCategory.push([category, categoryPrice]);
    }
  }

  foundCatagorie();

  // function foundMoney(name) {
  //   let arr = arrCategory.find(e => e.includes(name));
  //   return arr[1];
  //   //['Продукты',122]
  // }
  // function isRender(name) {
  //   return arrCategory.some(e => e.includes(name));
  //   //true
  // }
};
export default West;
