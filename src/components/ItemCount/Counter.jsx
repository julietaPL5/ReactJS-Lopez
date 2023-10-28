import plus from '../../assets/icons/plus.svg'
import dash from '../../assets/icons/dash.svg'


const Counter = ({number, restar, sumar, addCart}) => {



    return (
        <div className="itemCounter">
            <div className="counter">
                <img src={dash} alt="dash" onClick={restar} />
                <h3 className="number">{number}</h3>
                <img src={plus} alt="plus" onClick={sumar} />
            </div>
            <div className="addCart">
                <button className="btnAddCart" onClick={addCart}>Agregar al carrito</button>    
            </div>
        </div>
    )
};

export default Counter