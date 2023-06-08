import React from "react";
import "../styles/transfer.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function TransferMoney(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [done, setDone] = useState([]);
  const [sender,setSender]= useState("");
  const [receiver,setReceiver]= useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((res) => setDone(res.data))
      .catch((err) => console.log(err));
  }, []);

 
  const [values, setValues] = useState({
    balance: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8000/read/" + id)
      .then((res) => {
        setValues(res.data[0].balance);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleTransfer = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/moneyTransfer/" + id, values)
      .then((res) => {
        navigate("/customer");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="box">
        <form onSubmit={handleTransfer}>
          <h2>Transfer Money</h2>
          <p>Transfer from:</p>
          <select name="customers" id="customers1" placeholder="To">
            {done.map((item, id) => {
              return (
                <option key={id} id="option1" value={item.name}>
                  {item.name}
                </option>
              );
            })}
          </select>
         
          <p>Transfer To:</p>
          <select name="customers" id="customers1" placeholder="To">
            {done.map((item, id) => {
              return (
                <option key={id} id="option1" value={item.name}>
                  {item.name}
                </option>
              );
            })}
          </select>
         
          <label>Amount to transfer</label>
          <input
            type="number"
            value={values.balance}
            onChange={(e) => setValues({ ...values, balance: e.target.value })}
            className="amount"
            placeholder="Enter Amount"
            required
          />
          <input type="submit" className="submitBtn" />
        </form>
      </div>
    </>
  );
}

export default TransferMoney;
