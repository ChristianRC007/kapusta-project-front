import React from 'react';

const Controls = ({ dataArr, onIncrement, onDecrement }) => {
   
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
                    <p className='currentmb__mounth'>{dataArr[0]} {dataArr[1]}</p>
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