import React,{useState} from 'react';
import '../styles/customer.css';


function Transactions(props) {
    const CustomerData=[
        {
            sn: 1,
            name:'Puspa',
            acc_number: 1001223,
            balance: 1000
        }, {
            sn: 2,
            name:'Deepa',
            acc_number: 1001224,
            balance: 1050
        },
        {
            sn: 3,
            name:'Bhawana',
            acc_number: 1001225,
            balance: 2000
        },
        {
            sn: 4,
            name:'Hari',
            acc_number: 1001226,
            balance: 5000
        },
        {
            sn: 5,
            name:'Krishna',
            acc_number: 1001227,
            balance: 3000
        },
        {
            sn: 6,
            name:'Shiva',
            acc_number: 1001228,
            balance: 6000
        },
        {
            sn: 7,
            name:'Ganesh',
            acc_number: 1001229,
            balance: 10000
        },
        {
            sn: 8,
            name:'Ram',
            acc_number: 1001230,
            balance: 8000
        },
        {
            sn: 9,
            name:'Shiva',
            acc_number: 10018730,
            balance: 7000
        },
        {
            sn: 10,
            name:'Durga',
            acc_number: 1111230,
            balance: 11000
        },
    ]
//     const data=collection(database,'customers');
// const[done,setDone]=useState([]);
// const getCustomers=async ()=>{
//     const res =await getDoc(data);
//     const done=res.docs.map((item)=>{
//         return { ...item.data()}
//     });
//     setDone(done)
// }
// getCustomers()
    return (
        <>
        <p>hello</p>
        <div>
             <div >
             <table className='customers_table'>
        <tr className='headings'>
          <th>Serial number</th>
          <th>Name</th>
          <th>Account number</th>
          <th>Balance</th>
        </tr>
        {
            CustomerData.map((item,i)=>{
                return (
                    <tr key={i} className='values'>
              <td>{item.sn}</td>
              <td>{item.name}</td>
              <td>{item.acc_number}</td>
              <td>{item.balance}</td>
            </tr>

                )
            })
        }
        
        </table>
        </div>
        </div>
        </>
    );
}

export default Transactions;