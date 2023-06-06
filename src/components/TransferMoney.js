import React from 'react';
import '../styles/transfer.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';

function TransferMoney(props) {
    const navigate=useNavigate();
    const {id}=useParams();
    const[result,setResult]=('');
    const[customer,setCustomer]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/read/'+id)
        .then(res=>
            {
                setCustomer(res.data[0]);
            })
        .catch(err=>console.log(err))
    },[])
    const[values,setValues]=useState({
        balance:'',
    })
   
    useEffect(()=>{
        axios.get('http://localhost:8000/read/'+id)
        .then(res=>
            {
                setValues(res.data[0].balance);
            })
        .catch(err=>console.log(err))
    },[])
  
    const handleTransfer=(e)=>{
        e.preventDefault();
        axios.put('http://localhost:8000/moneyTransfer/'+id,values).then(res=>{
            navigate('/customer')

        }).catch(err=>console.log(err))

    }

    return (
        <>
        <div className='box'>
            <form onSubmit={handleTransfer}>
            <h2>Transfer Money</h2>
            <h2>Customer Name:{customer.name}</h2>
            <h2>Account Number:{customer.acc_number}</h2>
            <h2>Current Balance:{customer.balance}</h2>
            <label>Amount to transfer</label>
            <input type="number"  value={values.balance} onChange={(e)=>setValues({...values,balance:e.target.value})} className='amount' placeholder='Enter Amount' required />
             <input type="submit" className='submitBtn' />
            </form>
        
           

        </div>
          
        </>
    );
}

export default TransferMoney;