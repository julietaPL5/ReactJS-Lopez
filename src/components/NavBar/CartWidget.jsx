import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/Cartcontext';
import cartFill from '../../assets/icons/cartFill.svg';


const CartWidget = (props) => {

    const styleCartWidget = {
        height: "30px",
        width: "30px",
        cursor: "pointer",
    }
    const styleSpan = {
        backgroundColor: "#dccfeb",
        color: "#000",
        textDecoration: "none",
        height: "25px",
        width:"25px",
        borderRadius: "8px",
        textAlign: "center",
    }
    const styleCartContainer = {
        textDecoration: "none",
        display: "flex",
        alignItems: "center"
    }

    const {quantityCart} = useContext(CartContext);

    return (
        <div style={props.style}>
            <Link style={styleCartContainer} to="/cart">
                <img src={cartFill} alt="cart" style={styleCartWidget} />
                <span style={styleSpan}>{quantityCart()}</span>
            </Link>
        </div>   
    )
}

export default CartWidget