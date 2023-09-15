

const Navbar = () => {

    const styleHeader = {
        margin: 0,
        padding: "10px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    }
    const styleUl = {
        textDecoration: "none",
        listStyle: "none",
        margin: "0 30px",
        padding: 0,
        fontSize: "25px",
        display: "flex",
        flexDirection: "row",
        
    }
    const styleList = {
        margin: "0 20px",
    }
    const styleTitulo = {
        fontSize: "55px",
        margin: "0 30px",
        textDecoration: "none"
    }
    const styleLink = {
        color: "#000",
        textDecoration: "none"
    }

    return (
        <div style={styleHeader}>
            <ul style={styleUl}>
                <li style={styleList}><a href="#" style={styleLink}>CD</a></li>
                <li style={styleList}><a href="#" style={styleLink}>Vinilos</a></li>
                <li style={styleList}><a href="#" style={styleLink}>Cassettes</a></li>
            </ul>
            <h1 style={styleTitulo}><a href="#" style={styleLink}>Taylor Swift</a></h1>
        </div>
    )
}

export default Navbar