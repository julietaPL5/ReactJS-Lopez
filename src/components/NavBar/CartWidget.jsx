import cartFill from '../../assets/icons/cartFill.svg'


const CartWidget = (props) => {

    const styleCartWidget = {
        height: "30px",
        width: "30px",
        cursor: "pointer",
    }
    const styleSpan = {
        backgroundColor: "#dccfeb",
        height: "20px",
        width:"20px",
        borderRadius: "8px",
        textAlign: "center",
    }

    return (
        <div style={props.style}>
            <img src={cartFill} alt="cart" style={styleCartWidget} />
            <span style={styleSpan}>2</span>
        </div>   
    )
}

export default CartWidget