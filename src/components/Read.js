import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/read.css';
function Read(props) {
    const {id}=useParams();
    const[customer,setCustomer]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/read/'+id)
        .then(res=>
            {
                setCustomer(res.data[0]);
            })
        .catch(err=>console.log(err))
    },[])
    
    return (
        <div className='box'>
      {  customer &&     <div className='innerbox'>
            <h2>Customer Details</h2>
            <h2>Customer ID:{customer.id}</h2>
            <h2>Customer Name:{customer.name}</h2>
            <h2>Account Number:{customer.acc_number}</h2>
            <h2>Balance:{customer.balance}</h2>
            <Link to='/customer' className='link'>Back</Link>


            </div>}
           
           
        </div>
    );
}

export default Read;