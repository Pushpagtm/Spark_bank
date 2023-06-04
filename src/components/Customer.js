import React, { useState } from 'react';
import '../styles/customer.css';
import { collection, getDoc } from 'firebase/firestore';
import { database } from '../firebaseConfig';
function Customer(props) {
    const data=collection(database,'customers');
    const[done,setDone]=useState([]);
    const getCustomers=async ()=>{
        const res =await getDoc(data);
        const done=res.docs.map((item)=>{
            return { ...item.data()}
        });
        setDone(done)
    }
getCustomers()
    return (
        <div >
             <table className='customers_table'>
        <tr className='headings'>
          <th>Serial number</th>
          <th>Name</th>
          <th>Account number</th>
          <th>Balance</th>
        </tr>
        {
            done.map((item,i)=>{
                return (
                    <tr key={i} className='values'>
              <td>{item.sn}</td>
              <td>{item.name}</td>
              <td>{item.account_number}</td>
              <td>{item.balance}</td>
            </tr>

                )
            })
        }
        
        </table>
        </div>
    );
}

export default Customer;