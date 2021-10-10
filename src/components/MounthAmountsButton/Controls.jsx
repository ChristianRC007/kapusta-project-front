import React from 'react';

const Controls = ({ value, step, onIncrement, onDecrement }) => {
    let template;

const mounthArr = [
        "Январь",
        "Февраль",
        "Март", 
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
    "Декабрь"]
    
    const date = new Date()
    const currentYear = date.getFullYear()
      
    if (value >= 12) {
         let currenMount = mounthArr[value%12]
        template = `${currenMount} ${currentYear+1}`
    } else if (value <= 0) {
    console.log(-value%12)
          let currenMount = mounthArr[-value%12]
          template = `${currenMount} ${currentYear-1}`
    } else {
            let currenMount = mounthArr[value]
       template = `${currenMount} ${currentYear}` 
    }
  


    return ((
        <div >
            <div className='currentmb__container'>
                <p className='currentmb__title'>Текущий период:</p>
                <div className="currentmb__buttons">
                <button className='currentmb__btn' onClick={onDecrement}>
                    <svg width="7" height="12" viewBox="4 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 1L6 6L10 11" stroke="#FF751D" strokeWidth="2"/>
                    </svg>
                </button>
                    <p className='currentmb__mounth'>{template}</p>
                <button className='currentmb__btn' onClick={onIncrement}>
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 6L1 11" stroke="#FF751D" strokeWidth="2"/>
                    </svg>
                </button>
                </div>
               </div>
        </div>
    ))
}

export default Controls;