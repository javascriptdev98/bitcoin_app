import Bottomnav from "./components/Bottomnav/Bottomnav";
import Btcbox from "./components/BtcBox/Btcbox";
import Tabs from "./components/Tabs/Tabs";
import Charts from "./components/charts/Charts";
import Header from "./components/header/Header";
import StockItem from "./components/stockItem/StockItem";
import "./scss/index.scss";


function App() {
  return (
    <div className="App"> 
   
    <Header/>
    <div className="app-container">
    <StockItem/>
    <Tabs/>
    <Charts/>
    <Btcbox/>
    </div>
   
    <Bottomnav/>
    </div>
  );
}

export default App;
