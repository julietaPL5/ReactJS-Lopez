
const CartWidget = () => {

    const styleCartWidget = {
        height: "40px",
        width: "40px",
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
        <div style={{display: "flex", justifyContent: "space-around"}}>
            <img src="cart-fill.svg" alt="cart" style={styleCartWidget} />
            <span style={styleSpan}>2</span>
        </div>   
    )
}

export default CartWidget