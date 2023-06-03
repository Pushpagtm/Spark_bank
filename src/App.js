import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Customer from './components/Customer';
import Transactions from './components/Transactions';
import TransferMoney from './components/TransferMoney';
import Service from './components/Service';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>

      <Home/>
      <Service/>
      
        <Routes>
       <Route path='/customer'  element={<Customer/>}/>
       <Route path='/transaction' element={<Transactions/>}/>
       <Route path='/ moneyTransfer'element={<TransferMoney/>}/>

      
        </Routes>
        <Footer/>
      </Router>
   
    </div>
  );
}

export default App;
