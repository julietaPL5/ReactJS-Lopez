import { useContext, useState } from "react";
import Counter from "../ItemCount/Counter";
import { CartContext } from "../Context/Cartcontext";


const ItemDetail = ({item}) => {

    const {cart, addCart} = useContext(CartContext);
    console.log(cart)
    
    const [number, setNumber] = useState(1);

    const restar = () => {
        number > 1 && setNumber(number - 1);
    }

    const sumar = () => {
        number < item.stock && setNumber(number + 1);
    }


    return (
        <div className="itemDetail">
            <img src={item.img} alt={item.name} />
            <div className="name-counterContainer">
                <div className="itemNameContainer">
                    <h2>{item.name}</h2>
                    <p>${item.price}</p>
                </div>
                <div className="itemCounterContainer">
                    <Counter number={number} restar={restar} sumar={sumar} addCart={() => {addCart(item, number)}} /> 
                </div>    
            </div>
            
        </div>
    )
};

export default ItemDetail;