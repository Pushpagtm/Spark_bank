import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Customer from './components/Customer';
import Transactions from './components/Transactions';
import TransferMoney from './components/TransferMoney';
import Service from './components/Service';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>

      <Home/>
      <Service/>
      
        <Routes>
       <Route path='/customer' Component={Customer}/>
       <Route path='/transaction' Component={Transactions}/>
       <Route path='/ moneyTransfer' Component={TransferMoney}/>

      
        </Routes>
      </Router>
   
    </div>
  );
}

export default App;
