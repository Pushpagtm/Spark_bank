import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Customer from "./components/Customer";
import Transactions from "./components/Transactions";
import TransferMoney from "./components/TransferMoney";

import Footer from "./components/Footer";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
        <Route path="/"  element={<Home/>} />
          <Route path="/customer" element={<Customer/>} />
          <Route path="/transaction" element={<Transactions />} />
          <Route path="/moneyTransfer" element={<TransferMoney />} />
        
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
