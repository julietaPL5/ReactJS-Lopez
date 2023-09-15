
import Navbar from './components/Navbar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';


function App() {

  const styleHeader = {
    backgroundColor: "#a791bf",
    height: "fit-content",

    margin: 0,
    padding: "10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  }

  return (
    <div>
      <header style={styleHeader}>
        <Navbar />
        <CartWidget />
      </header>
      <div>
        <ItemListContainer />
      </div>
    </div>
  ) 
}

export default App;
