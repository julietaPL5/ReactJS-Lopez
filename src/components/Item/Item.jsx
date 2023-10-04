
import { Link } from "react-router-dom";
import Counter from "../ItemCount/Counter";



const Item = ({product}) => {
    const styleLink = {
        color: "#000",
        textDecoration: "none"
    }

    return (
        <div className="card">
            <img src={product.img} alt={product.name} className="img" />
            <h2 className="name">{product.name}</h2>
            <p className="price">${product.price}</p>
            <p className="category">{product.category}</p>
            <Counter /> 
            <button className="btnAddCart">Agregar al carrito</button>
            <button className="detailItem"><Link to={`/item/${product.id}`} style={styleLink}>Ver mas</Link></button>
        </div>
    )
};

export default Item;