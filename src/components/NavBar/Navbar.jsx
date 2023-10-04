import '../../App.css';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {

    const styleHeader = {
        backgroundColor: "#a791bf",
        height: "fit-content",
        margin: 0,
        padding: "10px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "16px",
    }
    const styleUl = {
        textDecoration: "none",
        listStyle: "none",
        margin: "0 30px",
        padding: 0,
        fontSize: "19px",
        display: "flex",
        flexDirection: "row",
        flexGrow: 1, 
    }
    const styleList = {
        margin: "0 20px",
    }
    const styleTitulo = {
        fontSize: "55px",
        margin: "0 30px",
        textDecoration: "none",
        textAlign: "center",
        flexGrow: 1
    }
    const styleLink = {
        color: "#000",
        textDecoration: "none"
    }
    const styleCartWidget = {
        display: "flex",
        justifyContent: "center",
        flexGrow: 1,
    }

    return (
        <div style={styleHeader}>
            <h1 style={styleTitulo}><Link to="/" style={styleLink}>Taylor Swift</Link></h1>
            <ul style={styleUl}>
                <li style={styleList} className='listNavBar'><Link to="/products/cd" style={styleLink}>CD</Link></li>
                <li style={styleList} className='listNavBar'><Link to="/products/vinilo" style={styleLink}>Vinilos</Link></li>
                <li style={styleList} className='listNavBar'><Link to="/products/cassette" style={styleLink}>Cassettes</Link></li>
            </ul>
            <CartWidget style={styleCartWidget}/>
        </div>
    )
}

export default Navbar