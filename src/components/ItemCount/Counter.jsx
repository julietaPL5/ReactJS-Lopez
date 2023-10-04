import { useState } from "react";
import plus from '../../assets/icons/plus.svg'
import dash from '../../assets/icons/dash.svg'


const Counter = () => {

    const [number, setNumber] = useState(0);

    const restar = () => {
        setNumber(number - 1);
    }

    const sumar = () => {
        setNumber(number + 1);
    }

    return (
        <div className="counter">
            <img src={dash} alt="dash" onClick={restar} />
            <h3 className="number">{number}</h3>
            <img src={plus} alt="plus" onClick={sumar} />
        </div>
    )
};

export default Counter