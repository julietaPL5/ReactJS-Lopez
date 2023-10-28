import { useContext } from "react"
import { CartContext } from "../components/Context/Cartcontext"
import { Link } from "react-router-dom"


const Cart = () => {

    const {cart, totalPrice} = useContext(CartContext)

    return(
        <div className="cart">
            <div className="cartContainer">

            <h2>MI CARRITO</h2>

            {
                cart.map((prod) => (
                    <div key={prod.id} className="itemContainer">
                        <img src={prod.img} alt={prod.name} />
                        <div className="item">
                            <h2>{prod.name}</h2>
                            <p>Precio unidad: ${prod.price},00</p>
                            <p>Cantidad: {prod.number}</p>
                            <p>Precio total: $ {prod.price * prod.number},00</p>
                        </div>
                    </div>
                ))
            }

            {
                cart.length > 0 ?
                <>
                    <h3>Total de compra: ${totalPrice()},00</h3>
                    <Link to="/checkout" className="linkCheckout">Finalizar compra</Link>
                </>
                :
                <h2>El carrito esta vacio</h2>
            }

            </div>
        </div>
    )
}


export default Cart