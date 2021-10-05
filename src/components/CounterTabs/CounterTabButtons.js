import { useState } from 'react';

import Costs from './Costs';
import Profits from './Profits';


const CounterTabButtons = () => {
    const [state, setState] = useState(true)

    const clickCosts = () => {
        setState(state => true);
        const costs = document.querySelector("#costs")
        const profits = document.querySelector("#profits")
        costs.classList.add("counter-tab-active");
        profits.classList.remove("counter-tab-active");
    }

    const clickProfits = () => {
        setState(state => false);
        const costs = document.querySelector("#costs")
        const profits = document.querySelector("#profits")
        profits.classList.add("counter-tab-active");
        costs.classList.remove("counter-tab-active");
    }

    return (
        <>
            <button id='costs' className='counter-tab-header-buttons counter-tab-costs counter-tab-header-container counter-tab-active' type='button' onClick={clickCosts}>Расход</button>
            <button id='profits' className='counter-tab-header-buttons counter-tab-profits counter-tab-header-container' type='button' onClick={clickProfits}>Доход</button>
            {state ? <Costs /> : <Profits/>}    
    </>
    );
}

export default CounterTabButtons;
